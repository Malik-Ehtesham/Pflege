/* eslint-disable react/prop-types */
import { Fade } from "react-awesome-reveal";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const QuestionAccordion = (props) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="px-4 sm:px-0   sm:w-5/6">
      <div>
        <Fade direction="up">
          <Accordion
            className="bg-white text-red-100"
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <p className="text-xl sm:text-2xl font-bold my-2 text-rose-500">
                Ab wann besteht eine Pflegebedürftigkeit?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className=" text-start w-4/5 text-lg">
                Eine Pflegebedürftigkeit besteht, laut Gesetzgeber (§14 SGB XI),
                wenn eine Person, bei den unten aufgelisteten, wiederkehrenden
                Alltags Handlungen Unterstützung benötigt.
              </p>
            </AccordionDetails>
          </Accordion>
        </Fade>
        <Fade direction="up">
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <p className="text-xl sm:text-2xl font-bold my-2  text-rose-500">
                Was sind Pflegehilfsmittel?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className=" text-start w-4/5 text-lg">
                Pflegehilfsmittel sind Geräte und Sachmittel, die zur
                Erleichterung der häuslichen Pflege notwendig sind
              </p>
            </AccordionDetails>
          </Accordion>
        </Fade>
        <Fade direction="up">
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <p className="text-xl sm:text-2xl font-bold my-2  text-rose-500">
                Was ist eine Ambulante Pflegesachleistung?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className=" text-start w-4/5 text-lg">
                Pflegebedürftige, die weiterhin zu Hause leben, können einen
                zugelassenen professionellen Pflegedienst engagieren und
                erhalten dann die sogenannte Pflegesachleistung.
              </p>
            </AccordionDetails>
          </Accordion>
        </Fade>
        <Fade direction="up">
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <p className="text-xl sm:text-2xl font-bold my-2  text-rose-500">
                Was ist eine Ambulante Pflegesachleistung?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className=" text-start w-4/5 text-lg">
                Pflegebedürftige, die weiterhin zu Hause leben, können einen
                zugelassenen professionellen Pflegedienst engagieren und
                erhalten dann die sogenannte Pflegesachleistung.
              </p>
            </AccordionDetails>
          </Accordion>
        </Fade>
      </div>
    </div>
  );
};

export default QuestionAccordion;
