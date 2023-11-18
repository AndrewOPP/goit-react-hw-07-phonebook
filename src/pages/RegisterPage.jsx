import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { CustomButton, StyledDiv, StyledH1 } from './HomePage.styled';
import { StyledForm } from './Login.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledDiv>
      <StyledH1>Register</StyledH1>
      <StyledForm autoComplete="off" onSubmit={handleSubmit}>
        <label>
          Username
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <CustomButton type="submit">Register</CustomButton>
      </StyledForm>
    </StyledDiv>
  );
};

export default RegisterForm;
