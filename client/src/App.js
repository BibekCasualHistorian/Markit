import {BrowserRouter, Route , Routes} from 'react-router-dom';
import Home from "./Pages/Home";
import NoPage from './Pages/NoPage';
// import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import Register from './Pages/Register';
import DetailsForm from './Pages/DetailsForm';



function App() {
  return (
    <>
    <BrowserRouter>

      <Routes>

            <Route index element={<Home />} />
  
            <Route path="*" element={<NoPage />} />

            <Route path="/Login" element={<Login/>} />

            <Route path="/Register" element={<Register/>} />

            <Route path="/DetailsForm" element={<DetailsForm/>} />


        </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
