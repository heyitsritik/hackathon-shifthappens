import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import Input from "./Input";
// import Inputbox from "./Input+Button";
import Calender1 from "./Calender/Calender1"
import Calender2 from "./Calender/Calender2"
import Calender3 from "./Calender/Calender3"

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const CustomPanel = ({ value, index }) => {
  return (
    <CustomTabPanel value={value} index={index}>
      {/* <Input /> */}
    </CustomTabPanel>
  );
};
export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="secondary"
          indicatorColor="secondary"
          centered
        >
          <Tab label="Weeks 4 to 28 of pregnancy" {...a11yProps(0)} />
          <Tab label="Weeks 28 to 36 of pregnancy" {...a11yProps(1)} />
          <Tab label="Weeks 36 to 41 of pregnancy" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Calender1/>
        {/* <Inputbox /> */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Calender2/>
        {/* <Inputbox /> */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Calender3/>
        {/* <Inputbox /> */}
      </CustomTabPanel>
      {/* <CustomPanel value={value} index={2}/> */}
      {/* <CustomPanel value={value} index={2}/> */}
    </Box>
  );
}
