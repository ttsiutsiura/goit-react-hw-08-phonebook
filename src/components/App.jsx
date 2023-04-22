import { Wrapper } from './App.styled';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Caption } from './App.styled';

export function App() {
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
        <Form />
        <Contacts />
      </Wrapper>
    </div>
  );
}
