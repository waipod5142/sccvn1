import { useState, useEffect } from 'react';
import axios from 'axios';
import { http } from '@/lib/http';
import timeDifferenceInMinutes from '@/uti/timeDiff';
import timeDifferenceInDays from '@/uti/dayDiff';
import ModalMap from '@/uti/ModalMap';
import ModalImage from '@/uti/ModalImage';
import { getStorage, ref, deleteObject } from 'firebase/storage';
import { ArrowDown } from 'lucide-react';
import { loadQuestions } from '@/uti/loadQuestionsMan';
import { ManItem } from '@/lib/typeMan';
import { DetailType, MapItem } from '@/lib/typeMachine';

interface Man {
  bu: string | undefined;
  dataTr: ManItem[];
  man: string | undefined;
}

// Utility function to delete a key from an object
const deleteKey = <T, K extends keyof T>(obj: T, key: K): void => {
  delete obj[key];
};

const Detail = ({ bu, dataTr, man }: Man) => {
  const [showAll, setShowAll] = useState(false);
  const [formVisibleMap, setFormVisibleMap] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null | undefined>(
    null
  );
  const [detailFields, setDetailFields] = useState<DetailType[]>([]);

  const storage = getStorage();

  useEffect(() => {
    const fetchDetailFields = async () => {
      try {
        const { detailFields } = await loadQuestions(bu, man);
        setDetailFields(detailFields);
      } catch (error) {
        console.error('Error loading detail fields:', error);
      }
    };

    fetchDetailFields();
  }, [bu, man]);

  const handleDeleteClick = async (id: string, item: ManItem) => {
    const isConfirmed = window.confirm(
      'Are you sure you want to delete this item? This action cannot be undone'
    );

    if (!isConfirmed) return; // Exit if the user cancels the deletion
    try {
      // Loop through the item and delete fields ending with 'P' and handle URLs
      (Object.keys(item) as (keyof ManItem)[]).forEach(async (key) => {
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
        `${http}rescueTr_delete?id=${id}&type=${man?.toLocaleLowerCase()}&bu=${bu}`,
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
    url: '',
  });

  const handleShowMap = (item: ManItem) => {
    if (item.lat !== undefined && item.lng !== undefined) {
      setSelectedItem({
        lat: item.lat,
        lng: item.lng,
        id: item.id,
        inspector: item.id,
        date: item.date,
        url: item.url,
      });
      setFormVisibleMap(true);
    } else {
      console.log(item.lat);
    }
  };

  const handleShowImage = (url?: string | undefined) => {
    setSelectedImg(url);
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
                  new Date().toLocaleDateString() && (!item.token?.startsWith('b') ? 'bg-yellow-200' : 'bg-rose-200')
              }`}
            >
              {item.type !== 'coupon' && (
                <div
                  className={`flex justify-end ${
                    timeDifferenceInMinutes(new Date(item.date)) > 5 ||
                    item.date === 'Invalid Date' ||
                    item.date === undefined
                      ? 'hidden' //hidden
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
              )}

              <ul>
                {detailFields.map(({ field, label }) =>
                  item[field as keyof ManItem] &&
                  item[field as keyof ManItem] !== 'null' ? (
                    <li key={field} className="text-slate-400 px-2">
                      {label}{' '}
                      <strong
                        className={`${
                          item[field as keyof ManItem] === 'Pass' ||
                          item[field as keyof ManItem] === 'yes' ||
                          item[field as keyof ManItem] === 'Understand'
                            ? 'bg-green-600 text-white rounded-sm px-2'
                            : item[field as keyof ManItem] === 'NotPass' ||
                              item[field as keyof ManItem] === 'no'
                            ? 'bg-rose-600 text-white rounded-sm px-2'
                            : item[field as keyof ManItem] === 'N/A' ||
                              item[field as keyof ManItem] === 'na'
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
                              src={item[field as keyof ManItem] as string}
                              alt="image"
                              onClick={() =>
                                handleShowImage(
                                  item[field as keyof ManItem] as string
                                )
                              }
                            />
                          </figure>
                        ) : field === 'date' ? (
                          `${
                            new Date(
                              new Date(item[field as keyof ManItem] as string)
                            ).toDateString() ===
                            new Date(new Date()).toDateString()
                              ? ''
                              : `${Math.round(
                                  timeDifferenceInDays(
                                    new Date(
                                      item[field as keyof ManItem] as string
                                    )
                                  )
                                )} days ago on `
                          }
                          ${new Date(item[field as keyof ManItem] as string)
                            .toLocaleString('en-GB', {
                              hour12: false,
                            })
                            .toString()}`
                        ) : field === 'formStartTime' ? (
                          <>
                            {`${
                              new Date(
                                new Date(item[field as keyof ManItem] as string)
                              ).toDateString() ===
                              new Date(new Date()).toDateString()
                                ? 'Today at '
                                : `${Math.round(
                                    timeDifferenceInDays(
                                      new Date(
                                        item[field as keyof ManItem] as string
                                      )
                                    )
                                  )} days ago on `
                            }
                            ${new Date(item[field as keyof ManItem] as string)
                              .toLocaleString('en-GB', {
                                hour12: false,
                              })
                              .toString()}`}

                            {item['date'] && (
                              <span className="block mt-1 text-blue-600">
                                {(() => {
                                  const startTime = new Date(
                                    item[field as keyof ManItem] as string
                                  ).getTime();
                                  const endTime = new Date(
                                    item['date'] as string
                                  ).getTime();
                                  const durationMs = endTime - startTime;

                                  // Handle invalid or negative durations
                                  if (isNaN(durationMs) || durationMs < 0) {
                                    return 'Duration: Invalid timing';
                                  }

                                  // Convert to minutes and seconds
                                  const durationMinutes = Math.floor(
                                    durationMs / (1000 * 60)
                                  );
                                  const durationSeconds = Math.floor(
                                    (durationMs % (1000 * 60)) / 1000
                                  );

                                  if (durationMinutes > 60) {
                                    const hours = Math.floor(
                                      durationMinutes / 60
                                    );
                                    const minutes = durationMinutes % 60;
                                    return `Duration: ${hours}h ${minutes}m ${durationSeconds}s`;
                                  }

                                  return `Duration: ${durationMinutes}m ${durationSeconds}s`;
                                })()}
                              </span>
                            )}
                          </>
                        ) : field === 'expirationDate' ? (
                          (() => {
                            const expirationDate = new Date(
                              item[field as keyof ManItem] as string
                            );

                            // Check if the date is valid
                            if (isNaN(expirationDate.getTime())) {
                              return `${item[field as keyof ManItem]}`;
                            }

                            const diffDays = Math.round(
                              timeDifferenceInDays(expirationDate)
                            );

                            // Format the display text
                            let expirationText = '';
                            if (diffDays > 0) {
                              expirationText = `Expires in ${diffDays} days - `;
                            } else if (diffDays < 0) {
                              expirationText = `Expired ${Math.abs(
                                diffDays
                              )} days ago - `;
                            } else {
                              expirationText = 'Expires today - ';
                            }

                            // Add the formatted date
                            expirationText +=
                              expirationDate.toLocaleDateString('en-GB');

                            return expirationText;
                          })()
                        ) : field === 'trainingDate' ? (
                          (() => {
                            const expirationDate = new Date(
                              item[field as keyof ManItem] as string
                            );

                            // Check if the date is valid
                            if (isNaN(expirationDate.getTime())) {
                              return `${item[field as keyof ManItem]}`;
                            }

                            const diffDays = Math.round(
                              timeDifferenceInDays(expirationDate)
                            );

                            // Format the display text
                            let expirationText = '';
                            if (diffDays > 0) {
                              expirationText = `Expires in ${diffDays} days - `;
                            } else if (diffDays < 0) {
                              expirationText = `${Math.abs(
                                diffDays
                              )} days ago - `;
                            } else {
                              expirationText = 'Expires today - ';
                            }

                            // Add the formatted date
                            expirationText +=
                              expirationDate.toLocaleDateString('en-GB');

                            return expirationText;
                          })()
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
                          `${item[field as keyof ManItem]}`
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
            url={selectedItem.url}
            setFormVisibleMap={setFormVisibleMap}
          />
        )}
      {selectedImg && (
        <ModalImage selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};
export default Detail;
