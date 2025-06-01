import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  ArcElement,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

// Register the required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  ArcElement
);

// Define type for our data entry
interface DataEntry {
  _id: string;
  site: string;
  type: string;
  department: string;
  [key: string]: any; // For other properties
}

// Define chart data types
interface ChartDataset {
  label?: string;
  data: number[];
  backgroundColor: string | string[];
  borderColor: string | string[];
  borderWidth: number;
}

interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

const SiteTypeVisualization = () => {
  const [dataEntries, setDataEntries] = useState<DataEntry[]>([]);
  const [siteData, setSiteData] = useState<ChartData | null>(null);
  const [siteTypeData, setSiteTypeData] = useState<ChartData | null>(null);
  const [departmentData, setDepartmentData] = useState<Record<string, ChartData>>({});
  const [selectedSite, setSelectedSite] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ap-southeast-1.aws.data.mongodb-api.com/app/assetscp-gruyu/endpoint/showData?db=sccvn&collection=vn_area');
        const data: DataEntry[] = await response.json();
        setDataEntries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  useEffect(() => {
    if (dataEntries.length > 0) {
      processData();
    }
  }, [dataEntries]);

  const processData = () => {
    // Count entries by site
    const siteCount: Record<string, number> = {};
    dataEntries.forEach(item => {
      const site = item.site;
      siteCount[site] = (siteCount[site] || 0) + 1;
    });
    
    // Prepare site data for Chart.js
    const sitesLabels = Object.keys(siteCount).map(site => site.toUpperCase());
    const siteValues = Object.values(siteCount);
    
    setSiteData({
      labels: sitesLabels,
      datasets: [
        {
          label: 'Number of Entries',
          data: siteValues,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    });

    // Count entries by site and type
    const siteTypeCount: Record<string, Record<string, number>> = {};
    dataEntries.forEach(item => {
      const site = item.site;
      const type = item.type;
      
      if (!siteTypeCount[site]) {
        siteTypeCount[site] = {
          bootform: 0,
          raform: 0
        };
      }
      
      siteTypeCount[site][type] = (siteTypeCount[site][type] || 0) + 1;
    });
    
    // Prepare site-type data for Chart.js
    const bootformValues = sitesLabels.map(site => siteTypeCount[site.toLowerCase()]?.bootform || 0);
    const raformValues = sitesLabels.map(site => siteTypeCount[site.toLowerCase()]?.raform || 0);
    
    setSiteTypeData({
      labels: sitesLabels,
      datasets: [
        {
          label: 'Boot Form',
          data: bootformValues,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
        {
          label: 'RA Form',
          data: raformValues,
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    });

    // Process data for department distribution
    const siteDepartmentCount: Record<string, Record<string, number>> = {};
    dataEntries.forEach(item => {
      const site = item.site;
      const department = item.department;
      
      if (!siteDepartmentCount[site]) {
        siteDepartmentCount[site] = {};
      }
      
      siteDepartmentCount[site][department] = (siteDepartmentCount[site][department] || 0) + 1;
    });
    
    // Process department data for each site for pie charts
    const processedDepartmentData: Record<string, ChartData> = {};
    const colorPalette = [
      'rgba(255, 99, 132, 0.6)',
      'rgba(54, 162, 235, 0.6)',
      'rgba(255, 206, 86, 0.6)',
      'rgba(75, 192, 192, 0.6)',
      'rgba(153, 102, 255, 0.6)',
      'rgba(255, 159, 64, 0.6)',
      'rgba(199, 199, 199, 0.6)',
      'rgba(83, 102, 255, 0.6)',
      'rgba(78, 252, 3, 0.6)',
      'rgba(252, 186, 3, 0.6)',
    ];
    
    Object.keys(siteDepartmentCount).forEach(site => {
      const deptData = siteDepartmentCount[site];
      const labels = Object.keys(deptData);
      const values = Object.values(deptData);
      
      // Generate colors for each department
      const backgroundColors = labels.map((_, i) => colorPalette[i % colorPalette.length]);
      
      processedDepartmentData[site] = {
        labels: labels,
        datasets: [
          {
            data: values,
            backgroundColor: backgroundColors,
            borderColor: backgroundColors.map(color => color.replace('0.6', '1')),
            borderWidth: 1,
          },
        ],
      };
    });
    
    setDepartmentData(processedDepartmentData);
    
    // Set the first site as selected by default
    if (Object.keys(siteDepartmentCount).length > 0 && !selectedSite) {
      setSelectedSite(Object.keys(siteDepartmentCount)[0]);
    }
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Entries by Site',
        font: {
          size: 16
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: ${context.parsed.y} entries`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Entries'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Site'
        }
      }
    }
  };

  const stackedBarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: 'Site'
        }
      },
      y: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Entries'
        }
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Type Distribution by Site',
        font: {
          size: 16
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: ${context.parsed.y} entries`;
          }
        }
      }
    }
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          boxWidth: 15,
          font: {
            size: 11
          }
        }
      },
      title: {
        display: true,
        text: 'Department Distribution',
        font: {
          size: 16
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const dataset = context.dataset;
            const total = dataset.data.reduce((acc: number, data: number) => acc + data, 0);
            const value = dataset.data[context.dataIndex];
            const percentage = ((value / total) * 100).toFixed(1);
            return `${context.label}: ${value} entries (${percentage}%)`;
          }
        }
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <span className="ml-3">Loading data...</span>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-6xl mx-auto bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-center">Site and Type Distribution Analysis</h1>
      
      <div className="mb-8 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">1. Entries by Site</h2>
        <div className="h-64">
          {siteData && <Bar data={siteData} options={barOptions} />}
        </div>
      </div>

      <div className="mb-8 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">2. Type Distribution by Site</h2>
        <div className="h-64">
          {siteTypeData && <Bar data={siteTypeData} options={stackedBarOptions} />}
        </div>
      </div>

      <div className="mb-8 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">3. Department Distribution by Site</h2>
        <div className="flex flex-wrap justify-center mb-4">
          {Object.keys(departmentData).map(site => (
            <button
              key={site}
              className={`px-4 py-2 m-1 rounded ${selectedSite === site ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setSelectedSite(site)}
            >
              {site.toUpperCase()}
            </button>
          ))}
        </div>
        
        <div className="h-96">
          {selectedSite && departmentData[selectedSite] && (
            <Pie data={departmentData[selectedSite]} options={pieOptions} />
          )}
        </div>
      </div>
      
      <div className="text-center mt-8 text-gray-600 bg-white p-4 rounded shadow">
        <p className="font-medium">Data Summary</p>
        <p>{dataEntries.length} total entries across {Object.keys(departmentData).length} sites</p>
        <p>Site distribution: {Object.keys(departmentData).map(site => `${site.toUpperCase()}`).join(', ')}</p>
        <p>Types: bootform and raform distributed across different departments</p>
      </div>
    </div>
  );
};

export default SiteTypeVisualization;