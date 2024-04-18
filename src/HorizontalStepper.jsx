import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import FinalLoading from "./components/FinalLoading";
import Last from "./components/Last";

const steps = ["", "", "", "", ""];

const ProgressContainer = styled(Box)({
  width: "100%",
  height: 3,
  backgroundColor: "#E0E0E0",
  borderRadius: 4,
  position: "relative",
  marginBottom: 16,
});

const ProgressBar = styled(Box)(({ width }) => ({
  height: "100%",
  width: `${width}%`,
  backgroundColor: "green",
  borderRadius: "inherit",
  position: "absolute",
  top: 0,
  left: 0,
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "green",
  color: "white",
  "&:hover": {
    backgroundColor: theme.palette.success.dark,
  },
}));

export default function HorizontalStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [showFinalLoading, setShowFinalLoading] = React.useState(false); // State to manage showing final loading

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setShowFinalLoading(true); // Show final loading when clicking the final button
      setTimeout(() => {
        setShowFinalLoading(false);
        setActiveStep((prevActiveStep) => prevActiveStep + 1); // Move to the next step after 1 second
      }, 1000);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {showFinalLoading ? (
        <FinalLoading /> // Show FinalLoading component if showFinalLoading is true
      ) : activeStep === steps.length ? (
        <Last /> // Show Last component if activeStep is equal to the total number of steps
      ) : (
        <>
          <ProgressContainer>
            <ProgressBar width={(activeStep / (steps.length - 1)) * 100} />
          </ProgressContainer>
          <>
            {activeStep === 0 && <Step1 />}
            {activeStep === 1 && <Step2 />}
            {activeStep === 2 && <Step3 />}
            {activeStep === 3 && <Step4 />}
            {activeStep === 4 && <Step5 />}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              {activeStep > 0 && (
                <CustomButton
                  color="inherit"
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </CustomButton>
              )}
              <Box sx={{ flex: "1 1 auto" }} />
              <CustomButton onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </CustomButton>
            </Box>
          </>
        </>
      )}
    </Box>
  );
}
