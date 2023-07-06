import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteContact } from 'redux/operations';
import { filteredContactsSelector } from 'redux/selectors';
import { List, Item, Button } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(filteredContactsSelector);

  const dispatch = useDispatch();

  const handleDeleteContact = e => {
    dispatch(deleteContact(e.target.id));
    toast.info(`The contact has been deleted!`);
    return;
  };

  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.phone}
          <Button type="button" id={contact.id} onClick={handleDeleteContact}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
