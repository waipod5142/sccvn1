import { motion } from 'framer-motion';

type ModalProps = {
  setSelectedImg: (img: string | null) => void;
  selectedImg: string;
};

const Modal: React.FC<ModalProps> = ({ setSelectedImg, selectedImg }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // This ensures that the modal will only close when the user clicks on the backdrop, not the image
    if (e.currentTarget === e.target) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center"
      style={{ zIndex: 5000 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged pic"
        className="block max-w-[60%] max-h-[80%] my-16 mx-auto shadow-lg border-4 border-white rounded-md"
        initial={{ y: '-100vh' }}
        animate={{
          y: 0,
          transition: { type: 'spring', stiffness: 100, damping: 10 },
        }}
      />
    </motion.div>
  );
};

export default Modal;
