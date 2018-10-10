import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        
        backgroundColor: theme.palette.background.paper,
    },

    card: {
        
        marginRight: 10,
        marginTop: 10,
    
        width: 260

    },
});
  

class ExpCard extends Component {
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

                                <b>Experienced</b>
                            </Typography>
                            <div className={classes.root}>
                                <List component="nav">
                                    <ListItem button>
                                        <ListItemText align="center" primary="C/C++" />
                                    </ListItem>
                                    <Divider />
                                    <ListItem button>
                                        <ListItemText align="center" primary="Python" />
                                    </ListItem>
                                    <Divider />
                                    <ListItem button>
                                        <ListItemText align="center" primary="JavaScript" />
                                    </ListItem>
                                    <Divider />
                                    <ListItem button>
                                        <ListItemText align="center" primary="Assembly" />
                                    </ListItem>
                                    <Divider />
                                </List>
                            </div>

                        </CardContent>
                    </Card>
                </Grid>
            </div>
        );
    }
}
ExpCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ExpCard);