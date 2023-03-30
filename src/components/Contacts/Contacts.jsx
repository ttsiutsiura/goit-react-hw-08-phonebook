import { ContactList } from './Contacts.styled';
import { ContactsCaption } from './Contacts.styled';
import { Filter } from 'components/Filter/Filter';
import { ListItem } from './Contacts.styled';
import { DeleteButton } from 'components/Contacts/Contacts.styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export function Contacts({
  contacts,
  value,
  onChange,
  onDeleteContact,
}) {
  return (
    <>
      {<ContactsCaption>Contacts</ContactsCaption>}
      {<Filter value={value} onChange={onChange} />}
      {contacts.length === 0 && <p>No contacts.</p>}
      <ContactList>
        {contacts.map(contact => (
          <ListItem key={contact.id}>
            {contact.name}: {contact.number}
            <DeleteButton
              type="button"
              onClick={() => onDeleteContact(contact.id)}
              key={nanoid()}
            >
              Delete
            </DeleteButton>
          </ListItem>
        ))}
      </ContactList>
    </>
  );
}

Contacts.propTypes = {
  // contacts: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

