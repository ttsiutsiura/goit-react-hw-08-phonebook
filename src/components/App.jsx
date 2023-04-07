import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { Wrapper } from './App.styled';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Caption } from './App.styled';
import PropTypes from 'prop-types';

const LS_KEY = 'contacts';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LS_KEY)) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleFormSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

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
      setContacts([...contacts, contact]);
    }
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <Wrapper>
        <Caption>Phonebook</Caption>
        <Form onSubmit={handleFormSubmit} />
        <Contacts
          contacts={visibleContacts}
          value={filter}
          onChange={changeFilter}
          onDeleteContact={deleteContact}
        />
      </Wrapper>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
