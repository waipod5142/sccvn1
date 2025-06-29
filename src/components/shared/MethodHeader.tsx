import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Machine } from "@/lib/typeMachine";
import { loadHeader } from "@/uti/loadHeader";
import { QRCodeSVG } from "qrcode.react";

interface HeaderComponentProps {
  bu: string | undefined;
  data: Machine;
  man: string | undefined;
}

type HeaderType = {
  field: string;
  label: string;
};

const Header = ({ bu, data, man }: HeaderComponentProps) => {
  const [headerFields, setHeaderFields] = useState<HeaderType[]>([]);

  useEffect(() => {
    const fetchHeaderFields = async () => {
      try {
        let adjustedBu = bu; // Default to the original `bu`

        // Check if `bu` is one of 'srb', 'lbm', or 'rmx' and set it to 'th'
        if (
          bu === "srb" ||
          bu === "lbm" ||
          bu === "rmx" ||
          bu === "iagg" ||
          bu === "ieco"
        ) {
          adjustedBu = "th";
        }

        if (adjustedBu) {
          const fields = await loadHeader(adjustedBu); // Fetch header fields dynamically
          setHeaderFields(
            fields.filter(
              (field, index, self) =>
                self.findIndex((f) => f.field === field.field) === index
            ) // Remove duplicate fields by their `field` key
          );
        }
      } catch (error) {
        console.error("Error loading header fields:", error);
      }
    };

    fetchHeaderFields();
  }, [bu]);

  if (!data) {
    return <div />;
  }

  const renderFieldValue = (field: string) => {
    const value = data[field as keyof Machine];
    if (
      (field === "latestInspection" || field === "manufacturingDate") &&
      typeof value === "string"
    ) {
      const date = new Date(value);
      return date.toLocaleDateString("en-GB");
    }
    if (Array.isArray(value)) {
      return value.join(", ");
    }
    return value as string;
  };

  return (
    <div className="px-4 sm:px-10 grid grid-cols-4">
      <div className="col-span-3 my-4">
        <ul>
          {headerFields
            .filter(({ field }) => field !== "trans")
            .map(({ field, label }) =>
              data[field as keyof Machine] ? (
                <li key={field} className="text-slate-400">
                  {label}:{" "}
                  <strong
                    className={`${
                      field === "id"
                        ? "bg-slate-600 text-white text-2xl rounded-md p-1 mt-20"
                        : "text-slate-900"
                    }`}
                  >
                    {renderFieldValue(field)}
                  </strong>
                </li>
              ) : null
            )}
        </ul>
        {man === "RaForm" && (
          <Link
            to={`/ManForm/${bu}/PtoForm/${data.id}`}
            className="inline-block mt-4 px-6 py-2 shadow-xl bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            View Planed Task Observation Form
          </Link>
        )}
        {man === "PtoForm" && (
          <Link
            to={`/ManForm/${bu}/RaForm/${data.id}`}
            className="inline-block mt-4 px-6 py-2 shadow-xl bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-colors"
          >
            View Area Risk Assessment Form
          </Link>
        )}
      </div>
      <div className="col-span-1 my-4 flex flex-col items-center justify-center">
        <img
          src={`/assets/icons/${man?.replace("Form", "").toLowerCase()}.svg`}
          className="animate-pulse"
          alt={man}
          width={100}
          height={100}
        />
        <br />
        <QRCodeSVG
          value={`https://www.saf37y.com/Method/${bu}/${
            man
              ? man.charAt(0).toUpperCase() +
                man.slice(1)
              : ""
          }/${data.id}`}
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
      </div>
    </div>
  );
};

export default Header;
