import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Wrapper } from './App.styled';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Caption } from './App.styled';
import PropTypes from 'prop-types';

const LS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedState = localStorage.getItem(LS_KEY);

    if (savedState) {
      this.setState({ contacts: JSON.parse(savedState) });
    }
  }

  componentDidUpdate(_, prevState) {
    const initialState = this.state.contacts;

    if (prevState.contacts !== initialState) {
      localStorage.setItem(LS_KEY, JSON.stringify(initialState));
    }
  }

  handleFormSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const { contacts } = this.state;

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
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
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
          <Form onSubmit={this.handleFormSubmit} />
          <Contacts
            contacts={visibleContacts}
            value={this.filter}
            onChange={this.changeFilter}
            onDeleteContact={this.deleteContact}
          />
        </Wrapper>
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
