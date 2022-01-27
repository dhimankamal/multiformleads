import React, { useState } from 'react'
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

  const items = [
    {
      name: 'Item 1'
    },
    {
      name: 'Item 2'
    },
    {
      name: 'Item 3'
    },
    {
      name: 'Item 4'
    }
  ]
  const [selectItem, setselectItem] = useState([])

  function handleChange (n) {
    let index = selectItem.indexOf(n.name)

    if (index === -1) {
      setselectItem(selectItem.concat(n.name))
    } else {
      setselectItem(selectItem.filter(k => k !== n.name))
    }
  }

  function buttonOnChange (n) {
    if (selectItem.indexOf(n.name) === -1) {
      return 'Add'
    } else {
      return 'Remove'
    }
  }
 

  return (
    <Container maxWidth='xs'>
      <h3>List Add</h3>
      <List>
        {items.map(n => {
          return (
            <ListItem key={n.name} id='list'>
              <Button
                color={buttonOnChange(n) === 'Remove' ? 'secondary' : 'primary'}
                variant='contained'
                style={{ marginRight: '1rem' }}
                className='Add'
                onClick={() => handleChange(n)}
              >
                {buttonOnChange(n)}
              </Button>
              {n.name}
            </ListItem>
          )
        })}
      </List>

      <TextField
        label='Add Item'
        name='addItem'
        value={selectItem}
        onChange={setForm}
        margin='normal'
        variant='outlined'
        autoComplete='off'
        fullWidth
      />

      {/* {selectItem.map(k => {
        return (
          <TextField
            label='Add Item'
            name='addItem'
            value={k}
            onChange={setForm}
            margin='normal'
            variant='outlined'
            autoComplete='off'
            fullWidth
          />
        )
      })} */}

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
      <h1> Your Add Item: {addItem}</h1>
    </Container>
  )
}
