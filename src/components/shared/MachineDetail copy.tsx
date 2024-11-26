import { useState, useEffect } from 'react';
import axios from 'axios';
import { http } from '@/lib/http';
import timeDifferenceInMinutes from '@/uti/timeDiff';
import timeDifferenceInDays from '@/uti/dayDiff';
import ModalMap from '@/uti/ModalMap';
import ModalImage from '@/uti/ModalImage';
import ModalEdit from '@/uti/ModalEdit';
import { getStorage, ref, deleteObject } from 'firebase/storage';
import { ArrowDown } from 'lucide-react';
import { loadQuestions } from '@/uti/loadQuestions';
import { DetailType, MachineItem, MapItem } from '@/lib/typeMachine';

interface Machine {
  dataTr: MachineItem[];
  machine: string | undefined;
}

const defectPercentForItem = (item: MachineItem): number => {
  let total = 0;
  let notPass = 0;

  // Simplified example calculation
  Object.values(item).forEach((value) => {
    if (value === 'NotPass') notPass += 1;
    if (value === 'Pass' || value === 'NotPass') total += 1;
  });

  return total > 0 ? (notPass / total) * 100 : 0;
};

// Utility function to delete a key from an object
const deleteKey = <T, K extends keyof T>(obj: T, key: K): void => {
  delete obj[key];
};

const Detail = ({ dataTr, machine }: Machine) => {
  const [showAll, setShowAll] = useState(false);
  const [formEditVisible, setFormEditVisible] = useState(false);
  const [selectedEdit, setSelectedEdit] = useState<
    MachineItem | null | undefined
  >(null);
  const [formVisibleMap, setFormVisibleMap] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null | undefined>(
    null
  );
  const [detailFields, setDetailFields] = useState<DetailType[]>([]);

  const storage = getStorage();

  useEffect(() => {
    const fetchDetailFields = async () => {
      try {
        const { detailFields } = await loadQuestions('vn', machine);
        setDetailFields(detailFields);
      } catch (error) {
        console.error('Error loading detail fields:', error);
      }
    };

    fetchDetailFields();
  }, [machine]);

  const handleDeleteClick = async (id: string, item: MachineItem) => {
    try {
      // Loop through the item and delete fields ending with 'P' and handle URLs
      (Object.keys(item) as (keyof MachineItem)[]).forEach(async (key) => {
        if (
          (key.endsWith('P') || key.endsWith('F') || key.startsWith('url')) &&
          typeof item[key] === 'string' &&
          (item[key] as string).startsWith('http')
        ) {
          const url = item[key] as string;
          const desertRef = ref(storage, url);

          try {
            await deleteObject(desertRef);
            console.log('File deleted successfully');
          } catch (error) {
            console.log(error);
          }

          deleteKey(item, key); // Delete the field from the item
        }
      });

      const res = await axios.delete(
        `${http}${
          machine && machine.charAt(0).toLowerCase() + machine.slice(1)
        }Tr_delete?id=${id}`,
        {
          headers: {
            'Content-type': 'application/json',
          },
        }
      );
      console.log(res);

      if (res.status === 200) {
        window.location.reload();
      } else {
        throw new Error('Failed to delete');
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  // State to keep track of the selected item
  const [selectedItem, setSelectedItem] = useState<MapItem>({
    lat: undefined,
    lng: undefined,
    id: '',
    inspector: '',
    date: '',
  });

  const handleShowMap = (item: MachineItem) => {
    if (item.lat !== undefined && item.lng !== undefined) {
      setSelectedItem({
        lat: item.lat,
        lng: item.lng,
        id: item.id,
        inspector: item.inspector,
        date: item.date,
      });
      setFormVisibleMap(true);
    } else {
      console.log(item.lat);
    }
  };

  const handleShowImage = (url?: string | undefined) => {
    setSelectedImg(url);
  };

  const handleEditClick = (item: MachineItem | undefined) => {
    if (item) {
      setSelectedEdit(item);
      setFormEditVisible(true);
    } else {
      console.log(item);
    }
  };

  if (!dataTr || dataTr.length === 0) {
    return <div />;
  }

  const displayedData = showAll ? dataTr : dataTr.slice(0, 1);
  return (
    <div className={`px-2 sm:px-10 pb-2`}>
      {dataTr && (
        <div className="flex justify-center relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-slate-200 via-slate-500 to-slate-200 transform -translate-y-1/2 z-0"></div>
          <div
            className={`${
              showAll ? 'bg-rose-200' : 'bg-green-200'
            } flex items-center py-1 px-4 rounded-md mb-2 shadow-md hover:shadow-lg relative z-10 cursor-pointer`}
            onClick={() => {
              !showAll
                ? window.scrollBy({ top: 100, left: 0, behavior: 'smooth' })
                : window.scrollTo(0, 0);
              dataTr.length > 1 && setShowAll(!showAll);
            }}
          >
            {dataTr.length > 1 ? (
              showAll ? (
                <>
                  <span className="mr-1">Show less</span>{' '}
                  <ArrowDown className="transform rotate-180 h-4 w-4" />
                </>
              ) : (
                <>
                  <span className="mr-1">Show all {dataTr.length} records</span>
                  <ArrowDown className="h-4 w-4" />
                </>
              )
            ) : (
              `${dataTr.length} record`
            )}
          </div>
        </div>
      )}

      <div className="py-0">
        <ul className="rounded-md flex flex-col">
          {displayedData.map((item) => (
            <li
              key={item._id}
              className={`mb-4 shadow-md rounded-md text-slate-400 ${
                new Date(item.date).toLocaleDateString() ===
                  new Date().toLocaleDateString() && 'bg-yellow-50'
              }`}
            >
              <div
                className={`flex justify-end ${
                  timeDifferenceInMinutes(new Date(item.date)) > 5 ||
                  item.date === 'Invalid Date'
                    ? 'hidden'
                    : null
                }`}
              >
                <button
                  className="m-2 p-2 bg-slate-300 text-white rounded-md shadow-md hover:shadow-lg"
                  onClick={() => handleDeleteClick(item._id, item)}
                >
                  <img
                    src={'/assets/icons/delete.svg'}
                    alt="delete"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
              <div
                className={`flex justify-start ${
                  (item.responder ||
                    !Object.values(item).includes('NotPass')) &&
                  'hidden' // Hide button if any value is "NotPass"
                }`}
              >
                <button
                  className="m-2 p-2 bg-slate-300 text-white rounded-md shadow-md hover:shadow-lg"
                  onClick={() => handleEditClick(item)}
                >
                  <img
                    src={'/assets/icons/edit.svg'}
                    alt="edit"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
              <p
                className={`mt-2 mx-2 text-center rounded-sm ${
                  defectPercentForItem(item) > 0
                    ? 'bg-rose-400 text-white'
                    : 'bg-yellow-100 text-black'
                } rounded-sm p-1`}
              >
                Defect : {defectPercentForItem(item).toFixed(1)}%
              </p>

              <ul>
                {detailFields.map(({ field, label }) =>
                  item[field as keyof MachineItem] &&
                  item[field as keyof MachineItem] !== 'null' ? (
                    <li key={field} className="text-slate-400 px-2">
                      {label}{' '}
                      <strong
                        className={`${
                          item[field as keyof MachineItem] === 'Pass'
                            ? 'bg-green-600 text-white rounded-sm px-2'
                            : item[field as keyof MachineItem] === 'NotPass'
                            ? 'bg-rose-600 text-white rounded-sm px-2'
                            : item[field as keyof MachineItem] === 'N/A'
                            ? 'bg-yellow-500 text-white rounded-sm px-2'
                            : 'text-slate-900'
                        } ${
                          field === 'date' &&
                          new Date(item[field]).toLocaleDateString() ===
                            new Date().toLocaleDateString() &&
                          'bg-green-400 text-white rounded-sm p-1'
                        }
                        ${
                          field === 'date' &&
                          new Date(item[field]).setDate(
                            new Date(item[field]).getDate() + 30
                          ) < new Date().setDate(new Date().getDate()) &&
                          'bg-rose-500 text-white rounded-sm p-1'
                        }
                        `}
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
                              src={item[field as keyof MachineItem] as string}
                              alt="image"
                              onClick={() =>
                                handleShowImage(
                                  item[field as keyof MachineItem] as string
                                )
                              }
                            />
                          </figure>
                        ) : field === 'date' ? (
                          `${
                            new Date(
                              new Date(
                                item[field as keyof MachineItem] as string
                              )
                            ).toDateString() ===
                            new Date(new Date()).toDateString()
                              ? ''
                              : `${Math.round(
                                  timeDifferenceInDays(
                                    new Date(
                                      item[field as keyof MachineItem] as string
                                    )
                                  )
                                )} days ago on `
                          }
                          ${new Date(item[field as keyof MachineItem] as string)
                            .toLocaleString('en-GB', {
                              hour12: false,
                            })
                            .toString()}`
                        ) : field === 'lat' ? (
                          <button
                            className="bg-grey-light hover:bg-grey text-grey-darkest font-bold p-2 rounded inline-flex items-center"
                            onClick={() => handleShowMap(item)}
                          >
                            <img
                              src={'/assets/icons/map.svg'}
                              alt="map"
                              width={40}
                              height={40}
                              className="pt-2"
                            />
                          </button>
                        ) : (
                          `${item[field as keyof MachineItem]}`
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
      {dataTr && dataTr.length > 1 && showAll && (
        <div className="flex justify-center">
          <button
            className="flex items-center bg-rose-200 text-black px-4 py-1 rounded-md mb-4 shadow-md hover:shadow-lg cursor-pointer"
            onClick={() => {
              setShowAll(!showAll);
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 100);
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
          machine={machine}
          setFormEditVisible={setFormEditVisible}
        />
      )}
    </div>
  );
};
export default Detail;
