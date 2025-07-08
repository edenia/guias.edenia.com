import React, { useState } from 'react'
import { Stepper, Step, StepLabel, Button, Typography, Box } from '@mui/material'
import useBaseUrl from '@docusaurus/useBaseUrl';

const CustomStepper = ({ Content }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '90%' }}>
      <Stepper 
        activeStep={activeStep} 
        alternativeLabel
        sx={{
          '& .MuiStepIcon-root': {
            color: 'rgb(192, 192, 192)',
            '&.Mui-active': {
              color: '#3EBBD3'
            },
            '&.Mui-completed': {
              color: '#82B982'
            }
          }
        }}
      >
        {Content.map((step, index) => (
            <Step key={index}>
              <StepLabel>
               { step.title && step.title }
              </StepLabel>
            </Step>
          )
        )}
      </Stepper>
      <Box>
        {activeStep === Content.length ? (
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center' 
          }}>
            <Button 
              onClick={handleReset} 
              sx={{ 
                textTransform: 'none', 
                color: '#7f7f7f' 
              }}
            >
              Reset
            </Button>
          </Box>
        ) : (
          <Box>
            <Typography sx={{ margin: '1% 5% 1%' }}>
              {Content[activeStep].instruction}
            </Typography>
            <Box sx={{ margin: '1% 5% 1%' }}>
              <img src={useBaseUrl(Content[activeStep].imageSrc)} loading="lazy"/>
            </Box>
            <Box sx={{ direction: 'rtl', margin: '0% 4%' }}>
              <Button
                variant="contained"
                onClick={handleNext}
                href={Content[activeStep].href}
                sx={{ 
                  textTransform: 'none', 
                  color: '#fff',
                  backgroundColor: '#3EBBD3',
                  margin: '1%',
                  '&:hover': {
                    backgroundColor: '#36a8bd'
                  }
                }}
              >
                {activeStep === Content.length - 1 ? 'Finish' : 'Next'}
              </Button>
              <Button
                disabled={!activeStep}
                onClick={handleBack}
                sx={{ 
                  textTransform: 'none', 
                  color: '#7f7f7f' 
                }}
              >
                Back
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default CustomStepper