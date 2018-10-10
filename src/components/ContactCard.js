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

        marginLeft: 10,
        marginTop: 10,
        height: 228,
        
        
    },

};

class ContactCard extends Component {
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
                                >

                                    <b>Contact Me</b>
                                </Typography>
                                <Typography component="p">
                                    <b>Email:</b> boonsitap58@email.nu.ac.th
                                    <br />
                                    <b>Facebook:</b> Boonsita Pornin
                                    <br />
                                    <b>Twitter:</b> @SONE9_
                                    <br />
                                    <b>Phone:</b> 098-7474192
                                    <br />
                                </Typography> 
                                    <br />   
                                    <Divider />
                                    <br />
                                    <Typography component="p">
                                    <b>GitHub:</b> boonsitap
                                    <br />
                                </Typography>
                            </CardContent>

                        
                    </Card>
                </Grid>
            </div>
        );
    }
}
ContactCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactCard);