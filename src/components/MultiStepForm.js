import React from 'react'
import { useForm, useStep } from 'react-hooks-helper'
import { Names } from './stepForm/Names'
import { Address } from './stepForm/Address'
import { Contact } from './stepForm/Contact'
import { ListAdd } from './stepForm/ListAdd'
import { Review } from './stepForm/Review'
import { Submit } from './stepForm/Submit'

let defaultData = {
  firstName: '',
  lastName: '',
  nickName: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  phone: '',
  email: '',
  addItem: []
}

const steps = [
  
  { id: 'names' },
  { id: 'address' },
  { id: 'contact' },
  { id: 'listadd' },
  { id: 'review' },
  { id: 'submit' }
]

export const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData)
  const { step, navigation } = useStep({
    steps,
    initialStep: 0
  })

  const props = { formData, setForm, navigation }

  switch (step.id) {
    case 'names':
      return <Names {...props} />
    case 'address':
      return <Address {...props} />
    case 'contact':
      return <Contact {...props} />
    case 'listadd':
      return <ListAdd {...props} />
    case 'review':
      return <Review {...props} />
    case 'submit':
      return <Submit {...props} />
  }

  return (
    <div>
      <h1>Multi step form</h1>
    </div>
  )
}
