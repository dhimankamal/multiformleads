import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { List, ListItem } from '@material-ui/core'

export const ListAdd = ({ formData, setForm, navigation }) => {
  const {
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
    console.log(index)
    if( index === -1){
      setselectItem(selectItem.concat(n.name))
    }else{
      setselectItem(selectItem.filter(k => k !== n.name))
    }
 
  }
  

  console.log(selectItem)
  return (
    <Container maxWidth='xs'>
      <h3>List Add</h3>
      <List>
        {items.map(n => {
          return (
            <ListItem key={n.name} id='list'>
              <Button
                color='secondary'
                variant='contained'
                style={{ marginRight: '1rem' }}
                className='Add'
                onClick={() => handleChange(n)}
              >
                Add
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
      

     
    </Container>
  )
}
