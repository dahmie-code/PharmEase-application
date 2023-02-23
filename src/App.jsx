import './App.css';
// import NavBar from "../src/components/Global/NavBar"
import {  Routes, Route } from 'react-router-dom';
import SignUp from "./components/Start/SignUp";
import Login from "./components/Start/Login";
import MainContainer from './components/Global/MainContainer';
// import Dashboard from "./components/Dashboard/Dashboard";


function App() {
  // const[isSignUp, setIsSignUp] = useState(false);

  // const toggleAuthMode = () => {
  //   setIsSignUp(!isSignUp);
  // };

  return (
    // <div className="App">
      
    //   <MainContainer />
      
    // </div>
       
      <Routes>
        {/* <Route  exact path="/signup" element={<SignUp />} />
        <Route exact path="/" element={<Login />} /> */}
        <Route exact path="/" element={<MainContainer />} />
        
      </Routes>
  
  
  );
}

export default App;
