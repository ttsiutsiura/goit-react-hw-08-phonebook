import { ContactCatalog } from 'components/ContactCatalog/ContactCatalog';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Link, useLocation } from 'react-router-dom';

export function ContactView() {
  const location = useLocation();
  // const backLink = location.state?.from ?? '/';

  return (
    <>
      {/* <Link to={backLink}>Back</Link> */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: 20,
          marginTop: 60,
        }}
      >
        <ContactForm />
        <ContactCatalog />
      </div>
    </>
  );
}
