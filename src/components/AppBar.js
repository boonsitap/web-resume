import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class MenuBar extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="secondary">
                    <Toolbar>

                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBar);