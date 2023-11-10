import { Phonebook } from './Phonebook';
import { Contacts } from './Contacts';
import css from './App.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { contactsFetch } from 'redux/operations';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsFetch());
  }, [dispatch]);

  return (
    <div className={css.mainDiv}>
      <Phonebook onClickAddContact />
      <Contacts onDeleteContact />
    </div>
  );
}
