import React, { Component } from 'react'
import MuiThemeprovider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'



export class Confirm extends Component {
  continue = e => {
      e.preventDefault();
      this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }


  render() {
    const { values: {firstName, lastName, email, occupation, city, bio} } = this.props;

    return (
      <MuiThemeprovider>
        <React.Fragment>
            <AppBar title = 'confirm user data' />
            <br />
           <List>
               <ListItem 
               primaryText = 'firstname'
               secondaryText = {firstName}
               />
               <ListItem 
               primaryText = 'lastname'
               secondaryText = {lastName}
               />
               <ListItem 
               primaryText = 'email'
               secondaryText = {email}
               />
               <ListItem 
               primaryText = 'occupation'
               secondaryText = {occupation}
               /><ListItem 
               primaryText = 'city'
               secondaryText = {city}
               />
               <ListItem 
               primaryText = 'bio'
               secondaryText = {bio}
               />
           </List>
            <br/>
            <RaisedButton
            label = 'confirm & continue'
            primary = {true}
            style = {styles.button}
            onClick={this.continue}
            />
            <br/>
            <RaisedButton
            label = 'back'
            primary = {false}
            style = {styles.button}
            onClick={this.back}
            />

        </React.Fragment>
      </MuiThemeprovider>
    )
  }
}

const styles = {
    button: {
        margin: 15
    }
}


