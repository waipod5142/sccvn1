import React from 'react';
import VehicleDetail from './VehicleDetailMan';
import Loading from '@/components/shared/Loader';
import { Man } from '@/lib/typeMan';
interface FormData {
  _id: string;
  agreementWorkSafely: string;
  area?: string;
  alertNo?: string;
  commentSafeBehavior: string;
  date: string;
  discussUnsafeBehavior: string;
  id: string;
  lat: number;
  lng: number;
  url: string;
  observeContact: string;
  otherSafetyIssues: string;
  remark: string;
  trans: Man[];
}
interface ModalContentProps {
  vehicleData: FormData[];
  // toggleTransactions: (vehicleId: string) => void;
  showAllTransactions: Record<string, boolean>;
  // openMachineModal: (vehicleId: string, vehicleType: string) => void;
  openManModal: (vehicleId: string) => void;
  handleShowImage: (url: string | undefined) => void;
  isVideoUrl: (url: string) => boolean;
}

const ModalContent: React.FC<ModalContentProps> = ({
  vehicleData,
  // toggleTransactions,
  showAllTransactions,
  openManModal,
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
          // toggleTransactions={toggleTransactions}
          showAllTransactions={showAllTransactions}
          openManModal={openManModal}
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
