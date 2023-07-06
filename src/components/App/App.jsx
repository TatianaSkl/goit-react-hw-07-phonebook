import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import {
  Container,
  Section,
  ContactForm,
  ContactList,
  Filter,
  Heading,
  Loader,
  Error,
} from 'components';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ToastContainer autoClose={2500} />
      {isLoading && <Loader />}
      {error ? (
        <Error textAlign="center">Smth went wrong... </Error>
      ) : (
        <>
          <Section>
            <Heading>Phonebook</Heading>
            <ContactForm />
          </Section>
          <Section>
            <Heading>Contacts</Heading>
            <Filter />
            <ContactList />
          </Section>
        </>
      )}
    </Container>
  );
};
