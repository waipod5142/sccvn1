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

interface DateCount {
  [date: string]: {
    open: number;
    close: number;
  };
}

const MachineGraph = ({ dataTr, item }: MachineProps) => {
  const transactions: MachineItem[] = dataTr
    .flatMap((item) => item.trans as MachineItem[])
    .filter((transItem) => Object.values(transItem).includes('NotPass'))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const calculateData = (): ChartData<'bar', number[], string> => {
    const dateCounts: DateCount = {};
    const today = new Date().toLocaleDateString('en-GB');

    transactions.forEach((item) => {
      const date = new Date(item.date).toLocaleDateString('en-GB');
      dateCounts[date] = dateCounts[date] || { open: 0, close: 0 };

      if ('responder' in item) {
        dateCounts[date].close += 1;
      } else {
        dateCounts[date].open += 1;
      }
    });

    const labels = Object.keys(dateCounts);
    const closeData = Object.values(dateCounts).map(({ close }) => close);
    const openData = Object.values(dateCounts).map(({ open }) => open);

    return {
      labels,
      datasets: [
        {
          label: 'Close issues',
          data: closeData,
          type: 'bar',
          backgroundColor: (context) => {
            return labels[context.dataIndex] === today
              ? 'rgba(88, 245, 39, 0.5)'
              : 'rgba(88, 245, 39, 0.2)';
          },
          hoverBackgroundColor: (context) => {
            return labels[context.dataIndex] === today
              ? 'rgba(88, 245, 39, 0.7)'
              : 'rgba(88, 245, 39, 0.5)';
          },
          yAxisID: 'y',
        },
        {
          label: 'Open issues',
          data: openData,
          type: 'bar', // Changed from 'line' to 'bar'
          backgroundColor: (context) => {
            return labels[context.dataIndex] === today
              ? 'rgba(255, 99, 132, 0.5)'
              : 'rgba(255, 99, 132, 0.2)';
          },
          hoverBackgroundColor: (context) => {
            return labels[context.dataIndex] === today
              ? 'rgba(255, 99, 132, 0.7)'
              : 'rgba(255, 99, 132, 0.5)';
          },
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
  console.log(item);
  return (
    <div className="flex flex-col items-start md:items-center w-screen py-6 bg-white rounded-lg">
      <div className="w-full md:w-3/4 lg:w-2/3">
        <Chart type="bar" data={chartData} options={options} />
      </div>
    </div>
  );
};

export default MachineGraph;
