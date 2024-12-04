import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content }) =>
  isOpen ? (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-11/12 lg:w-1/2 p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {content}
        <button
          className="mt-4 bg-rose-500 text-white py-2 px-4 rounded-full"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  ) : null;

export default Modal;
