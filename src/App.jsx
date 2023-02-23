import './App.css';
// import NavBar from "../src/components/Global/NavBar"
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import SignUp from "./components/Start/SignUp";
// import Login from "./components/Start/Login";
import MainContainer from './components/Global/MainContainer';
// import Dashboard from "./components/Dashboard/Dashboard";


function App() {
  // const[isSignUp, setIsSignUp] = useState(false);

  // const toggleAuthMode = () => {
  //   setIsSignUp(!isSignUp);
  // };

  return (
    <div className="App">
      
      <MainContainer />
      
    </div>
    //    <BrowserRouter>
    //   <Routes>
    //     <Route  path="/signup" element={<SignUp />} />
    //     <Route index path="login" element={<Login />} />
    //     <Route path="/maincontainer" element={<MainContainer />} />
        
    //   </Routes>
    // </BrowserRouter>
  
  );
}

export default App;
