import { motion } from 'framer-motion';
import MachineModal from '@/_auth/forms/MachineModal';

interface FormProps {
  bu: string | undefined;
  id: string;
  machine: string | undefined;
  setFormVisible: (visible: boolean) => void;
}

const Modal: React.FC<FormProps> = ({ id, machine, bu, setFormVisible }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      setFormVisible(false);
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
        className="w-4/5 md:w-3/5 lg:w-2/5 h-[80vh] p-6 bg-white rounded-lg shadow-md transform overflow-auto"
        initial={{ y: '-100vh' }}
        animate={{
          y: 0,
          transition: { type: 'spring', stiffness: 100, damping: 10 },
        }}
      >
        <MachineModal bu={bu} machine={machine} id={id} />
      </motion.div>
    </motion.div>
  );
};

export default Modal;
