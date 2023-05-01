import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ["BCT I year", "BCT II year", "BCT III year", "BCT IV year"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Details regarding BCT I year`;
    case 1:
      return "Details regarding BCT II year";
    case 2:
      return `Details regarding BCT III year`;
    case 3:
      return `You are in the final year BCT,
        Your Aggregate Marks is : __`;
    default:
      return "Unknown step";
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(3);
  const steps = getSteps();
  const handleClick = (e) => {
    switch (e.target.innerHTML) {
      case "BCT I year": {
        setActiveStep(0);
        break;
      }
      case "BCT II year": {
        setActiveStep(1);
        break;
      }
      case "BCT III year": {
        setActiveStep(2);
        break;
      }
      case "BCT IV year": {
        setActiveStep(3);
        break;
      }
      default: {
        break;
      }
    }
  };
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label} onClick={handleClick}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
