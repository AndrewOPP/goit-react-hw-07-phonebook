// const mainStyle = {
//   margin-left: 70,
//   margin-top: 50,
// }

import { Contacts } from 'components/Contacts';
import { Phonebook } from 'components/Phonebook';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { contactsFetch } from 'redux/operations';

function Tasks() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsFetch());
  }, [dispatch]);

  return (
    <div>
      <Phonebook onClickAddContact />
      <Contacts onDeleteContact />
    </div>
  );
}

export default Tasks;
