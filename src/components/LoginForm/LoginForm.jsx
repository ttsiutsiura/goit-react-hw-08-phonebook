import { FormEl } from 'components/Form/Form.styled';
import { Label } from 'components/Form/Form.styled';
import { Input } from 'components/Form/Form.styled';
import { Button } from 'components/Form/Form.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const emailInputId = nanoid();
const passwordInputId = nanoid();

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    <FormEl onSubmit={handleSubmit}>
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
      <Button type="submit">Register</Button>
    </FormEl>
  );
}
