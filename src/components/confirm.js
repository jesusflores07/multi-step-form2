import React, { Component } from "react";
import MuiThemeprovider from "@material-ui/styles/ThemeProvider";
import AppBar from "@material-ui/core/AppBar";
import { List, ListItem, ListItemText } from "@material-ui/core";
import RaisedButton from "@material-ui/core/Button";

export default class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;

    return (
      <MuiThemeprovider>
        <React.Fragment>
          <AppBar>confirm user data</AppBar>
          <br />
          <List>
            <ListItem>
              <ListItemText primary="first name" secondary={firstName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="last name" secondary={lastName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="email" secondary={email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="occupation" secondary={occupation} />
            </ListItem>
            <ListItem>
              <ListItemText primary="city" secondary={city} />
            </ListItem>
            <ListItem>
              <ListItemText primary="bio" secondary={bio} />
            </ListItem>
          </List>
          <br />
          <RaisedButton
            //label = 'confirm & continue'
            //primary = {true}
            //style = {styles.button}
            onClick={this.continue}
          >
            continue
          </RaisedButton>

          <RaisedButton
            //label = 'back'
            //primary = {false}
            //style = {styles.button}
            onClick={this.back}
          >
            back
          </RaisedButton>
        </React.Fragment>
      </MuiThemeprovider>
    );
  }
}

/*const styles = {
    button: {
        margin: 15
    }
}*/
