import React, { Component } from 'react'
import MuiThemeprovider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'



export class FormPersonalDetails extends Component {
  continue = e => {
      e.preventDefault();
      this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }


  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeprovider>
        <React.Fragment>
            <AppBar title = 'enter personal details' />
            <TextField 
            hintText = 'enter your occupation'
            floatingLabelText = 'occupation'
            onChange={handleChange ('ocupation')}
            defaultValue = {values.occupation}
            />
            <br />
            <TextField 
            hintText = 'enter yout city'
            floatingLabelText = 'city'
            onChange={handleChange('city')}
            defaultValue={values.city}
            />
            <TextField 
            hintText = 'enter your bio'
            floatingLabelText = 'bio'
            onChange={handleChange('bio')}
            defaultValue={values.bio}
            />
            <br/>
            <RaisedButton
            label = 'continue'
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


export default FormPersonalDetails
