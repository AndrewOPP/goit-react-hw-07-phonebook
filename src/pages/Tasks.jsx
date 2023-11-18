// const mainStyle = {
//   margin-left: 70,
//   margin-top: 50,
// }

import { Contacts } from 'components/Contacts/Contacts';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { contactsFetch } from 'redux/contacts/operations';
import { StyledDiv } from './HomePage.styled';

function Tasks() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsFetch());
  }, [dispatch]);

  console.log('Rerendered');
  return (
    <StyledDiv style={{ justifyContent: 'flex-start' }}>
      <div>
        {' '}
        <Phonebook onClickAddContact />
      </div>

      <Contacts onDeleteContact />
    </StyledDiv>
  );
}

export default Tasks;
