import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Names = ({ formData, setForm, navigation }) => {
  const { firstName, lastName, nickName,addItem } = formData;

  return (
    <Container maxWidth="xs">
      <h3>Names</h3>
      <TextField
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Nick Name"
        name="nickName"
        value={nickName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={() => navigation.next()}
      >
        Next
      </Button>





<br/><br/><br/><br/><br/><br/>





 <h1> Your First Name:   {firstName}</h1> 

 <h1> Your Last Name:   {lastName}</h1> 

 <h1> Your Nick Name:   {nickName}</h1> 
 

    </Container>
  );
};
