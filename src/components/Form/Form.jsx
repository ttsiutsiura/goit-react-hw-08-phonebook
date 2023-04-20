import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Label } from './Form.styled';
import { Input } from './Form.styled';
import { Button } from './Form.styled';
import { FormEl } from './Form.styled';
import { addContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const dispathch = useDispatch();

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
    } else if (name.trim() === '' || number.trim() === '') {
      alert("Enter the contact's name and number phone!");
    } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
      alert('Enter the correct number phone! Format: 123-45-67.');
    } else {
      dispathch(addContact(name, number));
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
        id={nameInputId}
      />
      <Label htmlFor={numberInputId}>Number</Label>
      <Input
        type="tel"
        name="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
        id={numberInputId}
      />
      <Button type="submit">Add contact</Button>
    </FormEl>
  );
}
