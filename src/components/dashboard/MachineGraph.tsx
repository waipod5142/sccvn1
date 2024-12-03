import { MachineItem, Machine } from '@/lib/typeMachine';
import { ChartOptions, ChartData } from 'chart.js';
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
  BarController, // Add BarController here
  LineController, // Register LineController
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'react-chartjs-2';

// Register necessary controllers and elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement, // Register LineElement for line chart
  BarElement,
  Title,
  Tooltip,
  Legend,
  BarController, // Register BarController
  LineController, // Register LineController
  ChartDataLabels
);

interface DateCount {
  [date: string]: {
    total: number;
    notPass: number;
    submission: number;
  };
}

interface MachineProps {
  dataTr: Machine[];
}

const MachineGraph = ({ dataTr }: MachineProps) => {
  // Flatten transactions from all vehicles and calculate based on date
  const transactions: MachineItem[] = dataTr
    .flatMap((item) => item.trans as MachineItem[])
    .filter(
      (i) =>
        new Date(i.date).setDate(new Date(i.date).getDate()) >
        new Date().setDate(new Date().getDate() - 15) // only the past 15 days
    )
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Function to calculate chart data
  const calculateData = (): ChartData<'bar' | 'line', number[], string> => {
    const dateCounts: DateCount = {};
    const today = new Date().toLocaleDateString('en-GB');

    // Process each transaction to gather counts
    transactions.forEach((item) => {
      const date = new Date(item.date).toLocaleDateString('en-GB');
      dateCounts[date] = dateCounts[date] || {
        total: 0,
        notPass: 0,
        submission: 0,
      };

      // Count submission
      dateCounts[date].submission += 1;

      // Count 'Pass' and 'NotPass' for defect calculation
      Object.entries(item).forEach(([, value]) => {
        if (value === 'NotPass') {
          dateCounts[date].notPass += 1;
        }
        if (value === 'Pass' || value === 'NotPass') {
          dateCounts[date].total += 1;
        }
      });
    });

    // Create labels and datasets for the chart
    const labels = Object.keys(dateCounts);
    const submissionData = Object.values(dateCounts).map(
      ({ submission }) => submission
    );
    const defectData = Object.values(dateCounts).map(({ total, notPass }) =>
      total ? parseFloat(((notPass / total) * 100).toFixed(1)) : 0
    );

    return {
      labels,
      datasets: [
        {
          label: 'Submission', // Green
          data: submissionData,
          type: 'bar', // Bar chart for submission
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
          label: '% Defect', // Red
          data: defectData,
          type: 'line', // Line chart for defect percentage
          borderColor: (context) => {
            return labels[context.dataIndex] === today
              ? 'rgba(255, 99, 132, 1)' // Red line for defects
              : 'rgba(255, 99, 132, 0.7)';
          },
          fill: false, // Don't fill the area under the line
          pointBackgroundColor: 'rgba(255, 99, 132, 1)', // Red points for defect percentage
          tension: 0.4, // Smooth the line curve
          yAxisID: 'y1',
        },
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
          display: true, // Show ticks on the y-axis
        },
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          display: false,
        },
        ticks: {
          display: true, // Show ticks on the y1 axis
        },
      },
    },
    layout: {
      padding: {
        right: 10,
      },
    },
    responsive: true,
    maintainAspectRatio: false, // This is important to make it responsive within the modal
  };

  return (
    <div className="w-full h-full">
      <Chart type="bar" data={chartData} options={options} />
    </div>
  );
};

export default MachineGraph;
