import { FormEl } from 'components/ContactForm/Form.styled';
import { Label } from 'components/ContactForm/Form.styled';
import { Input } from 'components/ContactForm/Form.styled';
import { Button } from 'components/ContactForm/Form.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const emailInputId = nanoid();
const passwordInputId = nanoid();

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

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
        <Label htmlFor={emailInputId}>Email</Label>
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
          type="password"
          name="password"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={password}
          onChange={handleChange}
          id={passwordInputId}
        />
        <Button type="submit">Log In</Button>
      </FormEl>
    </>
  );
}
