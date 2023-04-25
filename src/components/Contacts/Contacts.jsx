import { nanoid } from 'nanoid';
import { ContactList } from './Contacts.styled';
import { ContactsCaption } from './Contacts.styled';
import { Filter } from 'components/Filter/Filter';
import { ListItem } from './Contacts.styled';
import { DeleteButton } from 'components/Contacts/Contacts.styled';
import { deleteContact } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterValue, getIsLoading } from 'redux/selectors';
import { ThreeDots } from 'react-loader-spinner';

export function Contacts() {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const isloading = useSelector(getIsLoading);

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
      )}
    </>
  );
}
