import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
  ChartOptions,
  ChartData,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { http } from '@/lib/http';
import Loading from '@/components/shared/Loader';

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

interface CountryData {
  bu: string;
  daily: number;
  monthly: number;
  quarterly: number;
  annually: number;
  total: number;
}

const MachineChart: React.FC = () => {
  const [data, setData] = useState<CountryData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${http}cableTr_one`, {});
        setData(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  if (!data) {
    return <div>No data available</div>;
  }

  // Extract labels and datasets
  const labels = data.map((item) =>
    item.bu.length === 2 ? 'SCC' + item.bu.toUpperCase() : item.bu.toUpperCase()
  );
  const dailyData = data.map((item) => item.daily);
  const monthlyData = data.map((item) => item.monthly);
  const quarterlyData = data.map((item) => item.quarterly);
  const annuallyData = data.map((item) => item.annually);
  const totalData = data.map((item) => item.total);

  // Chart data
  const chartData: ChartData<'bar' | 'line', number[], string> = {
    labels,
    datasets: [
      {
        label: 'Daily',
        data: dailyData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Light blue
        stack: 'Stack 0',
        type: 'bar',
      },
      {
        label: 'Monthly',
        data: monthlyData,
        backgroundColor: 'rgba(255, 159, 64, 0.6)', // Orange
        stack: 'Stack 0',
        type: 'bar',
      },
      {
        label: 'Quarterly',
        data: quarterlyData,
        backgroundColor: 'rgba(153, 102, 255, 0.6)', // Purple
        stack: 'Stack 0',
        type: 'bar',
      },
      {
        label: 'Annually',
        data: annuallyData,
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue
        stack: 'Stack 0',
        type: 'bar',
      },
      {
        label: 'Total',
        data: totalData,
        type: 'line', // Line graph for the total
        borderColor: 'rgba(255, 99, 132, 1)', // Red line
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        tension: 0.4, // Smooth curve
        yAxisID: 'y1', // Use secondary y-axis
      },
    ],
  };

  // Chart options
  const options: ChartOptions<'bar' | 'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Machine Counts by Country and Period',
        font: {
          size: 20,
        },
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
      legend: {
        position: 'top' as const,
      },
      datalabels: {
        display: true,
        color: '#000',
        anchor: 'center',
        align: 'top',
        formatter: (value: number) => (value ? value.toLocaleString() : '0'),
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        stacked: true,
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="w-full max-w-6xl h-[600px]">
        <Chart type="bar" data={chartData} options={options} />
      </div>
    </div>
  );
};

export default MachineChart;
