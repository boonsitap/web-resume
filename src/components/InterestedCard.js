import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from '@material-ui/core/Divider';


const styles = {
    card: {

        //marginLeft: 10,
        marginTop: 10,
        //height: 300,
        width: 260
        
    },

};

class InterestedCard extends Component {
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
                                    color="secondary"
                                >

                                    <b>Interested In</b>
                                </Typography>
                                <Typography variant="h5" color="primary">
                                <b>Knowledge:</b>
                                </Typography>
                                <Typography component="p">
                                <b>React, NodeJS, </b>
                                <br />
                                <b>Computer Vision</b>
                                <br />
                                <br />
                                <Divider />
                                </Typography>
                                <Typography variant="h5" color="primary">
                                <b>Others:</b>
                                </Typography>
                                <Typography component="p">
                                <b>K-POP (Girls'Generation, </b>
                                <br />
                                <b>Blackpink, BTS), Dota2, Football, Drama/Series</b>
                                <br />
                                <br />
                                <Divider />
                                </Typography>
                            </CardContent>

                    </Card>
                </Grid>
            </div>
        );
    }
}
InterestedCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InterestedCard);