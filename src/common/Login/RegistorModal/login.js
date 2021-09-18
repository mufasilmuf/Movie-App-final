import { ValidatorForm } from "react-material-ui-form-validator";
import { useState } from "react";
import { Button, FormControl, InputLabel } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import { createTheme } from "@material-ui/core/styles";

var LoginDetails = (props) => {
  let theme = createTheme();
  let componentMargin = theme.spacing(1);
  let componentStyle = {
    minWidth: 240,
    maxWidth: 240,
    margin: componentMargin,
  };

  let doSumbit = (e) => {
    e.preventDefault();
  };
  //its validate the user credentails.....................
  const [loginvalidation, setloginvalidation] = useState("");
  const [validator, setvalidator] = useState("");

  const [register, setregister] = useState({
    firstName: "Mohamed",
    lastName: "mufasil",
    email: "mufasilmuf@gmail.com",
    password: "hashim",
    contactNo: "9095042785",
  });

  var userName = "";
  var password = "";

  var onTextchnage1 = (e) => {
    userName = e.target.value;
    if (e.target.value === "") {
      setvalidator("required");
    } else {
      setvalidator("");
    }
  };

  var onTextchnage2 = (e) => {
    password = e.target.value;
    if (e.target.value === "") {
      setvalidator("required");
    } else {
      setvalidator("");
    }
  };

  let handleclick = () => {
    console.log(register.firstName + " predefined username");
    console.log(register.password + " predefined password");
    console.log(userName + " entered username");
    console.log(password + " entered password");

    if (userName === register.firstName && password === register.password) {
      window.location = "/home";
    } else {
      setloginvalidation("Invalid Login");
    }
  };

  return (
    <ValidatorForm onSubmit={doSumbit}>
      {/* TextValidator is wrapper element comes from react material UI form validator its smillar to input tag */}
      <FormControl style={componentStyle}>
        <InputLabel>Username*</InputLabel>
        <Input onChange={onTextchnage1} />
        <div style={{ color: "red" }}>{validator}</div>
      </FormControl>

      <FormControl style={componentStyle}>
        <InputLabel>Password*</InputLabel>
        <Input type="password" onChange={onTextchnage2} />
        <div style={{ color: "red" }}>{validator}</div>
      </FormControl>
      <Button
        style={{ marginTop: "10%", marginLeft: "30%" }}
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleclick}
      >
        Login
      </Button>
      <div style={{ marginTop: "10%", color: "red", marginLeft: "27%" }}>
        {loginvalidation}
      </div>
    </ValidatorForm>
  );
};
export default LoginDetails;
