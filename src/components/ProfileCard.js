import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";


const styles = {
    card: {
        marginTop: 30,
        
    },

};

class ProfileCard extends Component {
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
                                    variant="h3"
                                    component="h2"
                                    align="center"
                                >

                                    <b>Boonsita Pornin</b>
                                </Typography>
                                <Typography component="p">
                                    <b>Sex:</b> Female
                                    <br />
                                    <b>Date of Birth:</b> 1 April 1997
                                    <br />
                                    <b>Address:</b> 1/21077 Moo 1 Ban-Klong
                                    Sub-District, Muang-Phitsanulok District 
                                    <br />
                                    Phitsanulok, Thailand 65000
                                    <br />
                                    <b>Nationality:</b> Thai
                                    <br />
                                    <b>Religion:</b> Buddhism
                                    <br />
                                </Typography>
                            </CardContent>
                    </Card>
                </Grid>
            </div>
        );
    }
}
ProfileCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileCard);
