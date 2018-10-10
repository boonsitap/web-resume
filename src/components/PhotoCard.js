import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';

import red from '@material-ui/core/colors/red';
import Grid from "@material-ui/core/Grid";


const styles = theme => ({
    card: {
        //marginRight: 10,
        marginTop: 10,
        height: 300,
        width: 525
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },

    avatar: {
        backgroundColor: red[500],
    },
});

class PhotoCard extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar}>
                                BP
                        </Avatar>
                        }
                        title="Boonsita Pornin"
                        subheader="June 12, 2018" />


                    <CardMedia
                        className={classes.media}
                        image="https://www.img.in.th/images/c00c5d5b4d5fc3badbc047fc8b496368.jpg"
                        title="Boonsita Pornin"
                    />
                </Card>
            </Grid>
          );
          }
      }
      
PhotoCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PhotoCard);