import { FormEl } from 'components/Form/Form.styled';
import { Label } from 'components/Form/Form.styled';
import { Input } from 'components/Form/Form.styled';
import { Button } from 'components/Form/Form.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const userNameInputId = nanoid();
const emailInputId = nanoid();
const passwordInputId = nanoid();

export function RegisterForm() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    <FormEl onSubmit={handleSubmit}>
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
      <Button type="submit">Sign up</Button>
    </FormEl>
  );
}
