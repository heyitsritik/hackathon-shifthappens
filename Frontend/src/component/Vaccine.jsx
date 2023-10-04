import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "400px",
    borderRadius: "10px",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  vaccinated: {
    color: "green",
  },
  notVaccinated: {
    color: "white",
  },
}));

export default function Headers() {
  const classes = useStyles();
  const vaccinations = [
    {
      stage: "Birth",
      vaccines: ["BCG", "Hep B1", "OPV"],
      status: [true, false, false],
    },
    {
      stage: "6 weeks",
      vaccines: ["DTwP /DTaP1", "Hib-1", "IPV-1", "Hep B2", "PCV 1", "Rota-1"],
      status: [false, false, false, false, false, false],
    },
    {
      stage: "10 weeks",
      vaccines: ["DTwP /DTaP2", "Hib-2", "IPV-2", "Hep B3", "PCV 2", "Rota-2"],
      status: [false, false, false, false, false, false],
    },
    // Add more data for other stages
    {
      stage: "14 Weeks",
      vaccines: ["DTwP /DTaP3", "Hib-3", "IPV-3", "Hep B4", "PCV 3", "Rota-3*"],
      status: [false, false, false, false, false, false],
    },
    { stage: "6 Months", vaccines: ["Influenza-1"], status: [false] },
    { stage: "7 Months", vaccines: ["Influenza -2"], status: [false] },
    {
      stage: "6 – 9 Months",
      vaccines: ["Typhoid Conjugate Vaccine"],
      status: [false],
    },
    {
      stage: "9 Months",
      vaccines: ["MMR 1 (Mumps, measles, Rubella)"],
      status: [false],
    },
    { stage: "12 Months", vaccines: ["Hepatitis A- 1"], status: [false] },
    { stage: "12 – 15 Months", vaccines: ["PCV Booster"], status: [false] },
    {
      stage: "15 Months",
      vaccines: ["MMR 2", "Varicella"],
      status: [false, false],
    },
    {
      stage: "16 – 18 Months",
      vaccines: ["DTwP /DTaP", "Hib", "IPV"],
      status: [false, false, false],
    },
    {
      stage: "18 – 19 Months",
      vaccines: ["Hepatitis A- 2**", "Varicella 2"],
      status: [false, false],
    },
    {
      stage: "4 – 6 years",
      vaccines: ["DTwP /DTaP", "IPV", "MMR 3"],
      status: [false, false, false],
    },
    {
      stage: "9 – 15years (Girls)",
      vaccines: ["HPV (2 doses)"],
      status: [false],
    },
    { stage: "10 – 12 Years", vaccines: ["Tdap/ Td"], status: [false] },
    {
      stage: "2nd, 3rd, 4th and 5th Year",
      vaccines: ["Annual Influenza Vaccine"],
      status: [false],
    },
  ];

  // Initialize vaccine status for each stage
  const initialVaccineStatus = {};
  vaccinations.forEach((vaccination) => {
    initialVaccineStatus[vaccination.stage] = vaccination.status.map(() => false);
  });

  const [vaccineStatus, setVaccineStatus] = useState(initialVaccineStatus);

  const handleToggle = (stage, vaccineIndex) => {
    const newStatus = { ...vaccineStatus };
    newStatus[stage][vaccineIndex] = !newStatus[stage][vaccineIndex];
    setVaccineStatus(newStatus);
  };

  const [selectedAge, setSelectedAge] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0px",
      }}
    >
      <FormControl
        variant="outlined"
        style={{ marginBottom: "20px", width: "7%" }}
      >
        <InputLabel sx={{}}>Select Age</InputLabel>
        <Select
          value={selectedAge}
          onChange={(e) => setSelectedAge(e.target.value)}
          label="Select age"
          sx={{width:"100%"}}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {vaccinations.map((vaccination) => (
            <MenuItem key={vaccination.stage} value={vaccination.stage}>
              {vaccination.stage}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedAge && (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {selectedAge}
            </Typography>
            <ul>
              {vaccinations
                .find((vaccination) => vaccination.stage === selectedAge)
                ?.vaccines.map((vaccine, vaccineIndex) => (
                  <li key={vaccineIndex} className={classes.listItem}>
                    <Typography style={{ flex: 1 }}>{vaccine}</Typography>
                    <Switch
                      color="primary"
                      checked={
                        vaccineStatus[selectedAge][vaccineIndex] // Use vaccineStatus for the selected stage
                      }
                      onChange={() => handleToggle(selectedAge, vaccineIndex)}
                    />
                    <Typography
                      className={
                        vaccineStatus[selectedAge][vaccineIndex]
                          ? classes.vaccinated
                          : classes.notVaccinated
                      }
                    >
                      {vaccineStatus[selectedAge][vaccineIndex]
                        ? "Vaccinated"
                        : "Not Vaccinated"}
                    </Typography>
                  </li>
                ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
