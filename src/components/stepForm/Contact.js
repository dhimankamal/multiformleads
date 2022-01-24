import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Contact = ({ formData, setForm, navigation }) => {
  const { firstName, lastName, nickName, address, city, state, zip,phone, email } = formData;

  return (
    <Container maxWidth="xs">
      <h3>Contact</h3>
      <TextField
        label="Phone"
        name="phone"
        value={phone}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="E-Mail"
        name="email"
        value={email}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <div style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => navigation.next()}
        >
          Next
        </Button>
      </div>
      <br />
      <br />

      <h1> Your First Name: {firstName}</h1>
      <h1> Your Last Name: {lastName}</h1>
      <h1> Your Nick Name: {nickName}</h1>
      <h1> Your Address: {address}</h1>
      <h1> Your City: {city}</h1>
      <h1> Your State: {state}</h1>
      <h1> Your Zip Code: {zip}</h1>
      <h1> Your Phone Number: {phone}</h1>
      <h1> Your Email: {email}</h1>
    </Container>
  );
};
