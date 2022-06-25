import React, { Component } from "react";
import MuiThemeprovider from "@material-ui/styles/ThemeProvider";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import RaisedButton from "@material-ui/core/Button";

export default class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeprovider>
        <React.Fragment>
          <AppBar>enter user details </AppBar>
          <br />
          <TextField
            helperText="enter your first name"
            variant="outlined"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
            size="small"
          />
          <br />
          <TextField
            variant="outlined"
            helperText="enter yout last name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
            size="small"
          />
          <br />
          <TextField
            variant="outlined"
            helperText="enter your email"
            onChange={handleChange("email")}
            defaultValue={values.email}
            size="small"
          />
          <br />
          <RaisedButton
            //label = 'continue'
            //primary = {true}
            //style = {styles.button}
            onClick={this.continue}
            variant="contained"
            color="success"
          >
            continuar
          </RaisedButton>
        </React.Fragment>
      </MuiThemeprovider>
    );
  }
}

/*const styles = {
    button: {
        margin: 15,
        border: '1px solid red'
    }
}*/
