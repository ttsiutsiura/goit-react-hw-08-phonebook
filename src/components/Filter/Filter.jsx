import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/filter/selectors';
import { FilterCaption } from 'components/ContactCatalog/ContactCatalog.styled';
import { Input } from 'components/ContactForm/Form.styled';
import { changeFilter } from 'redux/filter/filterSlice';

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
