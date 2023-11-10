import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContactPost } from 'redux/operations';

export const Phonebook = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const addToContacts = contact => {
    if (contacts.find(elem => elem.name === contact.name))
      return alert('Sorry, this contact is already added');
    dispatch(addContactPost(contact));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.phone.value;
    document.getElementById('mainForm').reset();

    if (name && number) {
      addToContacts({
        name: name,
        phone: number,
        id: nanoid(),
      });
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

        <button className={css.addButton} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};
