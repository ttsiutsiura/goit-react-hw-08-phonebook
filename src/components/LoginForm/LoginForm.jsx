import { FormEl } from 'components/ContactForm/Form.styled';
import { Label } from 'components/ContactForm/Form.styled';
import { Input } from 'components/ContactForm/Form.styled';
import { Button } from 'components/ContactForm/Form.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const emailInputId = nanoid();
const passwordInputId = nanoid();

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  const handleSubmit = evt => {};

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
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
        <Label htmlFor={emailInputId}>Name</Label>
        <Input
          type="text"
          name="email"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={email}
          onChange={handleChange}
          id={emailInputId}
        />
        <Label htmlFor={passwordInputId}>Password</Label>
        <Input
          type="email"
          name="email"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={email}
          onChange={handleChange}
          id={passwordInputId}
        />
        <Button type="submit">Log In</Button>
      </FormEl>
    </>
  );
}
