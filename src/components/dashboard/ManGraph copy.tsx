import { Man, ManItem } from '@/lib/typeMan';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { ChartOptions } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels // Register the plugin
);

interface DateCount {
  [date: string]: {
    total: number;
    notPass: number;
    submission: number;
  };
}

interface DataSets {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    borderColor: string;
    hoverBorderColor: string;
    backgroundColor: string;
    hoverBackgroundColor: string;
    fill: boolean;
    tension: number;
    borderDash?: number[];
    yAxisID: string;
    pointBorderColor: string;
    pointBorderWidth: number;
    pointRadius: number;
  }>;
}

interface DetailProps {
  dataTr: Man[];
  item: string;
}

const MachineGraph = ({ dataTr, item }: DetailProps) => {
  const transactions: ManItem[] = dataTr
    .flatMap((item) => item.trans as ManItem[]) // Type assertion here
    .filter(
      (i) =>
        new Date(i.date).setDate(new Date(i.date).getDate()) >
        new Date().setDate(new Date().getDate() - 15)
    )
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const calculateData = (): DataSets => {
    const dateCounts: DateCount = {};

    transactions.forEach((item) => {
      const date =
        new Date(item.date).toLocaleDateString() ===
        new Date().toLocaleDateString()
          ? `**${new Date(item.date).toLocaleDateString('en-GB')}**`
          : new Date(item.date).toLocaleDateString('en-GB');
      dateCounts[date] = dateCounts[date] || {
        total: 0,
        notPass: 0,
        submission: 0,
      };

      dateCounts[date].submission += 1;
      Object.entries(item).forEach(([key, value]) => {
        if (value === 'NotPass') {
          dateCounts[date].notPass += 1;
        }
        if (value === 'Pass' || value === 'NotPass') {
          dateCounts[date].total += 1;
        }
        console.log(key);
      });
    });

    const labels = Object.keys(dateCounts);
    const submissionData = Object.values(dateCounts).map(
      ({ submission }) => submission
    );

    return {
      labels,
      datasets: [
        {
          label: 'no of submission',
          data: submissionData,
          borderColor: 'rgba(88, 245, 39, 0.5)',
          hoverBorderColor: 'rgba(88, 245, 39,1)',
          backgroundColor: 'rgba(88, 245, 39, 0.2)',
          hoverBackgroundColor: 'rgba(88, 245, 39,0.4)',
          fill: true,
          tension: 0.4,
          pointBorderColor: '#8884d8',
          pointBorderWidth: 5,
          pointRadius: 2,
          yAxisID: 'y',
        },
      ],
    };
  };

  const chartData = calculateData();
  const options: ChartOptions<'line'> = {
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
      <div className="flex flex-col gap-4 pt-4 items-center animate-pulse">
        <img
          src={`/assets/icons/${item.toLowerCase()}.svg`}
          alt="Image"
          width={
            item.toLowerCase() === 'mobile' || item.toLowerCase() === 'vehicle'
              ? 250
              : 100
          }
          height={
            item.toLowerCase() === 'mobile' || item.toLowerCase() === 'vehicle'
              ? 250
              : 100
          }
        />
      </div>
      <div className="w-full md:w-3/4 lg:w-2/3">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default MachineGraph;
