import { FilterCaption } from 'components/Contacts/Contacts.styled';
import { Input } from 'components/Form/Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { selectFilterValue } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  
  const filterValue = useSelector(selectFilterValue);

  return (
    <>
      <FilterCaption>Find contact by name:</FilterCaption>
      <Input
        type="text"
        value={filterValue}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      />
    </>
  );
};
