import { ManProps } from '@/lib/typeMan';
import { Item as ManItem } from '@/lib/typeAlert';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { ChartOptions, ChartData } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

interface AlertCount {
  [alertNo: string]: Set<string>; // Set to store unique item ids
}

const ManGraph = ({ dataTr, item }: ManProps) => {
  const transactions: ManItem[] = dataTr.flatMap(
    (item) => item.trans as ManItem[]
  );

  // Total items for percentage calculation
  const totalItems = transactions.length;

  const calculateData = (): ChartData<'bar', number[], string> => {
    const alertCounts: AlertCount = {};

    transactions.forEach((item) => {
      const alertNo = item.alertNo || 'Unknown';
      if (!alertCounts[alertNo]) {
        alertCounts[alertNo] = new Set();
      }
      alertCounts[alertNo].add(item.id);
    });

    const labels = Object.keys(alertCounts);
    const uniqueCounts = Object.values(alertCounts).map((ids) => ids.size);
    const percentageData = uniqueCounts.map(
      (count) => (count / totalItems) * 100
    );

    // Combine labels and percentageData into a single array for sorting
    const combinedData = labels.map((label, index) => ({
      label,
      percentage: percentageData[index],
    }));

    // Sort combined data by percentage in descending order
    combinedData.sort((a, b) => b.percentage - a.percentage);

    // Separate the sorted data back into labels and percentageData
    const sortedLabels = combinedData.map((data) => data.label);
    const sortedPercentageData = combinedData.map((data) => data.percentage);

    return {
      labels: sortedLabels,
      datasets: [
        {
          label: '% Submissions',
          data: sortedPercentageData,
          backgroundColor: 'rgba(255, 165, 0, 0.5)', // Orange
          hoverBackgroundColor: 'rgba(255, 165, 0, 1)', // Darker Orange
        },
      ],
    };
  };

  const chartData = calculateData();

  const options: ChartOptions<'bar'> = {
    plugins: {
      datalabels: {
        color: '#444',
        formatter: (value, context) => {
          const realValue =
            (chartData.datasets[0].data[context.dataIndex] / 100) * totalItems;
          return `${Math.round(value)}%\n(${realValue.toFixed(0)})`;
        },
        anchor: 'end',
        align: 'end',
        font: {
          size: 12, // Adjust the font size if needed
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value) {
            return value + '%';
          },
        },
      },
    },
    layout: {
      padding: {
        right: 10,
      },
    },
    responsive: true,
  };
  console.log(item);
  return (
    <div className="flex flex-col items-start md:items-center w-screen py-6 bg-white rounded-lg shadow-xl">
      <div className="w-full md:w-3/4 lg:w-2/3">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ManGraph;
