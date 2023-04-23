import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Label } from './Form.styled';
import { Input } from './Form.styled';
import { Button } from './Form.styled';
import { FormEl } from './Form.styled';
import { addContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { PhoneInputEnhanced } from './Form.styled';
import { isPossiblePhoneNumber } from 'react-phone-number-input';
import { PhoneInputContainer } from './Form.styled';
import { Warning } from './Form.styled';
import 'react-phone-number-input/style.css';

export function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    } else if (name.trim() === '' || number?.trim() === '') {
      alert("Enter the contact's name and phone number, please");
    } else if (!number) {
      alert("Enter the contact's name and phone number, please");
    } else if (!isPossiblePhoneNumber(number || '')) {
      alert('Enter a correct phone number, please');
      return;
    } else {
      dispatch(addContact(name, number));
    }

    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
    }
  };

  return (
    <FormEl onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>Name</Label>
      <Input
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
        placeholder={'Post Malone'}
        id={nameInputId}
      />
      <Label htmlFor={numberInputId}>Number</Label>
      <PhoneInputContainer>
        <PhoneInputEnhanced
          international
          placeholder="+1 408 476 2572"
          name="number"
          value={number}
          onChange={setNumber}
        />
        {!isPossiblePhoneNumber(number || '') &&
          number !== '' &&
          number !== undefined && <Warning>Impossible number.</Warning>}
      </PhoneInputContainer>
      <Button type="submit">Add contact</Button>
    </FormEl>
  );
}
