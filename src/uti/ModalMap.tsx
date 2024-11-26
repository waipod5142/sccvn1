import { motion } from 'framer-motion';
import Map from '@/uti/Map';

interface ModalMapProps {
  lat: number;
  lng: number;
  id: string;
  inspector: string;
  date: string | number;
  setFormVisibleMap: (visible: boolean) => void;
}

const ModalMap: React.FC<ModalMapProps> = ({
  lat,
  lng,
  id,
  inspector,
  date,
  setFormVisibleMap,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      setFormVisibleMap(false);
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex justify-center items-center"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="w-4/5 md:w-3/5 lg:w-2/5 h-[80vh] bg-white rounded-lg shadow-lg border border-white p-1 mx-auto my-auto"
        initial={{ y: '-100vh' }}
        animate={{
          y: 0,
          transition: { type: 'spring', stiffness: 100, damping: 10 },
        }}
      >
        <Map lat={lat} lng={lng} id={id} inspector={inspector} date={date} />
      </motion.div>
    </motion.div>
  );
};

export default ModalMap;
