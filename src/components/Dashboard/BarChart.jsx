import "./Dashboard.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MonthlyProgressChart = () => {
  const labels = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        backgroundColor: "#3E5CA7",
        borderColor: "rgba(75,192,192,1)",

        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        grid: {
          display: false,
        },
        ticks:{
          beginAtZero: true,
          min: 0,
          fontSize: 11,          
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks:{
          fontSize: 12,          
        }
      }
    },
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div>
      <h2>Monthly Progress</h2>
      <div className="graph-container">
      <Bar data={data} options={options} /></div>
    </div>
  );
};

export default MonthlyProgressChart;
