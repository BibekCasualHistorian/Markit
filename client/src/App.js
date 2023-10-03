import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import NoPage from "./Components/NoPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
// import DetailsForm from './Components/DetailsForm';
import Livetable from "./Components/Livetable";
import Market from "./Pages/Market";
import Gainerandloser from "./Components/Gainerandloser";
import { useContext } from "react";
import { AuthContext } from "./store/AuthContext";
import Profile from "./Pages/Profile";
import New from "./Pages/New";
import News from "./Pages/News";

function App() {
  let { user } = useContext(AuthContext);

  if (user) {
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />

          <Route path="*" element={<NoPage />} />

          <Route path="/Logout" element={user ? "" : <Navigate to={"/"} />} />

          <Route
            path="/Login"
            element={user ? <Navigate to="/Profile" /> : <Login />}
          />

          <Route
            path="/Register"
            element={!user ? <Register /> : <Navigate to={"/"} />}
          />

          <Route
            path="/Profile"
            element={user ? <Profile /> : <Navigate to={"/Login"} />}
          />

          {/* <Route path="/DetailsForm" element={<DetailsForm />} /> */}

          <Route path="/News" element={<News />} />

          <Route path="/Livetable" element={<Livetable />} />

          <Route path="/Market" element={<Market />} />

          <Route path="/Gainerandloser" element={<Gainerandloser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
