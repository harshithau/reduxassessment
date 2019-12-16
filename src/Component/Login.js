import React from "react";
import './Login.css';
import BrowserHistory from "../Utils/BrowserHistory";

const initialState = {
  name: "",
  password: "",
  nameError: "",
  passwordError: ""
};

export default class Login extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let passwordError = "";

    if (!this.state.name) {
      nameError = "This field is manditory";
    }

    if (!this.state.password) {
        passwordError = "invalid Password";
    }

    if (passwordError || nameError) {
      this.setState({ passwordError, nameError });
      return false;
    }

    return true;
  };
  navigate(){
    BrowserHistory.push('/Register')
  }

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
    this.setState(initialState);
    }
  };

  render() {
    return (
        <div>
        <form onSubmit={this.handleSubmit}>
         
         <h1>LOGIN HERE</h1>
         <div> <label>USERNAME:</label> </div>
         <div> <input name="name" placeholder="UserName" value={this.state.name}  onChange={this.handleChange}/> </div>
         <div  className="msg"> {this.state.nameError}</div>
        <div> <label>PASSWORD:</label></div>
        <div><input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} /> </div>
         <div className="msg"> {this.state.passwordError}</div>
         <div><button className="Login" type="submit">Login</button></div>
       
  
    </form>
    <button className="Register" onClick={this.navigate}>Register</button>
    </div>
    
  
      
      
   
    );
  }
}
