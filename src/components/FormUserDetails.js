import React, { Component } from 'react'
import MuiThemeprovider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'



export class FormUserDetails extends Component {
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
            hintText = 'enter your first name'
            floatingLabelText = 'first name'
            onChange={handleChange ('first name')}
            defaultValue = {values.firstName}
            />
            <br />
            <TextField 
            hintText = 'enter yout last name'
            floatingLabelText = 'last name'
            onChange={handleChange('last name')}
            defaultValue={values.lastName}
            />
            <TextField 
            hintText = 'enter your email'
            floatingLabelText = 'email'
            onChange={handleChange('email')}
            defaultValue={values.email}
            />
            <br/>
            <RaisedButton
            label = 'continue'
            primary = {true}
            style = {styles.button}
            onClick={this.continue}
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


export default FormUserDetails
