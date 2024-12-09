import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options: ApexOptions = {
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'donut',
    height: 350,
  },
  colors: ['#FF5733', '#FFC300', '#28A745'],
  labels: ['Open', 'In Progress', 'Resolved'],
  legend: {
    position: 'top',
    horizontalAlign: 'center',
    fontFamily: 'Satoshi',
    fontWeight: 500,
    fontSize: '14px',
    markers: {
      radius: 99,
    },
  },
  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        labels: {
          show: true,
          total: {
            show: true,
            label: 'Total',
            fontSize: '16px',
            fontWeight: 500,
            color: '#FFFFFF', // Set the text color to white here
          },
        },
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter(val) {
      // Ensure val is treated as a number before calling toFixed
      return `${(typeof val === 'number' ? val : Number(val)).toFixed(1)}%`;
    },
    style: {
      colors: ['#FFFFFF'], // Make the data labels' text color white
    },
  },
};

interface ComplaintStatusChartState {
  series: number[]; // Represents percentages for each status
}

const ChartFour: React.FC = () => {
  const [state] = useState<ComplaintStatusChartState>({
    series: [25, 35, 40], // Example: 25% Open, 35% In Progress, 40% Resolved
  });

  return (
    <div className="col-span-12 sm:col-span-6 xl:col-span-4 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mb-4">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Complaint Status Distribution
        </h4>
      </div>

      <div>
        <div id="chartComplaintStatus" className="flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartFour;
