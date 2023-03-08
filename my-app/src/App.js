import Login from "./components/login";
import Signup from "./components/Signup";
import {

  Routes,
  Route

} from "react-router-dom";
import Home from "./components/Home";
import DataProvider from "./context/DataProvider";


function App() {
  return (


    <DataProvider>
              <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </DataProvider>









  );
}

export default App;
