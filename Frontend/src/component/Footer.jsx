// import "../App.css"
const Footer = () => {
  return (
    <div
      className="Footer"
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#153F32",
        color: "white",
        padding: "1rem",
        paddingBottom: "10rem",
        // gap: "0rem",
        color: " #F6F6F6",
      }}
    >
      <div className="Section1">
        <h1
          style={{
            fontSize: 25,
            fontFamily: "Poppins",
            fontWeight: "700",
            marginBottom: "1.75rem",
            marginTop : "0.5rem"
          }}
        >
          About us
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            gap: "10rem",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 21.82,
                fontFamily: "Poppins",
                fontWeight: "400",
              }}
            >
              <a style={{ color: "white" }} href="url">
                {" "}
                Privacy Policy
              </a>
            </div>
            <div
              style={{
                fontSize: 21.82,
                fontFamily: "Poppins",
                fontWeight: "400",
              }}
            >
              <a style={{ color: "white" }} href="url">
                {" "}
                Terms of use{" "}
              </a>
            </div>
            <div style={{}}>
              <a
                style={{
                  color: "white",
                  fontSize: 21.82,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                }}
                href="url"
              >
                {" "}
                Cookie Policy
              </a>
            </div>
            <div
              style={{
                fontSize: 21.82,
                fontFamily: "Poppins",
                fontWeight: "400",
              }}
            >
              <a style={{ color: "white" }} href="url">
                {" "}
                Blog{" "}
              </a>
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: 21.82,
                fontFamily: "Poppins",
                fontWeight: "400",
              }}
            >
              <a style={{ color: "white" }} href="url">
                {" "}
                Help Centre
              </a>
            </div>

            <div
              style={{
                fontSize: 21.82,
                fontFamily: "Poppins",
                fontWeight: "400",
              }}
            >
              <a style={{ color: "white" }} href="url">
                {" "}
                Contact Us
              </a>
            </div>
            <div
              style={{
                fontSize: 21.82,
                fontFamily: "Poppins",
                fontWeight: "400",
              }}
            >
              <a style={{ color: "white" }} href="url">
                {" "}
                Donate{" "}
              </a>
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: 21.82,
                fontFamily: "Poppins",
                fontWeight: "400",
              }}
            >
              <a style={{ color: "white" }} href="url">
                {" "}
                Find Support
              </a>
            </div>
            <div
              style={{
                fontSize: 21.82,
                fontFamily: "Poppins",
                fontWeight: "400",
              }}
            >
              <a style={{ color: "white" }} href="url">
                {" "}
                News{" "}
              </a>
            </div>
            <div
              style={{
                fontSize: 21.82,
                fontFamily: "Poppins",
                fontWeight: "400",
              }}
            >
              <a style={{ color: "white" }} href="url">
                {" "}
                Events{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="Section2">
          <h1
            style={{
              fontSize: 21.82,
              fontFamily: "Poppins",
              fontWeight: "700",
            }}
          >
            
          </h1>
          <div
            style={{
              fontSize: 21.82,
              fontFamily: "Poppins",
              fontWeight: "400",
            }}
          >
            <a style={{ color: "white" }} href="url">
              {" "}
                Find Support
            </a>
          </div>
          <div
            style={{
              fontSize: 21.82,
              fontFamily: "Poppins",
              fontWeight: "400",
            }}
          >
            <a style={{ color: "white" }} href="url">
              {" "}
              Donate
            </a>
          </div>
          <div
            style={{
              fontSize: 21.82,
              fontFamily: "Poppins",
              fontWeight: "400",
            }}
          >
            <a style={{ color: "white" }} href="url">
              {" "}
              Careers{" "}
            </a>
          </div>
        </div> */}
      <div className="Section3">
        <h1
          style={{
            fontSize: 21.82,
            fontFamily: "Poppins",
            fontWeight: "700",
          }}
        >
          {/* Are you a Seller? */}
        </h1>
        {/* <div
          style={{
            fontSize: 21.82,
            fontFamily: "Poppins",
            fontWeight: "400",
          }}
        >
          <a style={{ color: "white" }} href="url">
            {" "}
            Find Support
          </a>
        </div>
        <div
          style={{
            fontSize: 21.82,
            fontFamily: "Poppins",
            fontWeight: "400",
          }}
        >
          <a style={{ color: "white" }} href="url">
            {" "}
            News{" "}
          </a>
        </div>
        <div
          style={{
            fontSize: 21.82,
            fontFamily: "Poppins",
            fontWeight: "400",
          }}
        >
          <a style={{ color: "white" }} href="url">
            {" "}
            Events{" "}
          </a>
        </div>
        <div
          style={{
            fontSize: 21.82,
            fontFamily: "Poppins",
            fontWeight: "400",
          }}
        >
          <a style={{ color: "white" }} href="url">
            {" "}
            Blog{" "}
          </a>
        </div> */}
      </div>

      {/* <div className="Line1" style={{width: '50%', height: '50%', borderLeft: 'thick white solid 0.78px'}}></div> */}

      {/* <div
          className="Section4"
          style={{
            width: "31%",
            fontSize: 18.7,
            fontFamily: "Poppins",
            fontStyle: "italic",
            fontWeight: "300",
          }}
        >
          <p>
            This website is owned and operated by Postal Services of India.We have
            developed this website so that you can expand your business and your
            carts!
          </p>
        </div> */}
    </div>
  );
};
export default Footer;
