import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { CustomButton, StyledDiv, StyledH1 } from './HomePage.styled';
import { StyledForm } from './Login.styled';

function Login() {
  const dispatch = useDispatch();

  const handlerSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledDiv>
      <StyledH1>Log In</StyledH1>
      <StyledForm autoComplete="off" onSubmit={handlerSubmit}>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <CustomButton type="submit">Log In</CustomButton>
      </StyledForm>
    </StyledDiv>
  );
}

export default Login;
