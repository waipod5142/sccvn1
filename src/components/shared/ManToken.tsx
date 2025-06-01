import { useEffect, useState } from 'react';
import axios from 'axios';
import { http } from '@/lib/http';
import ModalPasscode from '@/uti/ModalPasscode';
import ModalRestaurant from '@/uti/ModalRestaurant';
import { Man } from '@/lib/typeMan';

interface Data {
  _id: string;
  id: string;
  name: string;
  position: string;
  department: string;
  site: string;
  type: string;
  eSite: string;
  status: string;
  company: string;
  trans: Item[];
}

// Change only these Items
interface Item {
  _id: string;
  id: string;
  date: string;
  token: string;
}

interface HeaderComponentProps {
  bu: string | undefined;
  data: Man | null;
  man: string | undefined;
}

const getDetail = async (
  bu: string | undefined,
  man: string | undefined,
  id: string | undefined
): Promise<Data | null> => {
  try {
    const res = await axios.get(`${http}vehicleTr_one`, {
      params: { bu, type: man?.toLowerCase(), id },
      headers: { 'Content-Type': 'application/json' },
    });

    return res.status === 200 ? res.data : null;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

const ManToken = ({ bu, data, man }: HeaderComponentProps) => {
  const [tokenData, setTokenData] = useState<Data | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showModalRestaurant, setShowModalRestaurant] = useState(false);
  const [visibleTokens, setVisibleTokens] = useState<string[]>([]);
  const [selectedToken, setSelectedToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (data?.id) {
        const result = await getDetail(bu, 'token', data.id);
        setTokenData(result); // Store the entire Data object
      }
    };

    fetchData();
  }, [bu, man, data]);

  // Get today's date adjusted to GMT+7 (Thailand Time)
  const now = new Date();
  const thailandTime = new Date(now.getTime() + 7 * 60 * 60 * 1000); // Add 7 hours
  const today = thailandTime.toISOString().split('T')[0];

  // Filter transactions where date matches today
  const todayTokens =
    tokenData?.trans
      ?.filter((token) => token.date.split('T')[0] === today)
      .map((t) => t.token) || [];

  return (
    <div className="py-2">
      {todayTokens.length > 0 && (
        <div className="p-4">
          <h2 className="text-xl font-bold">รหัสซื้ออาหารวันนี้</h2>
          <p className="border-green-500 border-2 rounded-md">
            {new Date().toLocaleString('en-GB', { hour12: false })}
          </p>

          <div className="bg-gray-100 p-4 rounded">
            {todayTokens.map((token, index) => (
              <div key={index} className="my-2">
                <span
                  className={`noselect block p-4 cursor-pointer ${
                    visibleTokens.includes(token)
                      ? 'text-gray-800'
                      : 'text-gray-800 blur-md'
                  } ${
                    token.startsWith('b') ? 'bg-rose-300' : 'bg-yellow-300'
                  } rounded-md text-center font-bold text-xl animate-bounce`}
                  onClick={() => {
                    if (!visibleTokens.includes(token)) {
                      setSelectedToken(token);
                      setShowModal(true);
                    } else {
                      setShowModalRestaurant(true);
                    }
                  }}
                >
                  {token}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {showModal && selectedToken && (
        <ModalPasscode
          id={data?.id ?? ''}
          token={selectedToken}
          onClose={() => setShowModal(false)}
          onPasswordSubmit={(token) =>
            setVisibleTokens((prev) => [...prev, token])
          }
        />
      )}
      {showModalRestaurant && selectedToken && (
        <ModalRestaurant
          token={selectedToken}
          onClose={() => setShowModalRestaurant(false)}
        />
      )}
    </div>
  );
};

export default ManToken;
