import { ManItem, ManProps } from '@/lib/typeMan';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'react-chartjs-2';
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

interface DateCount {
  [date: string]: {
    total: number;
    notPass: number;
    submission: number;
  };
}

const ManGraph = ({ dataTr, item }: ManProps) => {
  const transactions: ManItem[] = dataTr
    .flatMap((item) => item.trans as ManItem[]) // Type assertion here
    .filter(
      (i) =>
        new Date(i.date).setDate(new Date(i.date).getDate()) >
        new Date().setDate(new Date().getDate() - 15)
    )
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const calculateData = (): ChartData<'bar' | 'line', number[], string> => {
    const dateCounts: DateCount = {};
    const today = new Date().toLocaleDateString('en-GB');

    transactions.forEach((item) => {
      const date = new Date(item.date).toLocaleDateString('en-GB');
      dateCounts[date] = dateCounts[date] || {
        total: 0,
        notPass: 0,
        submission: 0,
      };

      dateCounts[date].submission += 1;
      Object.entries(item).forEach(([, value]) => {
        if (value === 'NotPass') {
          dateCounts[date].notPass += 1;
        }
        if (value === 'Pass' || value === 'NotPass') {
          dateCounts[date].total += 1;
        }
        // console.log(key);
      });
    });

    const labels = Object.keys(dateCounts);
    const submissionData = Object.values(dateCounts).map(
      ({ submission }) => submission
    );
    // const defectData = Object.values(dateCounts).map(({ total, notPass }) =>
    //   total ? parseFloat(((notPass / total) * 100).toFixed(1)) : 0
    // );

    return {
      labels,
      datasets: [
        {
          label: 'Submission', //Green
          data: submissionData,
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
        // {
        //   label: '% Defect', //Red
        //   data: defectData,
        //   type: 'line',
        //   borderColor: (context) => {
        //     return labels[context.dataIndex] === today
        //       ? 'rgba(255, 99, 132, 0.8)'
        //       : 'rgba(255, 99, 132, 0.5)';
        //   },
        //   hoverBorderColor: (context) => {
        //     return labels[context.dataIndex] === today
        //       ? 'rgba(255, 99, 132, 1)'
        //       : 'rgba(255, 99, 132, 0.7)';
        //   },
        //   pointStyle: (context) => {
        //     return labels[context.dataIndex] === today ? 'circle' : 'rect';
        //   },
        //   pointRadius: (context) => {
        //     return labels[context.dataIndex] === today ? 10 : 5;
        //   },
        //   fill: true,
        //   tension: 0.4,
        //   borderDash: [10, 5],
        //   yAxisID: 'y1',
        // },
      ],
    };
  };

  const chartData = calculateData();

  const options: ChartOptions<'bar' | 'line'> = {
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

export default ManGraph;
