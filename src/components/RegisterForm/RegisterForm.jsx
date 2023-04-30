import { FormEl } from 'components/ContactForm/Form.styled';
import { Label } from 'components/ContactForm/Form.styled';
import { Input } from 'components/ContactForm/Form.styled';
import { Button } from 'components/ContactForm/Form.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const userNameInputId = nanoid();
const emailInputId = nanoid();
const passwordInputId = nanoid();

export function RegisterForm() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  const handleSubmit = evt => {};

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setUserName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
    }
  };

  return (
    <>
      {/* <Link to={backLink}>Back</Link> */}
      <FormEl onSubmit={handleSubmit} style={{ marginTop: 60 }}>
        <Label htmlFor={userNameInputId}>Name</Label>
        <Input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={userName}
          onChange={handleChange}
          placeholder={'Mango'}
          id={userNameInputId}
        />
        <Label htmlFor={emailInputId}>Email</Label>
        <Input
          type="email"
          name="email"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={email}
          onChange={handleChange}
          placeholder={'mango@gmail.com'}
          id={emailInputId}
        />
        <Label htmlFor={passwordInputId}>Password</Label>
        <Input
          type="password"
          name="password"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={password}
          onChange={handleChange}
          // placeholder={'Post Malone'}
          id={passwordInputId}
        />
        <Button type="submit">Register</Button>
      </FormEl>
    </>
  );
}
