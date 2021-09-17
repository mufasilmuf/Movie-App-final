import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { ValidatorForm } from "react-material-ui-form-validator";
import { useState } from "react";

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
  const [validation, setvalidation] = useState("");
  const [loginvalidation, setloginvalidation] = useState("");
  const [register, setregister] = useState({
    firstName: "Mohamed",
    lastName: "mufasil",
    email: "mufasilmuf@gmail.com",
    password: "hashim",
    contactNo: "9095042785",
  });

  var userName = "";
  var password = "";

  let onTextchange1 = (e) => {
    userName = e.target.value;

    if (userName === "") {
      setvalidation("required");
    } else {
      setvalidation("");
    }
  };

  let onTextchange2 = (e) => {
    password = e.target.value;

    if (password === "") {
      setvalidation("required");
    } else {
      setvalidation("");
    }
  };

  let handleclick = () => {
    console.log(register.firstName + " predefined username");
    console.log(register.password + " predefined password");
    console.log(userName + " entered username");
    console.log(password + " entered password");

    if (userName == register.firstName && password == register.password) {
      window.location = "/home";
      props.loginStyle = {
        display: "none",
      };
      props.LogoutBtn = {
        display: "block",
      };
    } else {
      setloginvalidation("Invalid Login");
    }
  };

  return (
    <ValidatorForm onSubmit={doSumbit}>
      <Typography>
        <FormControl style={componentStyle}>
          <InputLabel>Username*</InputLabel>
          <Input onChange={onTextchange1} />
          <div style={{ color: "red" }}>{validation}</div>
        </FormControl>
        <FormControl style={componentStyle}>
          <InputLabel>Password*</InputLabel>
          <Input type="password" onChange={onTextchange2} />
          <div style={{ color: "red" }}>{validation}</div>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "10%", marginLeft: "30%" }}
          onClick={handleclick}
        >
          Login
        </Button>
        <div style={{ color: "red", marginTop: "10%", marginLeft: "17%" }}>
          {loginvalidation}
        </div>
      </Typography>
    </ValidatorForm>
  );
};
export default LoginDetails;
