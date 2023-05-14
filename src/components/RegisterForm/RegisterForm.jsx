import { FormEl } from 'components/ContactForm/Form.styled';
import { Label } from 'components/ContactForm/Form.styled';
import { Input } from 'components/ContactForm/Form.styled';
import { Button } from 'components/ContactForm/Form.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const userNameInputId = nanoid();
const emailInputId = nanoid();
const passwordInputId = nanoid();

export function RegisterForm() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

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
      <FormEl onSubmit={handleSubmit} style={{ marginTop: 60 }}>
        <Label htmlFor={userNameInputId}>Name</Label>
        <Input
          autoComplete="off"
          type="text"
          name="name"
          required
          value={userName}
          onChange={handleChange}
          id={userNameInputId}
        />
        <Label htmlFor={emailInputId}>Email</Label>
        <Input
          autoComplete="off"
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
          id={emailInputId}
        />
        <Label htmlFor={passwordInputId}>Password</Label>
        <Input
          autoComplete='off'
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
          id={passwordInputId}
        />
        <Button type="submit">Register</Button>
      </FormEl>
    </>
  );
}
