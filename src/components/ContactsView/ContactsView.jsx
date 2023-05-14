import { ContactCatalog } from 'components/ContactCatalog/ContactCatalog';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Link, useLocation } from 'react-router-dom';

export function ContactView() {
  return (
    <div
      // style={{
      //   display: 'flex',
      //   justifyContent: 'space-around',
      //   alignItems: 'center',
      //   height: 400,
      // }}
    >
      <ContactForm />
      <ContactCatalog />
    </div>
  );
}
