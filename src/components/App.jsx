// import { Wrapper } from 'components/App.styled';
// import { Form } from 'components/Form/Form';
// import { Contacts } from 'components/Contacts/Contacts';
// import { Caption } from 'components/App.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Register } from './pages/Register';
import { Welcome } from './pages/Welcome';
import { Login } from './pages/Login';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      {/* <Wrapper>
        <Caption>Phonebook</Caption>
        <Form />
        <Contacts />
      </Wrapper> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};
