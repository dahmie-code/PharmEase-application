import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "./Dashboard.css";


ChartJS.register(ArcElement, Tooltip, Legend);

const DailyReport = () => {
    const data = {
        labels: ['Total Sales', 'Total Purchases', 'Total Returns', 'Cash Received'],
        datasets: [
          {
            label: '# of Votes',
            data: [400, 300, 200,180],
            backgroundColor: [
              '#174CBB',
              '#65BC50',
              '#EB002A',
              '#F5F861',
              
            ],
            borderColor: [
              '#174CBB',
              '#65BC50',
              '#EB002A',
              '#F5F861',
              
            ],
            borderWidth: 1,
          },
        ],
      };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
            align: "center",
            labels: {
                usePointStyle: true,
                padding: 8,                               
                boxWidth: 5,
                fontSize: 12,
                textBaseline: "middle",
                fontColor: "#000",
                boxHeight: 5            
            }
          },
        },
    };

  return (
    <div>
        <h2 style={{marginBlockEnd:"40px", color:"#173C96", fontSize:"24px", fontWeight:"600"}}>Today's Report</h2>
        <div ><Pie data={data} options={options}/></div>
        
    </div>
  )
}

export default DailyReport;
