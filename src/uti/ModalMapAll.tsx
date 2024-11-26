import { motion } from 'framer-motion';
import MapAll from '@/uti/MapAll';
import { Machine as VehicleData } from '@/lib/typeMachine';

interface ModalMapProps {
  bu: string | undefined;
  vehicleData: VehicleData[];
  setFormVisibleMapAll: (visible: boolean) => void;
}

const ModalGraph: React.FC<ModalMapProps> = ({
  bu,
  vehicleData,
  setFormVisibleMapAll,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      setFormVisibleMapAll(false);
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
        className="w-full max-w-4xl h-[80vh] bg-white rounded-lg shadow-lg p-6 mx-auto overflow-auto"
        initial={{ y: '-100vh' }}
        animate={{
          y: 0,
          transition: { type: 'spring', stiffness: 100, damping: 10 },
        }}
      >
        {/* Pass the vehicle data (including transactions) to the MachineGraphCopy */}

        <MapAll
          bu={bu}
          dataTr={vehicleData}
          setFormVisibleMapAll={setFormVisibleMapAll}
        />
      </motion.div>
    </motion.div>
  );
};

export default ModalGraph;
