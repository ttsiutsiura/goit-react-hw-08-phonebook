import styled from '@emotion/styled';

export const ContactList = styled.ul`
  max-height: 114px;
  overflow: auto;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  p {
    min-height: 38px;
    max-width: 430px;
  }
`;

export const ContactsCaption = styled.p`
  margin: 14px 0px;
  font-weight: 500;
`;

export const FilterCaption = styled.p`
  margin-bottom: 10px;
  font-size: 26px;
`;

export const DeleteButton = styled.button`
  padding: 2px;
  margin-left: auto;
  margin-right: 16px;
  width: 70px;
  font-size: 20px;
  border-color: black;
  border-radius: 6px;
  cursor: pointer;
  transition: box-shadow 100ms linear;
  z-index: 100;
 
  :active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;