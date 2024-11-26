import { useState, useEffect } from 'react';
import ModalMap from '@/uti/ModalMap';
import ModalImage from '@/uti/ModalImage';
import ModalEdit from '@/uti/ModalEdit';
import Loader from '@/components/shared/Loader';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { loadQuestions } from '@/uti/loadQuestions';
import timeDifferenceInDays from '@/uti/dayDiff';
import {
  Machine,
  MachineItem,
  FilteredMachineItem,
  MapItem,
  DetailType,
  MachineProps,
} from '@/lib/typeMachine';

const Detail = ({ dataTr, item }: MachineProps) => {
  const [showAll, setShowAll] = useState(false);
  const [formEditVisible, setFormEditVisible] = useState(false);
  const [selectedEdit, setSelectedEdit] = useState<
    FilteredMachineItem | null | undefined
  >(null);
  const [formVisibleMap, setFormVisibleMap] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null | undefined>(
    null
  );
  const [selectedItem, setSelectedItem] = useState<MapItem>({
    lat: undefined,
    lng: undefined,
    id: '',
    inspector: '',
    date: '',
  });

  const [detailFields, setDetailFields] = useState<DetailType[]>([]);

  useEffect(() => {
    const fetchDetailFields = async () => {
      try {
        const { detailFields } = await loadQuestions('vn', item);
        setDetailFields(detailFields);
      } catch (error) {
        console.error('Error loading detail fields:', error);
      }
    };

    fetchDetailFields();
  }, [item]);

  const handleEditClick = (item: FilteredMachineItem | undefined) => {
    if (item) {
      setSelectedEdit(item);
      setFormEditVisible(true);
    } else {
      console.log(item);
    }
  };

  const filterCloseIssue = (data: Machine[]): FilteredMachineItem[] => {
    return data
      .flatMap((item) => item.trans as MachineItem[]) // Flatten the array
      .filter(
        (transItem) =>
          Object.values(transItem).includes('NotPass') &&
          transItem.responder !== undefined
      ) // Filter for any "NotPass" and non-empty responder
      .map((transItem) => {
        const filteredEntries = Object.entries(transItem).filter(
          ([, value]) => value === 'NotPass'
        );

        const additionalEntries = filteredEntries.flatMap(([key]) => {
          return [
            [`${key}P`, transItem[`${key}P` as keyof MachineItem] || ''],
            [`${key}R`, transItem[`${key}R` as keyof MachineItem] || ''],
            [`${key}A`, transItem[`${key}A` as keyof MachineItem] || ''],
            [`${key}F`, transItem[`${key}F` as keyof MachineItem] || ''],
          ];
        });

        const filteredObject = Object.fromEntries([
          ...filteredEntries,
          ...additionalEntries,
        ]) as {
          [key: string]: string;
        };

        // Find the parent item to get the email
        const parentItem = data.find((item) =>
          item.trans.some((t) => t._id === transItem._id)
        );

        return {
          _id: transItem._id,
          id: transItem.id,
          date: transItem.date,
          inspector: transItem.inspector,
          responder: transItem.responder,
          email: parentItem?.email || '', // Add email here
          ...filteredObject,
          remark: transItem.remark,
          lat: transItem.lat,
          lng: transItem.lng,
          url: transItem.url,
        };
      }) // Map to the desired structure
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort by date in descending order
  };

  if (!dataTr || dataTr.length === 0) {
    return <Loader />;
  }

  const openIssue = filterCloseIssue(dataTr);

  const handleShowMap = (item: FilteredMachineItem) => {
    if (item.lat !== undefined && item.lng !== undefined) {
      setSelectedItem({
        lat: item.lat,
        lng: item.lng,
        id: item.id,
        inspector: item.inspector,
        date: item.date,
      });
      setFormVisibleMap(true);
    }
  };

  const handleShowImage = (url?: string | undefined) => {
    setSelectedImg(url);
  };

  const displayedData = showAll ? openIssue : openIssue.slice(0, 1);

  return (
    <div className={`pb-2`}>
      <div className="flex justify-center items-center mb-2 text-3xl font-bold text-slate-900">
        <span className="text-slate-300 mx-1">Close </span>
        <span className="text-bold text-green-500">{openIssue.length}</span>
        <span className="text-slate-300 mx-1">issues</span>
      </div>
      <div className="flex gap-4 py-4 items-center md:justify-center"></div>
      {openIssue && (
        <div className="flex justify-center relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-slate-200 via-slate-500 to-slate-200 transform -translate-y-1/2 z-0"></div>
          <div
            className={`${
              showAll ? 'bg-rose-200' : 'bg-green-200'
            } flex items-center py-1 px-4 rounded-md mb-2 shadow-md hover:shadow-lg relative z-10 cursor-pointer`}
            onClick={() => {
              !showAll &&
                window.scrollBy({ top: 50, left: 0, behavior: 'smooth' });
              openIssue.length > 1 && setShowAll(!showAll);
            }}
          >
            {openIssue.length > 1 ? (
              showAll ? (
                <>
                  <span className="mr-1">Show less</span>{' '}
                  <ArrowDown className="transform rotate-180 h-4 w-4" />
                </>
              ) : (
                <>
                  <span className="mr-1">
                    Show all {openIssue.length} records
                  </span>
                  <ArrowDown className="h-4 w-4" />
                </>
              )
            ) : (
              `${openIssue.length} record`
            )}
          </div>
        </div>
      )}

      <div className="py-0">
        <ul className="rounded-md flex flex-col">
          {displayedData.map((value) => (
            <li
              key={value._id}
              className={`mb-4 shadow-md rounded-md text-slate-400 ${
                new Date(value.date).toDateString() ===
                  new Date().toDateString() && 'bg-yellow-50'
              }`}
            >
              <div
                className={`flex justify-start ${value.responder && 'hidden'}`}
              >
                <button
                  className="m-2 p-2 bg-slate-300 text-white rounded-md shadow-md hover:shadow-lg"
                  onClick={() => handleEditClick(value)}
                >
                  <img
                    src={'/assets/icons/edit.svg'}
                    alt="edit"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
              <ul>
                {detailFields.map(({ field, label }) =>
                  value[field as keyof FilteredMachineItem] &&
                  value[field as keyof FilteredMachineItem] !== 'null' ? (
                    <li key={field} className="text-slate-400 px-2">
                      {label}{' '}
                      <strong
                        className={`${
                          value[field as keyof FilteredMachineItem] === 'Pass'
                            ? 'bg-green-600 text-white rounded-sm px-2'
                            : value[field as keyof FilteredMachineItem] ===
                              'NotPass'
                            ? 'bg-rose-600 text-white rounded-sm px-2'
                            : value[field as keyof FilteredMachineItem] ===
                              'N/A'
                            ? 'bg-yellow-500 text-white rounded-sm px-2'
                            : 'text-slate-900'
                        } ${
                          field === 'date' &&
                          new Date(
                            value[field as keyof FilteredMachineItem] as string
                          ).toLocaleDateString() ===
                            new Date().toLocaleDateString() &&
                          'bg-green-400 text-white rounded-sm p-1'
                        }`}
                      >
                        {field === 'url' ||
                        /P$/.test(field) ||
                        /F$/.test(field) ? (
                          <figure
                            className={`w-full md:w-1/2 md:h-1/2 lg:w-1/4 lg:h-1/4 cursor-pointer ${
                              /P$/.test(field) && 'border-4 border-rose-500'
                            } ${
                              /F$/.test(field) && 'border-4 border-green-500'
                            }`}
                          >
                            <img
                              src={
                                value[
                                  field as keyof FilteredMachineItem
                                ] as string
                              }
                              alt="image"
                              onClick={() =>
                                handleShowImage(
                                  value[
                                    field as keyof FilteredMachineItem
                                  ] as string
                                )
                              }
                            />
                          </figure>
                        ) : field === 'date' ? (
                          `${
                            new Date(
                              new Date(
                                value[
                                  field as keyof FilteredMachineItem
                                ] as string
                              )
                            ).toDateString() === new Date().toDateString()
                              ? ''
                              : `${Math.round(
                                  timeDifferenceInDays(
                                    new Date(
                                      value[
                                        field as keyof FilteredMachineItem
                                      ] as string
                                    )
                                  )
                                )} days ago on `
                          }
                          ${new Date(
                            value[field as keyof FilteredMachineItem] as string
                          )
                            .toLocaleString('en-GB', {
                              hour12: false,
                            })
                            .toString()}`
                        ) : field === 'lat' ? (
                          <button
                            className="bg-grey-light hover:bg-grey text-grey-darkest font-bold p-2 rounded inline-flex items-center"
                            onClick={() => handleShowMap(value)}
                          >
                            <img
                              src={'/assets/icons/map.svg'}
                              alt="map"
                              width={40}
                              height={40}
                              className="pt-2"
                            />
                          </button>
                        ) : field === 'id' ? (
                          <Link
                            className="font-medium text-blue-500 hover:font-bold"
                            to={`/${item}/${
                              value[field as keyof FilteredMachineItem]
                            }`}
                            onClick={() => {
                              window.scrollTo(0, 0);
                            }}
                          >
                            {value[field as keyof FilteredMachineItem]}
                          </Link>
                        ) : (
                          `${value[field as keyof FilteredMachineItem]}`
                        )}
                      </strong>
                    </li>
                  ) : null
                )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      {openIssue && openIssue.length > 1 && showAll && (
        <div className="flex justify-center">
          <button
            className="flex items-center bg-rose-200 text-black px-4 py-1 rounded-md mb-4 shadow-md hover:shadow-lg cursor-pointer"
            onClick={() => {
              setShowAll(!showAll);
            }}
          >
            <>
              <span className="mr-1">Show less</span>{' '}
              <ArrowDown className="transform rotate-180 h-4 w-4" />
            </>
          </button>
        </div>
      )}
      {formVisibleMap &&
        selectedItem.lat !== undefined &&
        selectedItem.lng !== undefined && (
          <ModalMap
            lat={selectedItem.lat}
            lng={selectedItem.lng}
            id={selectedItem.id}
            inspector={selectedItem.inspector}
            date={selectedItem.date}
            setFormVisibleMap={setFormVisibleMap}
          />
        )}
      {selectedImg && (
        <ModalImage selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      {formEditVisible && (
        <ModalEdit
          item={selectedEdit}
          machine={item}
          setFormEditVisible={setFormEditVisible}
        />
      )}
    </div>
  );
};

export default Detail;
