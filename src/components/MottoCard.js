import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";


const styles = {
    card: {

        //marginRight: 10,
        marginTop: 10,
        height: 228,
        width: 248 // fixed size
        
    },

};

class MottoCard extends Component {
    render() {
        const { classes } = this.props;


        return (
            <div>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Card className={classes.card}>
                        
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h4"
                                    component="h2"
                                    align="center"
                                    color="primary"
                                >

                                    <b>Motto</b>
                                </Typography>
                                <Typography  align="center" variant="h4" color="secondary">
                                    <b>'teamwork' </b>
                                    <br />
                                    <b>makes</b>
                                    <br />
                                    <b>the dream work</b>
                              
                                </Typography>
                            </CardContent>

                        
                    </Card>
                </Grid>
            </div>
        );
    }
}
MottoCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MottoCard);