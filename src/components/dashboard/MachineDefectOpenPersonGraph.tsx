import { MachineItem, MachineProps } from '@/lib/typeMachine';
import { ChartOptions, ChartData } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const MachineGraph = ({ dataTr, item }: MachineProps) => {
  const transactions: MachineItem[] = dataTr
    .flatMap((item) => {
      const email = item.email
        ? item.email.replace(/@siamcitycement\.com$/, '')
        : ''; // Handle case where email is undefined
      return item.trans.map((transItem) => ({
        ...transItem,
        email, // Assign the processed email to each transaction item
      })) as MachineItem[];
    })
    .filter((transItem) => Object.values(transItem).includes('NotPass'))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const calculateData = (): ChartData<'bar', number[], string> => {
    const emailCounts: { [email: string]: { open: number; close: number } } =
      {};

    transactions.forEach((item) => {
      const email = item.email;
      if (!email) return; // Skip if email is empty or undefined
      emailCounts[email] = emailCounts[email] || { open: 0, close: 0 };

      if ('responder' in item) {
        emailCounts[email].close += 1;
      } else {
        emailCounts[email].open += 1;
      }
    });

    const labels = Object.keys(emailCounts);
    const closeData = Object.values(emailCounts).map(({ close }) => close);
    const openData = Object.values(emailCounts).map(({ open }) => open);
    console.log(item);
    return {
      labels,
      datasets: [
        {
          label: 'Close issues',
          data: closeData,
          type: 'bar',
          backgroundColor: 'rgba(88, 245, 39, 0.5)',
          hoverBackgroundColor: 'rgba(88, 245, 39, 0.7)',
          yAxisID: 'y',
        },
        {
          label: 'Open issues',
          data: openData,
          type: 'bar', // Changed from 'line' to 'bar'
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          hoverBackgroundColor: 'rgba(255, 99, 132, 0.7)',
          yAxisID: 'y',
        },
      ],
    };
  };

  const chartData = calculateData();

  const options: ChartOptions<'bar'> = {
    plugins: {
      datalabels: {
        align: 'end',
        anchor: 'end',
        color: '#444',
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
          display: false,
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

  return (
    <div className="flex flex-col items-start md:items-center w-screen py-6 bg-white rounded-lg">
      <div className="w-full md:w-3/4 lg:w-2/3">
        <Chart type="bar" data={chartData} options={options} />
      </div>
    </div>
  );
};

export default MachineGraph;
