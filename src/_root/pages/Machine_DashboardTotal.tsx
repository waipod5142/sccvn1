import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { http } from '@/lib/http';
import Loading from '@/components/shared/Loader'; // Assuming this is a spinner component
import { machineTitles } from '@/lib/typeMachine';

// Define interfaces for site and row data
interface SiteData {
  site: string;
  count: number;
}

interface RowData {
  _id: string;
  sites: SiteData[];
  totalByType: number;
}

interface Data {
  daily: RowData[];
  monthly: RowData[];
  quarterly: RowData[];
  annually: RowData[];
}

const DataTable: React.FC = () => {
  const { bu } = useParams();
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [siteNames, setSiteNames] = useState<string[]>([]); // Dynamically generated site names

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${http}alertTr_one`, {
          params: {
            bu,
          },
        });
        setData(res.data);
        const sites = extractUniqueSites(res.data); // Extract unique site names dynamically
        setSiteNames(sites);
      } catch (error) {
        console.error('Error fetching vehicle inspection data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [bu]);

  // Helper function to extract unique site names from all data arrays
  const extractUniqueSites = (data: Data): string[] => {
    const siteSet = new Set<string>();

    // Iterate through daily, monthly, and quarterly data to gather unique site names
    ['daily', 'monthly', 'quarterly', 'annually'].forEach((period) => {
      data[period as keyof Data].forEach((row) => {
        row.sites.forEach((siteData: SiteData) => {
          // Use SiteData as a type here
          siteSet.add(siteData.site.toUpperCase());
        });
      });
    });

    return Array.from(siteSet); // Convert Set back to Array
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading /> {/* Show spinner during data loading */}
      </div>
    );
  }

  // If no data available
  if (!data) {
    return <p>No data available.</p>;
  }

  const renderTable = (tableName: string, tableData: RowData[]) => {
    const siteTotals: { [site: string]: number } = {}; // To accumulate site totals
    let grandTotal = 0; // To accumulate overall total

    // Compute site-wise totals and grand total
    tableData.forEach((row) => {
      row.sites.forEach((site) => {
        siteTotals[site.site] = (siteTotals[site.site] || 0) + site.count;
        grandTotal += site.count;
      });
    });

    return (
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2 text-gray-800">
          {tableName.toUpperCase()}
        </h2>
        <table className="min-w-full table-auto border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Type
              </th>
              {siteNames.map((site) => (
                <th
                  key={site}
                  className="border border-gray-300 px-4 py-2 text-left"
                >
                  {site}
                </th>
              ))}
              <th className="border border-gray-300 px-4 py-2 text-left bg-rose-50">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => {
              const rowTotal = row.totalByType; // Already calculated per row
              return (
                <tr key={rowIndex} className="even:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2 font-bold">
                    {machineTitles[row._id] || row._id}
                  </td>
                  {siteNames.map((site) => {
                    const siteData = row.sites.find(
                      (s) => s.site.toUpperCase() === site
                    );
                    return (
                      <td
                        key={site}
                        className="border border-gray-300 px-4 py-2 text-center"
                      >
                        {siteData ? siteData.count : 0}
                      </td>
                    );
                  })}
                  <td className="border border-gray-300 px-4 py-2 text-center bg-rose-50 font-bold">
                    {rowTotal}
                  </td>
                </tr>
              );
            })}
            {/* Total row */}
            <tr className="bg-rose-50 font-bold">
              <td className="border border-gray-300 px-4 py-2">Total</td>
              {siteNames.map((site) => (
                <td
                  key={site}
                  className="border border-gray-300 px-4 py-2 text-center"
                >
                  {siteTotals[site.toLowerCase()] || 0}
                </td>
              ))}
              <td className="border border-gray-300 px-4 py-2 text-center">
                {grandTotal}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const renderSummary = () => {
    const summary: {
      [key: string]: {
        daily: number;
        monthly: number;
        quarterly: number;
        annually: number;
        total: number;
      };
    } = {};

    let grandTotal = 0;
    let grandDailyTotal = 0;
    let grandMonthlyTotal = 0;
    let grandQuarterlyTotal = 0;
    let grandAnnuallyTotal = 0;

    // Calculate total sums by site for daily, monthly, quarterly and accumulate the grand totals
    ['daily', 'monthly', 'quarterly', 'annually'].forEach((period) => {
      const table = data[period as keyof Data];
      table.forEach((row: RowData) => {
        row.sites.forEach((siteData: SiteData) => {
          if (!summary[siteData.site]) {
            summary[siteData.site] = {
              daily: 0,
              monthly: 0,
              quarterly: 0,
              annually: 0,
              total: 0,
            };
          }

          summary[siteData.site][
            period as 'daily' | 'monthly' | 'quarterly' | 'annually'
          ] += siteData.count;
          summary[siteData.site].total += siteData.count;

          if (period === 'daily') grandDailyTotal += siteData.count;
          if (period === 'monthly') grandMonthlyTotal += siteData.count;
          if (period === 'quarterly') grandQuarterlyTotal += siteData.count;
          if (period === 'annually') grandAnnuallyTotal += siteData.count;

          grandTotal += siteData.count;
        });
      });
    });

    // Convert the summary object into an array of site names
    const sites = Object.keys(summary);

    return (
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2 text-gray-800">Summary</h2>
        <table className="min-w-full table-auto border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Period
              </th>
              {sites.map((site) => (
                <th
                  key={site}
                  className="border border-gray-300 px-4 py-2 text-left"
                >
                  {site.toUpperCase()}
                </th>
              ))}
              <th className="border border-gray-300 px-4 py-2 text-left bg-rose-200">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Render Daily */}
            <tr className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">
                <Link
                  to={`/Dashboard/${bu}/daily`}
                  className="flex items-center text-blue-500 font-bold"
                >
                  Daily
                </Link>
              </td>
              {sites.map((site) => (
                <td
                  key={site}
                  className="border border-gray-300 px-4 py-2 text-center"
                >
                  {summary[site].daily}
                </td>
              ))}
              <td className="border border-gray-300 px-4 py-2 text-center bg-rose-200 font-bold">
                {grandDailyTotal}
              </td>
            </tr>

            {/* Render Monthly */}
            <tr className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">
                <Link
                  to={`/Dashboard/${bu}/monthly`}
                  className="flex items-center text-blue-500 font-bold"
                >
                  Monthly
                </Link>
              </td>
              {sites.map((site) => (
                <td
                  key={site}
                  className="border border-gray-300 px-4 py-2 text-center"
                >
                  {summary[site].monthly}
                </td>
              ))}
              <td className="border border-gray-300 px-4 py-2 text-center bg-rose-200 font-bold">
                {grandMonthlyTotal}
              </td>
            </tr>

            {/* Render Quarterly */}
            <tr className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">
                <Link
                  to={`/Dashboard/${bu}/quarterly`}
                  className="flex items-center text-blue-500 font-bold"
                >
                  Quarterly
                </Link>
              </td>
              {sites.map((site) => (
                <td
                  key={site}
                  className="border border-gray-300 px-4 py-2 text-center"
                >
                  {summary[site].quarterly}
                </td>
              ))}
              <td className="border border-gray-300 px-4 py-2 text-center bg-rose-200 font-bold">
                {grandQuarterlyTotal}
              </td>
            </tr>

            {/* Render Annually */}
            <tr className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">
                <Link
                  to={`/Dashboard/${bu}/annually`}
                  className="flex items-center text-blue-500 font-bold"
                >
                  Annually
                </Link>
              </td>
              {sites.map((site) => (
                <td
                  key={site}
                  className="border border-gray-300 px-4 py-2 text-center"
                >
                  {summary[site].annually}
                </td>
              ))}
              <td className="border border-gray-300 px-4 py-2 text-center bg-rose-200 font-bold">
                {grandAnnuallyTotal}
              </td>
            </tr>

            {/* Render Total */}
            <tr className="bg-rose-200 font-bold">
              <td className="border border-gray-300 px-4 py-2">Total</td>
              {sites.map((site) => (
                <td
                  key={site}
                  className="border border-gray-300 px-4 py-2 text-center"
                >
                  {summary[site].total}
                </td>
              ))}
              <td className="border border-gray-300 px-4 py-2 text-center">
                {grandTotal}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">
        Combined Data Table (daily, monthly, quarterly, annually)
      </h1>
      {renderTable('daily', data.daily)}
      {renderTable('monthly', data.monthly)}
      {renderTable('quarterly', data.quarterly)}
      {renderTable('annually', data.annually)}
      {renderSummary()}
    </div>
  );
};

export default DataTable;
