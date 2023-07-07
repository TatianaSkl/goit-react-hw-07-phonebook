import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact } from 'redux/operations';

import { Form, LabelForm, InputForm, ButtonForm } from './ContactForm.styled';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.number.value;
    const isExist = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (isExist) {
      toast.warn(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, phone }))
      .then(() => {
        toast.success(`${name} is added to the contact list!`);
        form.reset();
      })
      .catch(error => {
        toast.error(`Failed to add contact ${name}.`);
        console.error('Error adding contact:', error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <LabelForm htmlFor="name">Name</LabelForm>
      <InputForm
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+((['\s][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <LabelForm htmlFor="number">Number</LabelForm>
      <InputForm
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <ButtonForm type="submit">Add contact</ButtonForm>
    </Form>
  );
};
