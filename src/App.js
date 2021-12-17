import logo from './logo.svg';
import './App.css';
import Navmenu from './components/navbar/Navmenu';
import Card from '@mui/material/Card';



function App() {
  return (
        <div className="App">
          <div className='nav-container'>
          <Navmenu/>
          </div>
          <Card style ={{width: "75%", height:"100vh", background:"green"}}>
            hello
          </Card>   
        </div>
  );
}

export default App;
