import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteContact } from 'redux/operations';
import { filteredContactsSelector } from 'redux/selectors';
import { List, Item, Button } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(filteredContactsSelector);
  const dispatch = useDispatch();

  const handleDeleteContact = e => {
    const contactId = e.target.id;
    dispatch(deleteContact(contactId))
      .then(() => {
        toast.info(`The contact has been deleted!`);
      })
      .catch(error => {
        toast.error('Failed to delete contact.');
        console.error('Error deleting contact:', error);
      });
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
