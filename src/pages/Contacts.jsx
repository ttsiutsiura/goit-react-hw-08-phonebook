import { ContactView } from 'components/ContactsView/ContactsView';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();
  const IsRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!IsRefreshing) {
    return <ContactView />;
  } else {
    return <p>Refreshing user...</p>;
  }
}
