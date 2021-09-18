import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { createTheme } from "@material-ui/core/styles";
import { useState } from "react";
import { ValidatorForm } from "react-material-ui-form-validator";

var Registor = () => {
  //it validation for the user inputs
  const [validation, setvalidation] = useState("");
  //it excute the status of the Registeration
  const [updateSucess, setupdateSucess] = useState("");

  //it array of the user lists
  const [register, setregister] = useState([
    {
      firstName: "Mohamed",
      lastName: "mufasil",
      email: "mufasilmuf@gmail.com",
      password: "12345678",
      contactNo: "9095042785",
    },
  ]);

  let theme = createTheme();
  let componentMargin = theme.spacing(1);
  let componentStyle = {
    minWidth: 240,
    maxWidth: 240,
    margin: componentMargin,
  };

  let doSumbit = (e) => {
    e.preventDefault();
    console.log("i am side dosubmit");
  };

  // ------------------------------------its create a new person at every time--------------------
  let NewUser = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contactNo: "",
  };
  // ------------------------------------its create a new person at every time--------------------

  let validate = (e) => {
    var Name = e.target.name;
    let value = e.target.value;
    NewUser[Name] = value;

    // if (value === "" && Name === e.target.name) {
    //   setvalidation("required");
    // } else {
    //   setvalidation("");
    // }
    // console.log(e.target.name + ":" + e.target.value);
  };

  let handleClick = () => {
    let updateuser = [...register];
    console.log(NewUser);
    //it update the Registored use at every time ..
    updateuser.push(NewUser);
    //its assign the new array into the register
    setregister(updateuser);

    NewUser = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      contactNo: 0,
    };
    setupdateSucess("Succussfully Register!!");

    console.log(register);
  };

  return (
    <ValidatorForm onSubmit={doSumbit}>
      <Typography>
        <FormControl style={componentStyle}>
          <InputLabel>First Name*</InputLabel>
          <Input name="firstName" onChange={validate}></Input>
          <div style={{ color: "red" }}>{validation}</div>
        </FormControl>
        <FormControl style={componentStyle}>
          <InputLabel>Last Name*</InputLabel>
          <Input name="lastName" onChange={validate}></Input>
          <div style={{ color: "red" }}>{validation}</div>
        </FormControl>
        <FormControl style={componentStyle}>
          <InputLabel>Email*</InputLabel>
          <Input type="email" name="email" onChange={validate}></Input>
          <div style={{ color: "red" }}>{validation}</div>
        </FormControl>
        <FormControl style={componentStyle}>
          <InputLabel>Password*</InputLabel>
          <Input type="password" name="password" onChange={validate}></Input>
          <div style={{ color: "red" }}>{validation}</div>
        </FormControl>
        <FormControl style={componentStyle}>
          <InputLabel>Contact No*</InputLabel>
          <Input name="contactNo" onChange={validate}></Input>
          <div style={{ color: "red" }}>{validation}</div>
        </FormControl>
      </Typography>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "10%", marginLeft: "25%" }}
        onClick={handleClick}
      >
        Register
      </Button>
      <div
        style={{
          color: "green",
          marginTop: "10%",
          marginLeft: "15%",
        }}
      >
        {updateSucess}
      </div>
    </ValidatorForm>
  );
};
export default Registor;
