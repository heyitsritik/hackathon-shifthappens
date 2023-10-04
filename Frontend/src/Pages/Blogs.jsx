import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Card from "../component/Card";
import baby from "../Baby.jpg";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import Divider from "@mui/material/Divider";

const Blogs = () => {
  const prod = [
    {
      title: "How will my baby's movements feel, week by week?",
      content:
        "Every pregnancy is different, so it’s hard to say exactly what you’llfeel and when. If this is your first baby, you may not be able to feel much until after 20 weeks of pregnancy. However,",
      photo: baby,
    },
    {
      title: "How will my baby's movements feel, week by week?",
      content:
        "Every pregnancy is different, so it’s hard to say exactly what you’llfeel and when. If this is your first baby, you may not be able to feel much until after 20 weeks of pregnancy. However,",
      photo: baby,
    },
    {
      title: "How will my baby's movements feel, week by week?",
      content:
        "Every pregnancy is different, so it’s hard to say exactly what you’llfeel and when. If this is your first baby, you may not be able to feel much until after 20 weeks of pregnancy. However,",
      photo: baby,
    },
    {
      title: "How will my baby's movements feel, week by week?",
      content:
        "Every pregnancy is different, so it’s hard to say exactly what you’llfeel and when. If this is your first baby, you may not be able to feel much until after 20 weeks of pregnancy. However,",
      photo: baby,
    },
    {
      title: "How will my baby's movements feel, week by week?",
      content:
        "Every pregnancy is different, so it’s hard to say exactly what you’llfeel and when. If this is your first baby, you may not be able to feel much until after 20 weeks of pregnancy. However,",
      photo: baby,
    },
    {
      title: "How will my baby's movements feel, week by week?",
      content:
        "Every pregnancy is different, so it’s hard to say exactly what you’llfeel and when. If this is your first baby, you may not be able to feel much until after 20 weeks of pregnancy. However,",
      photo: baby,
    },
    {
      title: "How will my baby's movements feel, week by week?",
      content:
        "Every pregnancy is different, so it’s hard to say exactly what you’llfeel and when. If this is your first baby, you may not be able to feel much until after 20 weeks of pregnancy. However,",
      photo: baby,
    },
    {
      title: "How will my baby's movements feel, week by week?",
      content:
        "Every pregnancy is different, so it’s hard to say exactly what you’llfeel and when. If this is your first baby, you may not be able to feel much until after 20 weeks of pregnancy. However,",
      photo: baby,
    },
    {
      title: "How will my baby's movements feel, week by week?",
      content:
        "Every pregnancy is different, so it’s hard to say exactly what you’llfeel and when. If this is your first baby, you may not be able to feel much until after 20 weeks of pregnancy. However,",
      photo: baby,
    },
  ];
  return (
    <div>
      <Navbar />
      <br/>
      {/* <br/> */}
      <h1 style={{ paddingLeft: "17rem" }}>
        {/* &nbsp; */}
        Blogs
      </h1>
      <Divider>
        <LocalFloristOutlinedIcon />
      </Divider>
      <br />
      <div
        className="DisplayProd"
        style={{
          width: "70%",
          // borderStyle: "dashed", borderColor: "black",
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        {/* <div style={{ borderStyle: "dashed", borderColor: "black" }}>
            <img style={{ width: "75%", padding: "2.25rem" }} src={prod[0].photo} alt="Logo" />
            <div className="ProdText" style={{ display: "flex", flexDirection: "column", rowGap: "0.25rem", }}>
              <div className="prodPrice">
                &nbsp;    &nbsp;    {prod[0].Dprice}  &nbsp;   <span className="discount"> {prod[0].OGprice}</span>
              </div>
              <div>
                <Rating value={prod[0].Rating} />
              </div>
              <div className="prodDesc">
                &nbsp;    &nbsp;   {prod[0].name}
              </div>
              <div className="prodDesc">
                &nbsp;    &nbsp;    {prod[0].color}
              </div>
            </div>
          </div> */}
        {prod.map((val) => (
          <Card title={val.title} image={val.photo} content={val.content} />
        ))}
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};
export default Blogs;
