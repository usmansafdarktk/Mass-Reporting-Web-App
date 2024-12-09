import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options: ApexOptions = {
  legend: {
    show: true,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#FF5733', '#33C4FF', '#FFC300'], // Colors for different statuses
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 350,
    type: 'scatter', // Change chart type to scatter plot
    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300, // Adjust for smaller screens
        },
      },
    },
  ],
  stroke: {
    width: 2, // Adjust the stroke width for the points
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  markers: {
    size: 6, // Marker size for individual complaints
    colors: ['#FF5733', '#33C4FF', '#FFC300'], // Colors for different statuses
    strokeColors: '#fff',
    strokeWidth: 3,
    strokeOpacity: 0.9,
    fillOpacity: 1,
  },
  tooltip: {
    shared: false,
    intersect: true,
    custom: ({ seriesIndex, dataPointIndex, w }) => {
      const severity = w.config.series[seriesIndex].data[dataPointIndex].x;
      const responseTime = w.config.series[seriesIndex].data[dataPointIndex].y;
      return `<div class="tooltip-box">
                <p><strong>Complaint Severity:</strong> ${severity}</p>
                <p><strong>Response Time:</strong> ${responseTime} hrs</p>
              </div>`;
    },
  },
  xaxis: {
    title: {
      text: 'Complaint Severity',
    },
    min: 0,
    max: 10, // Adjust severity range as needed
  },
  yaxis: {
    title: {
      text: 'Response Time (hrs)',
    },
    min: 0,
    max: 48, // Adjust response time range as needed
  },
};

interface ChartComplaintsState {
  series: {
    name: string;
    data: { x: number; y: number }[]; // Data points for scatter plot
  }[];
}

const ComplaintsTrendChart: React.FC = () => {
  const [state] = useState<ChartComplaintsState>({
    series: [
      {
        name: 'High Severity Complaints',
        data: [
          { x: 9, y: 24 }, { x: 8, y: 36 }, { x: 7, y: 30 }, // Example data
          { x: 10, y: 40 }, { x: 9, y: 35 }, { x: 8, y: 45 },
        ],
      },
      {
        name: 'Medium Severity Complaints',
        data: [
          { x: 5, y: 12 }, { x: 6, y: 18 }, { x: 7, y: 15 }, // Example data
          { x: 6, y: 14 }, { x: 5, y: 13 }, { x: 4, y: 17 },
        ],
      },
      {
        name: 'Low Severity Complaints',
        data: [
          { x: 2, y: 5 }, { x: 3, y: 6 }, { x: 4, y: 7 }, // Example data
          { x: 3, y: 6 }, { x: 2, y: 8 }, { x: 3, y: 5 },
        ],
      },
    ],
  });

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">High Severity Complaints</p>
              <p className="text-sm font-medium">Severity: 7-10, Response Time: 24-48 hrs</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-secondary">Medium Severity Complaints</p>
              <p className="text-sm font-medium">Severity: 4-6, Response Time: 12-24 hrs</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-warning">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-warning"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-warning">Low Severity Complaints</p>
              <p className="text-sm font-medium">Severity: 0-3, Response Time: 0-12 hrs</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div id="chartComplaints" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="scatter"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ComplaintsTrendChart;
