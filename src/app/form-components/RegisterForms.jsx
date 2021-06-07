import React, { Component } from 'react';
import NameInput from "../formElements/NameInput";
import TShirtSizeSelect from '../formElements/TShirtSizeSelect';
import LunchCheckbox from "../formElements/LunchCheckbox";


// Immutabiliy 
const emptyForm = {
  formSubmitted: false,
  formComplete: false,
  name: '',
  tShirtSize: '',
  lunch: false,
};

const isFormComplete = (form) => form.name;

class RegisterForms extends Component {
  constructor(props) {
    super(props);
    this.state = emptyForm;

    this.state = emptyForm;
    // binding from function
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleResetForm = this.handleResetForm.bind(this);
    // this.handleTShirtSizeChange = this.handleTShirtSizeChange.bind(this);
    // this.handleLunchChange = this.handleLunchChange.bind(this);
  }

  handleSubmit(event) {
    const { name, tShirtSize, lunch} = this.state;
    this.props.onSubmit({
      name,
      tShirtSize,
      lunch
    });
    
    this.setState({
      formSubmitted: true,
    });
    console.log(`Sending to an API: ${JSON.stringify(this.state)}`);
  }

  handleChange(event) {

    // console.log(event.target.name)
    const formTargetName = event.target.name;
    const value = formTargetName === "lunch" ? event.target.checked : event.target.value;
    
    this.setState((previousState) => {
      const newState = {
        ...previousState,
        [formTargetName]: value,
      };

      newState.formComplete = isFormComplete(newState);
      return newState;
    });
  }

  handleResetForm(event) {
    this.setState(emptyForm);
  }
  
  // handleTShirtSizeChange(event) {
  //   this.setState({ tShirtSize: event.target.value });
  // }
  // handleLunchChange(event){
  //     this.setState({ lunch: event.target.checked });
  // }

  // object spread operation=> kopieren von elementen von einem in das andere Objekt

  render() {
    if (this.state.formSubmitted) {
      return (
        <div>
          <p>Formular erfolgreich versandt!</p>
          <button onClick={this.handleResetForm}>
            Neues Formular ausfüllen
          </button>
        </div>
      );
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <NameInput value={this.state.name} onChange={this.handleChange} />
        <TShirtSizeSelect
          value={this.state.tShirtSize}
          onChange={this.handleChange}
        />
        <LunchCheckbox value={this.state.lunch} onChange={ this.handleChange } />
        <button onClick={ this.handleSubmit } disabled={ !this.state.formComplete }>
          Anmelden
        </button>
      </form>
    );
  }
}

export default RegisterForms;