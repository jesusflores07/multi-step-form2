import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './confirm'
import { Success } from './success';

export class UserForm extends Component {
    state = {
        step:1,
        firstName:'',
        lastname:'',
        email:'',
        occupation:'',
        city:'',
        bio:''
    };

    // proceed to next step

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // moving to prev step

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    // handle fields chance
    handleChance = input => e => {
            this.setState({[input]: e.target.value});
        };


  render () {
      const { step } = this.state;
      const { firstName, lastname, email, occupation, city, bio } = this.state;
      const values = { firstName, lastname, email, occupation, city, bio };

      switch (step) {
        case 1:
            return (
                <FormUserDetails 
                  nextStep = {this.nextStep}
                  handleChance = {this.handleChance}
                  values = {values}
                />
            );
        case 2: 
        <FormPersonalDetails 
        nextStep = {this.nextStep}
        prevStep = {this.prevStep}
        handleChance = {this.handleChance}
        values = {values}
         />;
         break;
        case 3: 
        <Confirm
        nextStep = {this.nextStep}
        prevStep = {this.prevStep}
        values = {values}
         />;
         break;
        case 4:
           <Success/>
           break;
        default:         
    };
     
  };
};

