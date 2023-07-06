import { useDispatch } from 'react-redux';
import { getFilterContacts } from 'redux/filterSlice';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(getFilterContacts(e.target.value));
  };

  return (
    <>
      <Label htmlFor="query">Find contacts by name</Label>
      <Input type="text" name="query" placeholder="Search..." onChange={handleFilterChange} />
    </>
  );
};
