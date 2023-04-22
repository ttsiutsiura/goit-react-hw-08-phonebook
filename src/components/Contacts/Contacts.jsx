import { nanoid } from 'nanoid';
import { ContactList } from './Contacts.styled';
import { ContactsCaption } from './Contacts.styled';
import { Filter } from 'components/Filter/Filter';
import { ListItem } from './Contacts.styled';
import { DeleteButton } from 'components/Contacts/Contacts.styled';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';

export function Contacts() {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);

  const getVisibleContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      {<ContactsCaption>Contacts</ContactsCaption>}
      {<Filter />}
      {visibleContacts.length === 0 && <p>No contacts.</p>}
      <ContactList>
        {visibleContacts.map(contact => (
          <ListItem key={contact.id}>
            {contact.name}: {contact.number}
            <DeleteButton
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
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
