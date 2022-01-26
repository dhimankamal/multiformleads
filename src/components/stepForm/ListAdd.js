import React,{ useState }  from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { List, ListItem } from '@material-ui/core'
 

export const ListAdd = ({ formData, setForm, navigation }) => {
  let {
    firstName,
    lastName,
    nickName,
    address,
    city,
    state,
    zip,
    phone,
    email,
    addItem
  } = formData

let [text, setText] = useState("");

  function handleChange(name) {
    

    if(text.includes(name)){
      return text = setText(text.replace(name,""));

    }else{
      return setText(text + name);
    }
   
  }


  return (
    <Container maxWidth='xs'>
      <h3>List Add</h3>
      <List>
        <ListItem id='list'>
          <Button
            color='secondary'
            variant='contained'
            style={{ marginRight: '1rem' }}
            className='Add' 
            onClick={() =>  handleChange('Item 1')}
          >

            Add
          </Button>
          Item 1
        </ListItem>
        <ListItem id='list'>
          <Button
            color='secondary'
            variant='contained'
            style={{ marginRight: '1rem' }}
            className='Add'
            onClick={() =>  handleChange('Item 2')}
          >
            Add
          </Button>
          Item 2
        </ListItem>
      </List>
      <TextField
        label='Add Item'
        name='addItem'
        value={text}
        onChange={setForm}
        margin='normal'
        variant='outlined'
        autoComplete='off'
        fullWidth
      />
      <div style={{ marginTop: '1rem' }}>
        <Button
          color='secondary'
          variant='contained'
          style={{ marginRight: '1rem' }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          color='primary'
          variant='contained'
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
      <h1> Your Item: {text}</h1>
    </Container>
  )
}
