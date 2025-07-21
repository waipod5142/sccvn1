import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "@/components/shared/Loader";
import Modal from "./Modal";
import { http } from "@/lib/http";

// Interfaces for assessment data
interface RiskAssessmentRecord {
  _id: string;
  id: string;
  date: string;
  intervieweeName: string;
  fpeApplication: string;
  potentialRisks: string;
  riskControl: string;
  raUnderstanding: string;
  type: string;
  area: string;
  url?: string;
  db: string;
  collection: string;
}

interface BootRecord {
  _id: string;
  id: string;
  date: string;
  area: string;
  contactPerson: string;
  agreementWorkSafely: string;
  commentSafeBehavior: string;
  commentUnsafeCondition: string;
  discussOtherIssues: string;
  lat?: number;
  lng?: number;
  url?: string;
  [key: string]: any;
}


// Response from MongoDB function
interface AreaAssessmentData {
  area: string;
  site: string;
  totalRA: number;
  completedRA: number;
  pendingRA: number;
  totalBoot: number;
  completedBoot: number;
  pendingBoot: number;
  lastRADate?: string;
  lastBootDate?: string;
  ra_records: RiskAssessmentRecord[];
  boot_records: BootRecord[];
}


const DataTable: React.FC = () => {
  const [areaData, setAreaData] = useState<AreaAssessmentData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  // const [machineModalOpen, setMachineModalOpen] = useState(false); // New state for the machine modal
  const { bu } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use the MongoDB function endpoint for risk assessments
        const response = await axios.get(
          `${http}vehicleTr_all`
        );
        
        // Parse EJSON format from MongoDB
        let data = response.data as any[];
        
        // Convert EJSON number format to regular numbers
        data = data.map(item => ({
          ...item,
          totalRA: typeof item.totalRA === 'object' ? parseInt(item.totalRA.$numberInt || '0') : item.totalRA,
          completedRA: typeof item.completedRA === 'object' ? parseInt(item.completedRA.$numberInt || '0') : item.completedRA,
          pendingRA: typeof item.pendingRA === 'object' ? parseInt(item.pendingRA.$numberInt || '0') : item.pendingRA,
          totalBoot: typeof item.totalBoot === 'object' ? parseInt(item.totalBoot.$numberInt || '0') : item.totalBoot,
          completedBoot: typeof item.completedBoot === 'object' ? parseInt(item.completedBoot.$numberInt || '0') : item.completedBoot,
          pendingBoot: typeof item.pendingBoot === 'object' ? parseInt(item.pendingBoot.$numberInt || '0') : item.pendingBoot,
        }));
        
        setAreaData(data as AreaAssessmentData[]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [bu]);

  // Function to open modal and show detailed data
  const handleCardClick = (type: string, area: string, site: string) => {
    setSelectedType(type);
    setSelectedArea(`${site}-${area}`); // Combine site and area for unique identification
    setModalOpen(true);
  };

  // Get filtered data for the modal
  const getFilteredData = () => {
    if (!selectedType || !selectedArea) return [];
    
    const [site, area] = selectedArea.split('-');
    const areaRecord = areaData.find(a => a.site === site && a.area === area);
    if (!areaRecord) return [];
    
    if (selectedType === 'ra') {
      return areaRecord.ra_records || [];
    } else if (selectedType === 'boot') {
      return areaRecord.boot_records || [];
    }
    return [];
  };

  const filteredData = getFilteredData();


  // Function to close modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedType(null);
    setSelectedArea(null);
  };





  // State for search term
  const [searchTerm, setSearchTerm] = useState("");

  // Filter data by search term
  const filteredModalData = filteredData.filter((item: any) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      (item.id && item.id.toLowerCase().includes(searchLower)) ||
      (item.area && item.area.toLowerCase().includes(searchLower)) ||
      (item.intervieweeName && item.intervieweeName.toLowerCase().includes(searchLower))
    );
  });

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading /> {/* Show spinner during data loading */}
      </div>
    );
  }

  if (areaData.length === 0) {
    return <p className="text-rose-500">No data available</p>;
  }

  const getBackgroundColor = (percentage: number): string => {
    if (percentage >= 0 && percentage <= 33) return "rgb(237, 0, 0)"; // Red
    if (percentage > 33 && percentage <= 66) return "rgb(255, 200, 0)"; // Yellow
    if (percentage > 66 && percentage <= 100) return "rgb(0, 150, 0)"; // Green

    return ""; // Fallback (if needed)
  };

  const renderPivotedTable = () => {
    // Calculate totals
    const raTotal = areaData.reduce((sum, area) => sum + area.totalRA, 0);
    const bootTotal = areaData.reduce((sum, area) => sum + area.totalBoot, 0);
    const overallTotal = raTotal + bootTotal;

    return (
      <div className="mb-8 overflow-x-auto">
        <table className="min-w-full border-collapse border text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">Site</th>
              <th className="border px-4 py-2">Area</th>
              <th className="border px-4 py-2 text-center">Risk Assessment</th>
              <th className="border px-4 py-2 text-center">Boot on Ground</th>
              <th className="border px-4 py-2 text-center bg-rose-50">Total</th>
            </tr>
          </thead>
          <tbody>
            {areaData.map((area) => {
              const raCompletion = area.totalRA > 0 ? (area.completedRA / area.totalRA) * 100 : 0;
              const bootCompletion = area.totalBoot > 0 ? (area.completedBoot / area.totalBoot) * 100 : 0;
              const areaTotal = area.totalRA + area.totalBoot;

              return (
                <tr key={`${area.site}-${area.area}`} className="even:bg-gray-100">
                  <td className="border px-4 py-2 font-bold">
                    {area.site?.toUpperCase() || 'N/A'}
                  </td>
                  <td className="border px-4 py-2 font-bold">
                    {area.area?.toUpperCase() || 'N/A'}
                  </td>
                  
                  {/* Risk Assessment Column */}
                  <td
                    className={`border px-4 py-2 text-center font-bold cursor-pointer ${
                      area.completedRA === area.totalRA && area.totalRA > 0 && "opacity-30"
                    }`}
                    style={{
                      backgroundColor: area.totalRA > 0
                        ? getBackgroundColor(raCompletion)
                        : "transparent",
                      color: area.totalRA > 0 ? "white" : "#d3d3d3",
                    }}
                    onClick={() => handleCardClick('ra', area.area, area.site)}
                  >
                    {area.totalRA > 0 ? (
                      <>
                        {area.completedRA} / {area.totalRA} ({raCompletion.toFixed(0)}%)
                      </>
                    ) : (
                      "0"
                    )}
                    {area.pendingRA > 0 && (
                      <span
                        className="text-rose-500 font-bold text-xl p-1 rounded bg-rose-100 ml-2 animate-pulse"
                        style={{
                          border: "2px solid #FF0000",
                          boxShadow: "0 0 10px rgba(255, 0, 0, 0.6)",
                        }}
                      >
                        {area.pendingRA}
                      </span>
                    )}
                  </td>

                  {/* Boot on Ground Column */}
                  <td
                    className={`border px-4 py-2 text-center font-bold cursor-pointer ${
                      area.completedBoot === area.totalBoot && area.totalBoot > 0 && "opacity-30"
                    }`}
                    style={{
                      backgroundColor: area.totalBoot > 0
                        ? getBackgroundColor(bootCompletion)
                        : "transparent",
                      color: area.totalBoot > 0 ? "white" : "#d3d3d3",
                    }}
                    onClick={() => handleCardClick('boot', area.area, area.site)}
                  >
                    {area.totalBoot > 0 ? (
                      <>
                        {area.completedBoot} / {area.totalBoot} ({bootCompletion.toFixed(0)}%)
                      </>
                    ) : (
                      "0"
                    )}
                    {area.pendingBoot > 0 && (
                      <span
                        className="text-rose-500 font-bold text-xl p-1 rounded bg-rose-100 ml-2 animate-pulse"
                        style={{
                          border: "2px solid #FF0000",
                          boxShadow: "0 0 10px rgba(255, 0, 0, 0.6)",
                        }}
                      >
                        {area.pendingBoot}
                      </span>
                    )}
                  </td>

                  {/* Total Column */}
                  <td className="border px-4 py-2 text-center bg-rose-50 font-bold">
                    {areaTotal}
                  </td>
                </tr>
              );
            })}
            
            {/* Totals Row */}
            <tr className="bg-rose-50 font-bold">
              <td className="border px-4 py-2" colSpan={2}>Total</td>
              <td className="border px-4 py-2 text-center">{raTotal}</td>
              <td className="border px-4 py-2 text-center">{bootTotal}</td>
              <td className="border px-4 py-2 text-center">{overallTotal}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };


  return (
    <div className="p-8 overflow-x-auto w-full">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold flex items-center justify-center">
          <img
            src={`/assets/icons/${
              bu &&
              ["srb", "mkt", "office", "lbm", "rmx", "iagg", "ieco"].includes(
                bu
              )
                ? "th"
                : bu
            }.svg`}
            alt="Flag"
            className="mr-2 md:w-10 md:h-10 w-16 h-16"
          />
          {bu &&
            ["srb", "mkt", "office", "lbm", "rmx", "iagg", "ieco"].includes(
              bu
            ) &&
            bu?.toUpperCase()}{" "}
          Risk Assessment Summary - Combined daily, monthly, quarterly, annually
        </h1>
      </header>
      {/* Add legend here */}
      <h2 className="text-xl font-bold mb-4">
        <span className="text-gray-500">Completed / Total Assessments ( % )</span>
        <span
          className="ml-4 text-rose-500 font-bold text-xl p-1 rounded bg-rose-100"
          style={{
            border: "2px solid #FF0000", // Red border
            boxShadow: "0 0 10px rgba(255, 0, 0, 0.6)", // Glowing effect
          }}
        >
          Pending
        </span>
      </h2>
      <div className="flex items-center mb-4">
        <div className="flex items-center mr-4">
          <span
            className="w-4 h-4 inline-block mr-2 rounded"
            style={{ backgroundColor: "rgb(237, 0, 0)" }}
          ></span>
          <span>0–33%</span>
        </div>
        <div className="flex items-center mr-4">
          <span
            className="w-4 h-4 inline-block mr-2 rounded"
            style={{ backgroundColor: "rgb(255, 200, 0)" }}
          ></span>
          <span>34–66%</span>
        </div>
        <div className="flex items-center mr-4">
          <span
            className="w-4 h-4 inline-block mr-2 rounded"
            style={{ backgroundColor: "rgb(0, 150, 0)" }}
          ></span>
          <span>67–99%</span>
        </div>
        <div className="flex items-center">
          <span
            className="w-4 h-4 inline-block mr-2 rounded opacity-20"
            style={{ backgroundColor: "rgb(0, 150, 0)" }}
          ></span>
          <span>100%</span>
        </div>
      </div>
      {renderPivotedTable()}
      {/* Modal for showing vehicle details */}
      {/* Check if `selectedInspection` is null before accessing its properties */}
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        content={
          <>
            <h2 className="text-2xl font-semibold mb-4">
              Details for{" "}
              <span className="text-rose-500">
                {selectedType === 'ra' ? 'Risk Assessment' : selectedType === 'boot' ? 'Boot on Ground' : selectedType}
              </span>{" "}
              at {selectedArea ? selectedArea.replace('-', ' - ').toUpperCase() : 'N/A'}
            </h2>
            {/* Show summary for selected area and type */}
            {selectedType && selectedArea && (
              <div className="pt-2">
                {(() => {
                  const [site, area] = selectedArea.split('-');
                  const areaRecord = areaData.find(a => a.site === site && a.area === area);
                  if (!areaRecord) return null;
                  
                  const data = selectedType === 'ra' 
                    ? { total: areaRecord.totalRA, completed: areaRecord.completedRA, pending: areaRecord.pendingRA }
                    : { total: areaRecord.totalBoot, completed: areaRecord.completedBoot, pending: areaRecord.pendingBoot };
                  
                  return (
                    <>
                      <p className="text-lg">
                        <span className="text-green-500 text-xl">
                          Completed: {data.completed}
                        </span>{" "}
                        | Total: {data.total}
                      </p>
                      <p className="text-lg mb-4">
                        <span
                          className={`${
                            data.pending !== 0 && "text-rose-500 text-xl"
                          }`}
                        >
                          Pending: {data.pending}
                        </span>{" "}
                        | Total: {data.total}
                      </p>
                      <hr />
                    </>
                  );
                })()}
              </div>
            )}
            {/* Search Box to Filter Data */}
            <input
              type="text"
              placeholder="Search by ID, Area, or Name..."
              className="w-full p-2 border border-gray-300 rounded mb-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Modal display data for the selected area and type */}
            <div className="space-y-4">
              {filteredModalData.map((item: any) => (
                <div key={item._id} className="border p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">
                      {selectedType === 'ra' ? 'Risk Assessment' : 'Boot Assessment'} #{item.id}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p><strong>Area:</strong> {item.area}</p>
                  
                  {selectedType === 'ra' ? (
                    <>
                      <p><strong>Interviewee:</strong> {item.intervieweeName}</p>
                      <p><strong>Application:</strong> {item.fpeApplication}</p>
                      <p><strong>Potential Risks:</strong> {item.potentialRisks}</p>
                      <p><strong>Risk Control:</strong> {item.riskControl}</p>
                      <p><strong>Understanding Confirmed:</strong> 
                        <span className={`ml-2 px-2 py-1 rounded ${
                          item.raUnderstanding && item.raUnderstanding.trim() !== '' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {item.raUnderstanding && item.raUnderstanding.trim() !== '' ? 'Yes' : 'No'}
                        </span>
                      </p>
                    </>
                  ) : (
                    <>
                      {/* Boot-specific fields */}
                      <p><strong>Contact Person:</strong> {item.contactPerson}</p>
                      <p><strong>Safe Behavior Observed:</strong> {item.commentSafeBehavior}</p>
                      <p><strong>Unsafe Conditions:</strong> {item.commentUnsafeCondition}</p>
                      <p><strong>Other Issues Discussed:</strong> {item.discussOtherIssues}</p>
                      <p><strong>Agreement to Work Safely:</strong> 
                        <span className={`ml-2 px-2 py-1 rounded ${
                          item.agreementWorkSafely && item.agreementWorkSafely.trim() !== '' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {item.agreementWorkSafely && item.agreementWorkSafely.trim() !== '' ? 'Yes' : 'No'}
                        </span>
                      </p>
                      {item.lat && item.lng && (
                        <p><strong>Location:</strong> {item.lat}, {item.lng}</p>
                      )}
                    </>
                  )}
                  
                  {item.url && (
                    <div className="mt-2">
                      <a href={item.url} target="_blank" rel="noopener noreferrer" 
                         className="text-blue-500 hover:underline">
                        View Documentation
                      </a>
                    </div>
                  )}
                </div>
              ))}
              {filteredModalData.length === 0 && (
                <p className="text-gray-500 text-center py-8">No records found matching your search.</p>
              )}
            </div>
          </>
        }
      />
    </div>
  );
};

export default DataTable;
