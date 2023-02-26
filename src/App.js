
import './App.css';
import {Bar} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const data={
    labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets:[
      {
      label: 'Data1',
      data:['10','20','30','40','50','60','70'],
      borderColor: 'Black',
      backgroundColor: 'Green',
      },
      {
        label: 'Data2',
        data:['9','19','29','39','49','59','69'],
        borderColor: 'Black',
        backgroundColor: 'Red',
        }
    ]
  }
  const options={
    
  }
  return (
    <div className="App">
     <h1>Bar Chart using Chart JS</h1>
    <div> <Bar data={data} options={options}></Bar></div>
    </div>
  );
}

export default App;
