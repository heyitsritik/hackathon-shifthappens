import { useState } from "react";
import NavBar from "./component/Navbar";
import "./App.css";
import Footer from "./component/Footer";
import Accordian from "./component/Accordian";
import Tab from "./component/Tab";
import Vaccine from "./component/Vaccine";
import Carasoul from "./component/Carasoul";
import Divider from "@mui/material/Divider";
import photo from "./WOMEN.png";
import Blogs from "./component/BlogsShow(Homepage)";
import BlogPage from './Pages/Blogs'
import BlogSpecific from './Pages/BlogSpecific'
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate as Navigate,
} from "react-router-dom";

const Whole = () => {
  return (
    <div>
      <NavBar />
      <Carasoul />
      <br />
      <h1 style={{ textAlign: "center", fontSize: "2.5rem" }}>
        Your next appointment is on ...
      </h1>
      <br />
      <div>{/* <Accordian /> */}</div>
      <Tab />
      <Divider>
        <LocalFloristOutlinedIcon />
      </Divider>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem" }}>
        Vaccination Checklist
      </h1>
      <br />
      <Vaccine />
      <br />
      <Divider>
        <LocalFloristOutlinedIcon />
      </Divider>
      <Blogs />
      <br />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      {/* <YourComponent/> */}
      <Routes>
        <Route exact path="/" Component={Whole} />
        <Route exact path="/blogs" element={<BlogPage />} />
        <Route exact path="/blogSpecific" element={<BlogSpecific />} />
        {/* <Route exact path="/productDesc" element={<ProdDesc />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
