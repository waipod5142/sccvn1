interface RiskMatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (rating: string) => void;
}

const RiskMatrixModal: React.FC<RiskMatrixModalProps> = ({
  isOpen,
  onClose,
  onSelect,
}) => {
  if (!isOpen) return null;

  const handleSelect = (rating: string) => {
    onSelect(rating);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-11/12 max-w-5xl">
        <h2 className="text-xl font-bold mb-4">Select a Risk Rating</h2>
        <div className="overflow-auto">
          {/* Risk Matrix Layout */}
          <div className="grid grid-cols-6 gap-1 mb-4">
            {/* Header Row */}
            <div className="col-span-1"></div>
            <div className="col-span-1 text-center font-bold">
              Insignificant (no injuries)
            </div>
            <div className="col-span-1 text-center font-bold">
              Minor (first aid treatment only)
            </div>
            <div className="col-span-1 text-center font-bold">
              Moderate (medical treatment)
            </div>
            <div className="col-span-1 text-center font-bold">
              Major (extensive injuries)
            </div>
            <div className="col-span-1 text-center font-bold">
              Catastrophic (death)
            </div>

            {/* Matrix Rows */}
            <div className="text-center font-bold">Almost certain</div>
            <button
              className="bg-orange-500 text-white p-2"
              onClick={() => handleSelect('3H')}
            >
              3H
            </button>
            <button
              className="bg-orange-500 text-white p-2"
              onClick={() => handleSelect('3H')}
            >
              3H
            </button>
            <button
              className="bg-rose-500 text-white p-2"
              onClick={() => handleSelect('4A')}
            >
              4A
            </button>
            <button
              className="bg-rose-500 text-white p-2"
              onClick={() => handleSelect('4A')}
            >
              4A
            </button>
            <button
              className="bg-rose-500 text-white p-2"
              onClick={() => handleSelect('4A')}
            >
              4A
            </button>

            <div className="text-center font-bold">Likely</div>
            <button
              className="bg-blue-500 text-white p-2"
              onClick={() => handleSelect('2M')}
            >
              2M
            </button>
            <button
              className="bg-orange-500 text-white p-2"
              onClick={() => handleSelect('3H')}
            >
              3H
            </button>
            <button
              className="bg-orange-500 text-white p-2"
              onClick={() => handleSelect('3H')}
            >
              3H
            </button>
            <button
              className="bg-rose-500 text-white p-2"
              onClick={() => handleSelect('4A')}
            >
              4A
            </button>
            <button
              className="bg-rose-500 text-white p-2"
              onClick={() => handleSelect('4A')}
            >
              4A
            </button>

            <div className="text-center font-bold">Possible</div>
            <button
              className="bg-green-500 text-white p-2"
              onClick={() => handleSelect('1L')}
            >
              1L
            </button>
            <button
              className="bg-blue-500 text-white p-2"
              onClick={() => handleSelect('2M')}
            >
              2M
            </button>
            <button
              className="bg-orange-500 text-white p-2"
              onClick={() => handleSelect('3H')}
            >
              3H
            </button>
            <button
              className="bg-orange-500 text-white p-2"
              onClick={() => handleSelect('3H')}
            >
              3H
            </button>
            <button
              className="bg-rose-500 text-white p-2"
              onClick={() => handleSelect('4A')}
            >
              4A
            </button>

            <div className="text-center font-bold">Unlikely</div>
            <button
              className="bg-green-500 text-white p-2"
              onClick={() => handleSelect('1L')}
            >
              1L
            </button>
            <button
              className="bg-green-500 text-white p-2"
              onClick={() => handleSelect('1L')}
            >
              1L
            </button>
            <button
              className="bg-blue-500 text-white p-2"
              onClick={() => handleSelect('2M')}
            >
              2M
            </button>
            <button
              className="bg-orange-500 text-white p-2"
              onClick={() => handleSelect('3H')}
            >
              3H
            </button>
            <button
              className="bg-rose-500 text-white p-2"
              onClick={() => handleSelect('4A')}
            >
              4A
            </button>

            <div className="text-center font-bold">Rare</div>
            <button
              className="bg-green-500 text-white p-2"
              onClick={() => handleSelect('1L')}
            >
              1L
            </button>
            <button
              className="bg-green-500 text-white p-2"
              onClick={() => handleSelect('1L')}
            >
              1L
            </button>
            <button
              className="bg-blue-500 text-white p-2"
              onClick={() => handleSelect('2M')}
            >
              2M
            </button>
            <button
              className="bg-orange-500 text-white p-2"
              onClick={() => handleSelect('3H')}
            >
              3H
            </button>
            <button
              className="bg-orange-500 text-white p-2"
              onClick={() => handleSelect('3H')}
            >
              3H
            </button>
          </div>

          {/* Risk Rating Definitions */}
          <h3 className="text-lg font-bold mb-2">Risk Rating Definitions</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-green-500 text-white flex items-center justify-center rounded">
                1L
              </div>
              <div>
                <p className="font-bold text-green-500">1L: Low</p>
                <p>
                  OK for now. Record and review if any
                  equipment/people/materials/work processes or procedures
                  change.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded">
                2M
              </div>
              <div>
                <p className="font-bold text-blue-500">2M: Moderate</p>
                <p>Follow management instructions.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-orange-500 text-white flex items-center justify-center rounded">
                3H
              </div>
              <div>
                <p className="font-bold text-orange-500">3H: High</p>
                <p>Highest management decision is required urgently.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-rose-500 text-white flex items-center justify-center rounded">
                4A
              </div>
              <div>
                <p className="font-bold text-rose-500">4A: Acute</p>
                <p>
                  ACT NOW – Urgent - do something about the risks immediately.
                  Requires immediate attention.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default RiskMatrixModal;
