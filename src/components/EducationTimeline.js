import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";


const styles = theme => ({
    root: {
        width: '90%',
        marginTop: 20
    },
    backButton: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});

function getSteps() {
    return [
        'Rojanawit Malabiang School', 
        'Chalermkwansatree School : Science - Mathematics', 
        'Naresuan University : Computer Engineering Bachelor'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return 'Primary School';
        case 1:
            return 'High School';
        case 2:
            return 'University';  
        default:
            return 'Uknown stepIndex';
    }
}

class EducationTimeline extends Component {
    state = {
        activeStep: 0,
    };

    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };
    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;
        return (
            <div className={classes.root}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Stepper color="secondary" activeStep={activeStep} alternativeLabel>
                        {steps.map(label => {
                            return (
                                <Step color="secondary" key={label}>
                                    <StepLabel color="secondary">{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                </Grid>
                <div>
                    {this.state.activeStep === steps.length ? (
                        <div>
                            <Grid
                                        container
                                        direction="row"
                                        justify="center"
                                        alignItems="center"
                                    >
                            <Button color="secondary" onClick={this.handleReset}>Reset</Button>
                            </Grid>
                        </div>
                    ) : (
                            <div>
                                
                                <Typography align="center" className={classes.instructions}> <b>{getStepContent(activeStep)} </b></Typography>
                                <div>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="center"
                                        alignItems="center"
                                    >
                                    <Button
                                        color="secondary"
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        className={classes.backButton}
                                    >
                                        Back
                                    </Button>
                                    <Button variant="contained" color="secondary" onClick={this.handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                    </Grid>
                                </div>
                            </div>
                        )}
                </div>
            </div>

        );
    }
} 
EducationTimeline.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(EducationTimeline);