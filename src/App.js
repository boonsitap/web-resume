import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from '../src/components/AppBar';
import ProfileCard from '../src/components/ProfileCard';
import EducationTimeline from '../src/components/EducationTimeline';
import ContactCard from '../src/components/ContactCard';
import MottoCard from '../src/components/MottoCard';
import ExpCard from '../src/components/ExpCard'
import PhotoCard from '../src/components/PhotoCard'
import InterestedCard from '../src/components/InterestedCard'

import Grid from "@material-ui/core/Grid";



class App extends Component {



  render() {
    return (
      <div>

        <AppBar />
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
        <EducationTimeline />
        </Grid>
        <div>
          <ProfileCard />
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <MottoCard />

            <ContactCard />
          </Grid>
          <PhotoCard />
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <ExpCard />

            <InterestedCard />
          </Grid>

        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default App;