import Woman2RoundedIcon from "@mui/icons-material/Woman2Rounded";
import Women from "../WOMEN.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate as Navigate,
} from "react-router-dom";
const navBar = () => {
  return (
    <div
      className="NavBar"
      style={{
        backgroundColor: "#FDFFE7",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          width: "40%",
          gap: 15.61,
          padding: "0.45rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="NavText"
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "Poppins",
            fontWeight: "500",
            fontSize: 21.82,
          }}
        >
          <div style={{ padding: "0.75rem" }}>
            {/* <a href="url"></a> */}
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontFamily: "Rubik, sans-serif",
                fontWeight: 400,
              }}
              to="/"
            >
              HOME
            </Link>
          </div>
          &nbsp; &nbsp;
          {/* <div style={{ padding: "0.75rem" }}> |  </div> */}
          {/* &nbsp;            &nbsp; */}
          <div style={{ padding: "0.75rem",color : "black" }}>
            <a href="url">MAP</a>
          </div>
          &nbsp; &nbsp;
          <div style={{ padding: "0.75rem" }}>

            {/* <a href="url">BLOGS</a>s */}
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontFamily: "Rubik, sans-serif",
                fontWeight: 400,
              }}
              to="/blogs"
            >
              BLOGS
            </Link>
          </div>
          &nbsp; &nbsp;
          <div style={{ padding: "0.75rem" }}>
            <a href="url">DOCTOR</a>
          </div>
        </div>
        <div></div>
      </div>
      <div >
        <a href="">
          <Woman2RoundedIcon sx={{padding : "1rem"}}  fontSize="large" />
        </a>
        {/* <img src={Women} style={{width : "8%", height : "auto"}}alt='nai'></img> */}
      </div>
    </div>
  );
};
export default navBar;
