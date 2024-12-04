import React from 'react';
import VehicleDetail from './VehicleDetail';
import Loading from '@/components/shared/Loader';
import { Machine as VehicleData, MachineItem } from '@/lib/typeMachine';

interface ModalContentProps {
  // selectedInspection: Inspection | null;
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
  // selectedInspection,
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

export default ModalContent;
