import AppBar from "@material-ui/core/AppBar";
import RaisedButton from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MuiThemeprovider from "@material-ui/styles/ThemeProvider";
import React, { Component } from "react";

export class FormPersonalDetails extends Component {
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
          <AppBar>enter personal details</AppBar>
          <br />
          <TextField
            variant="outlined"
            helperText="enter your occupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
            size="small"
          />

          <br />
          <TextField
            variant="outlined"
            helperText="enter yout city"
            onChange={handleChange("city")}
            defaultValue={values.city}
            size="small"
          />
          <br />
          <TextField
            variant="outlined"
            helperText="enter your bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
            size="small"
          />
          <br />
          <RaisedButton
            primary={true}
            style={styles.button}
            onClick={this.continue}
          >
            continue
          </RaisedButton>

          <RaisedButton
            label="back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          >
            back
          </RaisedButton>
        </React.Fragment>
      </MuiThemeprovider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default FormPersonalDetails;
