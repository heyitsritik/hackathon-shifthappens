import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Calender3 from "./Calender/Calender3"
import Calender1 from "./Calender/Calender1"
import Calender2 from "./Calender/Calender2"

export default function BasicAccordion() {
  return (
    <div style={{width : "50%"}}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Weeks 4 to 28 of pregnancy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Calender1/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Weeks 28 to 36 of pregnancy</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Calender2/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Weeks 36 to 41 of pregnancy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Calender3/>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}