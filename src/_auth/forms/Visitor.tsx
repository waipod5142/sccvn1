import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import VisitorCard from "./VisitorCard"; // Import the new component
import VisitorForm from "@/components/shared/VisitorForm";
import { Pencil } from "lucide-react"; // For the icon
import VisitorDetail from "@/components/shared/VisitorDetail";
import { useParams } from "react-router-dom";

// Define the type for the card structure
interface Card {
  id: number;
  title: string;
  description: string;
  url: string;
  type: "pdf" | "video"; // Define the specific types for type property
}

const SafetyInductionPage: React.FC = () => {
  const [formVisible, setFormVisible] = useState(false); // For PDF/Video modal
  const [visitorFormVisible, setVisitorFormVisible] = useState(false); // For VisitorForm modal
  const [selectedCard, setSelectedCard] = useState<Card | null>(null); // Use Card type
  const { site } = useParams();

  // Array of card data based on the site
  const cards: Card[] =
    site === "HONC"
      ? [
          {
            id: 1,
            title: "Hướng dẫn An toàn cho Khách tham quan HONC 2024_VN_V2",
            description: "Click to view PDF",
            url: "https://firebasestorage.googleapis.com/v0/b/scco-4302c.appspot.com/o/SCCVN_INDUCTION%2FHONC%20Safety%20Induction%20for%20Visitor%202024_VN_V2.pdf?alt=media&token=04d21e71-6545-46e9-9cba-ca1c633c8fb6",
            type: "pdf", // Explicitly set the type to 'pdf'
          },
          {
            id: 2,
            title: "HONC Safety Induction for Visitor 2024_EN_V2",
            description: "Click to view PDF",
            url: "https://firebasestorage.googleapis.com/v0/b/scco-4302c.appspot.com/o/SCCVN_INDUCTION%2FHONC%20Safety%20Induction%20for%20Visitor%202024_EN_V2.pdf?alt=media&token=a58d6148-f2ed-4952-9ad3-e0e6b0449b25",
            type: "pdf", // Explicitly set the type to 'pdf'
          },
          {
            id: 3,
            title: "HONC Safety Induction Video_31_5_2023",
            description: "Click to view Video",
            url: "https://firebasestorage.googleapis.com/v0/b/scco-4302c.appspot.com/o/SCCVN_INDUCTION%2FHONC%20Safety%20Induction%20video_31_5_2023.mp4?alt=media&token=f8208f15-37d7-4924-978f-dd588bf26182",
            type: "video", // Explicitly set the type to 'video'
          },
        ]
      : site === "THIV"
      ? [
          {
            id: 1,
            title: "Hướng dẫn An toàn cho Khách tham quan THIV 2024_VN_V2",
            description: "Click to view PDF",
            url: "https://firebasestorage.googleapis.com/v0/b/scco-4302c.appspot.com/o/SCCVN_INDUCTION%2FH%C6%B0%E1%BB%9Bng%20d%E1%BA%ABn%20An%20to%C3%A0n%20cho%20Kh%C3%A1ch%20tham%20quan%20Thi%20Vai%20%202024_VN_V2.pdf?alt=media&token=2a785c52-74fd-4009-b01d-38658336797c",
            type: "pdf", // Explicitly set the type to 'pdf'
          },
          {
            id: 2,
            title: "THIV Safety Induction for Visitor 2024_EN_V2",
            description: "Click to view PDF",
            url: "https://firebasestorage.googleapis.com/v0/b/scco-4302c.appspot.com/o/SCCVN_INDUCTION%2FTHIV%20Safety%20Induction%20for%20Visitor%202024_EN_V2.pdf?alt=media&token=78610c72-9c8c-4162-b450-a2cc8210df20",
            type: "pdf", // Explicitly set the type to 'pdf'
          },
          {
            id: 3,
            title: "THIV Safety Induction Video_31_5_2023",
            description: "Click to view Video",
            url: "https://firebasestorage.googleapis.com/v0/b/scco-4302c.appspot.com/o/SCCVN_INDUCTION%2FTHI%20VAI%20Safety%20Induction%20Video_31_05_2023.MP4?alt=media&token=8584ad96-ab7f-45bf-90c3-4721fc0469cd",
            type: "video", // Explicitly set the type to 'video'
          },
        ]
      : site === "CATL"
      ? [
          {
            id: 1,
            title: "CATL Safety Induction Video",
            description: "Click to view Video",
            url: "https://firebasestorage.googleapis.com/v0/b/scco-4302c.appspot.com/o/SCCVN_INDUCTION%2FCa%CC%81t%20La%CC%81i%2030%2005%20-%20Voice%20Over.mp4?alt=media&token=da24124a-3db1-489f-961a-135d0dab4b82",
            type: "video", // Explicitly set the type to 'video'
          },
          {
            id: 2,
            title: "CATL Safety Induction for Visitor 2024",
            description: "Click to view PDF",
            url: "https://firebasestorage.googleapis.com/v0/b/scco-4302c.appspot.com/o/SCCVN_INDUCTION%2FCATL%20Safety%20Induction%202024.pdf?alt=media&token=adab6eff-1ecb-471b-989a-79447d8c4d83",
            type: "pdf", // Explicitly set the type to 'pdf'
          },
        ]
      : site === "HO"
      ? [
          {
            id: 1,
            title: "Head Office Safety Induction Video",
            description: "Click to view Video",
            url: "https://firebasestorage.googleapis.com/v0/b/scco-4302c.appspot.com/o/SCCVN_INDUCTION%2FHO%2019_5_2023%20-%20voice%20over_mp4.mp4?alt=media&token=edce6721-5e14-4bdf-bcf5-8f9e8fda1cf0",
            type: "video", // Explicitly set the type to 'video'
          },
        ]
      : site === "HIEP"
      ? [
          {
            id: 1,
            title: "Hiep Phuoc Safety Induction Video",
            description: "Click to view Video",
            url: "https://firebasestorage.googleapis.com/v0/b/scco-4302c.appspot.com/o/SCCVN_INDUCTION%2FHi%E1%BB%87p%20Ph%C6%B0%E1%BB%9Bc%201205%20-%20Voice%20Over_mp4.mp4?alt=media&token=6d6a55e6-de9b-4b79-8627-28fb4b8035f2",
            type: "video", // Explicitly set the type to 'video'
          },
        ]
      : [];

  // Function to handle card click
  const handleCardClick = (card: Card) => {
    setSelectedCard(card); // Set the selected card
    setFormVisible(true); // Show modal for PDF/Video
  };

  // Function to close the modal when clicked outside
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setFormVisible(false);
      setSelectedCard(null); // Reset selected card on close
    }
  };

  // Function to close the VisitorForm modal when clicked outside
  const handleVisitorFormClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setVisitorFormVisible(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center pt-4">
      {/* QR Code */}
      <QRCodeSVG
        value={`https://www.saf37y.com/Induction/${site}`}
        size={75}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"L"}
        includeMargin={false}
        imageSettings={{
          src: "https://companieslogo.com/img/orig/SCCC.BK-b25d0caf.png",
          x: undefined,
          y: undefined,
          height: 10,
          width: 10,
          excavate: true,
        }}
      />

      <header className="text-center m-4">
        <h1 className="text-4xl font-bold">{`${site} Safety Induction for Visitor`}</h1>
        <p className="mt-2 text-xl">
          Learn more about our safety guidelines before visiting our cement
          plant
        </p>
      </header>

      {/* Grid Section with 6 columns on large screen, 2 on small */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Map through the cards array */}
        {cards.map((card) => (
          <VisitorCard
            key={card.id}
            title={card.title}
            description={card.description}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>

      {/* Button to show VisitorForm modal */}
      <button
        className="mt-10 text-lg md:text-2xl flex items-center bg-gradient-to-r from-rose-500 via-red-600 to-red-500 hover:bg-gradient-to-l text-white font-medium py-2 px-6 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
        onClick={() => setVisitorFormVisible(true)}
      >
        <Pencil className="mr-2" size={28} />
        Xác nhận tham dự / confirm the attendant and submit
      </button>

      <div className="max-w-sm md:max-w-full overflow-x-auto mt-10">
        <VisitorDetail site={site} />
      </div>

      {/* Modal for showing selected PDF/Video */}
      {formVisible && selectedCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleClickOutside}
        >
          <div className="bg-white rounded-lg shadow-lg w-11/12 lg:w-1/2 max-h-full mx-auto overflow-y-auto">
            <div className="p-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold">{selectedCard.title}</h2>
            </div>
            <div className="p-4 w-full h-96 overflow-y-auto">
              {selectedCard.type === "pdf" ? (
                <object
                  data={selectedCard.url}
                  type="application/pdf"
                  width="100%"
                  height="100%"
                >
                  <p>
                    Your browser does not support PDFs.{" "}
                    <a
                      href={selectedCard.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      Click here to view the PDF
                    </a>
                    .
                  </p>
                </object>
              ) : (
                <video controls autoPlay className="w-full h-96">
                  <source src={selectedCard.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modal for showing VisitorForm */}
      {visitorFormVisible && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleVisitorFormClose} // Close the modal when clicking outside
        >
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-h-full lg:w-1/2 mx-auto overflow-y-auto flex flex-col justify-center items-center p-4">
            <div className="p-4 flex justify-between items-center w-full">
              <h2 className="text-xl font-semibold">Visitor Form</h2>
            </div>
            <div className="p-4 w-full">
              <VisitorForm site={site} />{" "}
              {/* Render the VisitorForm component */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SafetyInductionPage;
