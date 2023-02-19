import './App.css';

// import NavBar from "../src/components/Global/NavBar"
import MainContainer from './components/Global/MainContainer';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import SignUp from "./components/Start/SignUp";
// import Login from "./components/Start/Login";

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
    //     <Route index element={<SignUp/>} />
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
    // </BrowserRouter>
  
  );
}

export default App;
