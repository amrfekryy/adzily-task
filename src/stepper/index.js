import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import MicIcon from "@material-ui/icons/Mic";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import StepConnector from "@material-ui/core/StepConnector";
import PersonIcon from "@material-ui/icons/Person";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
// import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';

import * as StepperContents from './content'

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
    }
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1
  }
})(StepConnector);
const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"
  }
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <MicIcon />,
    2: <LibraryMusicIcon />,
    3: <QueueMusicIcon />,
    4: <PersonIcon />
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  title: {
    fontSize: 'bolder',
    margin: theme.spacing(1)
  },
  button: {
    marginRight: theme.spacing(1)
  },
  chip: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
    width: theme.spacing(30),
    fontWeight: 'bolder',
  },
  content: {
    height: 300,
    overflow: 'auto',
    margin: theme.spacing(2)
  },
}));

export default function CustomizedSteppers(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  
  const steps = [
    {content: 'Singers', title: 'Select Singers'},
    {content: 'Albums', title: 'Select Albums'},
    {content: 'Songs', title: 'Select Songs'},
    {content: 'Form', title: 'Submit Request'},
  ]

  const isLastStep = activeStep === steps.length - 1
  
  const StepContent = StepperContents[steps[activeStep]?.content]


  const handleBack = () => setActiveStep((step) => step-1)
  const handleNext = () => setActiveStep((step) => step+1)
  const handleSubmit = () => props.appStore.setForm((form) => ({...form, submitted: true}))

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={9}>
          
          <Typography variant="h5" gutterBottom className={classes.title}>
            {steps[activeStep]?.title}
          </Typography>

          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<ColorlibConnector />}
          >
            {steps.map(({content}) => (
              <Step key={content}>
                <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
              </Step>
            ))}
          </Stepper>

          <div>
            <div>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  className={classes.content}
                >
                  <StepContent appStore={props.appStore}/>  
                </Grid>              
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    disabled={!props.appStore.totals.count}
                    variant="contained"
                    color="primary"
                    onClick={isLastStep? handleSubmit : handleNext}
                    className={classes.button}
                  >
                    {isLastStep? "Submit" : "Next"}
                  </Button>
                </div>
              </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={3}              
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
            <Chip variant="outlined" color="secondary" className={classes.chip}
              label={`Count: ${props.appStore.totals.count} Songs`} />
            <Chip variant="outlined" color="secondary" className={classes.chip}
              label={`Amount: ${props.appStore.totals.amount} EGP`} />
        </Grid>
      </Grid>
    </div>
  );
}
