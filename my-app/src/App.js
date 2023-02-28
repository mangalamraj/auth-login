import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import Home from "./components/Home";


function App() {
  return (
  
    
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
    
  );
}

export default App;
