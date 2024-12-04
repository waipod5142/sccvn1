// Separate components for modularity

interface VehicleDetailProps {
  vehicle: VehicleData;
  idx: number;
  toggleTransactions: (vehicleId: string) => void;
  showAllTransactions: Record<string, boolean>;
  openMachineModal: (vehicleId: string, vehicleType: string) => void;
  openManModal: (vehicleId: string) => void;
  handleShowMap: (tran: MachineItem) => void;
  handleShowImage: (url: string | undefined) => void;
  isVideoUrl: (url: string) => boolean;
}

const VehicleDetail: React.FC<VehicleDetailProps> = ({
  vehicle,
  idx,
  toggleTransactions,
  showAllTransactions,
  openMachineModal,
  openManModal,
  handleShowMap,
  handleShowImage,
  isVideoUrl,
}) => (
  <div key={idx} className="mb-4">
    <p className="text-xl">
      {idx + 1}.{' '}
      {['employee', 'contractor', 'vendor'].includes(vehicle.type) ? (
        <span
          className="text-xl font-bold text-blue-500 cursor-pointer"
          onClick={() => openManModal(vehicle.id)}
        >
          {vehicle.id}
        </span>
      ) : (
        <span
          className="text-xl font-bold text-blue-500 cursor-pointer"
          onClick={() => openMachineModal(vehicle.id, vehicle.type)}
        >
          {vehicle.id}
        </span>
      )}
    </p>
    {vehicle.name && <p className="font-bold">Name: {vehicle.name}</p>}
    {vehicle.owner && <p>Owner: {vehicle.owner}</p>}
    {vehicle.defect && (
      <p className="bg-rose-500 text-white rounded-sm p-1">
        Defect: {vehicle.defect}
      </p>
    )}
    <p>Type: {vehicle.type}</p>
    <p>Site: {vehicle.site.toUpperCase()}</p>
    {vehicle.email && <p>Responsible person: {vehicle.email}</p>}
    {vehicle.kind && <p>Kind of: {vehicle.kind}</p>}
    {vehicle.trans.length > 1 && (
      <div
        className="flex items-center justify-end cursor-pointer text-blue-500 mt-2"
        onClick={() => toggleTransactions(vehicle.id)}
      >
        {showAllTransactions[vehicle.id] ? (
          <>
            <ChevronUp size={24} className="mr-2" />
            <span>Show Less</span>
          </>
        ) : (
          <>
            <ChevronDown size={24} className="mr-2" />
            <span>Show All</span>
          </>
        )}
      </div>
    )}
    {vehicle.trans.length > 0 ? (
      vehicle.trans
        .slice(0, showAllTransactions[vehicle.id] ? vehicle.trans.length : 1)
        .map((tran, index) => (
          <TransactionDetail
            key={index}
            transaction={tran}
            handleShowMap={handleShowMap}
            handleShowImage={handleShowImage}
            isVideoUrl={isVideoUrl}
          />
        ))
    ) : (
      <p className="text-rose-500">No transactions found.</p>
    )}
  </div>
);

interface ModalContentProps {
  selectedInspection: Inspection | null;
  vehicleData: VehicleData[];
  toggleTransactions: (vehicleId: string) => void;
  showAllTransactions: Record<string, boolean>;
  openMachineModal: (vehicleId: string, vehicleType: string) => void;
  openManModal: (vehicleId: string) => void;
  handleShowMap: (tran: MachineItem) => void;
  handleShowImage: (url: string | undefined) => void;
  isVideoUrl: (url: string) => boolean;
}

const ModalContent: React.FC<ModalContentProps> = ({
  selectedInspection,
  vehicleData,
  toggleTransactions,
  showAllTransactions,
  openMachineModal,
  openManModal,
  handleShowMap,
  handleShowImage,
  isVideoUrl,
}) => (
  <div className="p-4 overflow-auto max-h-96">
    {vehicleData.length > 0 ? (
      vehicleData.map((vehicle, idx) => (
        <VehicleDetail
          key={idx}
          vehicle={vehicle}
          idx={idx}
          toggleTransactions={toggleTransactions}
          showAllTransactions={showAllTransactions}
          openMachineModal={openMachineModal}
          openManModal={openManModal}
          handleShowMap={handleShowMap}
          handleShowImage={handleShowImage}
          isVideoUrl={isVideoUrl}
        />
      ))
    ) : (
      <Loading />
    )}
  </div>
);

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
}> = ({ isOpen, onClose, content }) =>
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

// Use components in the main modal logic

<Modal
  isOpen={modalOpen}
  onClose={handleCloseModal}
  content={
    <>
      <h2 className="text-2xl font-semibold mb-4">
        Details for{' '}
        {(bu && machineTitles[bu + selectedType || '']) || selectedType} at{' '}
        {selectedSite?.toUpperCase()}
      </h2>
      <div className="mt-4 flex space-x-4">
        <button
          onClick={() => setFormVisibleMapAll(true)}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <img src="/assets/icons/map2.svg" alt="Map" width={40} height={40} />
        </button>
        <button
          onClick={() => setFormVisibleGraph(true)}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <img
            src="/assets/icons/graph.svg"
            alt="Graph"
            width={40}
            height={40}
          />
        </button>
      </div>
      <ModalContent
        selectedInspection={selectedInspection}
        vehicleData={vehicleData}
        toggleTransactions={toggleTransactions}
        showAllTransactions={showAllTransactions}
        openMachineModal={openMachineModal}
        openManModal={openManModal}
        handleShowMap={handleShowMap}
        handleShowImage={handleShowImage}
        isVideoUrl={isVideoUrl}
      />
    </>
  }
/>;
