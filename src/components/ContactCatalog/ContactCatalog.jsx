import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectVisibleContacts,
  selectContactsCount,
} from 'redux/contacts/selectors';
import { ContactList } from './ContactCatalog.styled';
import { Filter } from 'components/Filter/Filter';
import { ContactsCaption } from './ContactCatalog.styled';
import { ThreeDots } from 'react-loader-spinner';
import { ListItem } from './ContactCatalog.styled';
import { DeleteButton } from './ContactCatalog.styled';
import { nanoid } from 'nanoid';
import { deleteContact } from 'redux/contacts/operations';

export function ContactCatalog() {
  const dispatch = useDispatch();

  const isloading = useSelector(selectIsLoading);

  const visibleContacts = useSelector(selectVisibleContacts);
  const contactsCount = useSelector(selectContactsCount);

  return (
    <div style={{ width: 600 }}>
      {<ContactsCaption>Contacts: {contactsCount}</ContactsCaption>}
      {<Filter />}
      {visibleContacts.length === 0 && isloading === false && (
        <p>No contacts.</p>
      )}
      <ThreeDots
        height="34.5"
        width="34.5"
        radius="9"
        color="black"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={isloading}
      />
      {isloading === false && (
        <ContactList>
          {visibleContacts.map(contact => (
            <ListItem key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
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
      )}
    </div>
  );
}
