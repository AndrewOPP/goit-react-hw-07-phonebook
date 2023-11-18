import css from './Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContactPost } from 'redux/contacts/operations';
import { CustomButton } from 'pages/HomePage.styled';

export const Phonebook = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  // const token = useSelector(state => state.auth.token);
  const addToContacts = contact => {
    if (contacts.find(elem => elem.name === contact.name))
      return alert('Sorry, this contact is already added');
    dispatch(addContactPost(contact));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.phone.value;

    if (name && number) {
      addToContacts({
        name: name,
        number: number,
      });
      event.currentTarget.reset();
    }
  };

  return (
    <>
      <h2>Phonebook</h2>
      <form id="mainForm" onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input type="text" name="name" required />
        </label>

        <label>
          <span>Phone</span>
          <input type="tel" name="phone" required />
        </label>

        <CustomButton className={css.addButton} type="submit">
          Add contact
        </CustomButton>
      </form>
    </>
  );
};
