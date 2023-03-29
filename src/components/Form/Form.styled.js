import styled from '@emotion/styled';

export const FormEl = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 12px;
  font-size: 30px;
  font-weight: 500;
`;

export const Input = styled.input`
padding: 6px;
  margin-bottom: 16px;
  font-size: 18px;
  border-radius: 6px;
  outline: none;
  width: 300px;
`;

export const Button = styled.button`
padding: 4px;
  max-width: 180px;
  font-size: 24px;
  border-color: black;
  border-radius: 6px;
  cursor: pointer;
  transition: box-shadow 100ms linear;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  :active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
