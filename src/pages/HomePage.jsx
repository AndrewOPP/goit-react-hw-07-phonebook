import { StyledDiv, StyledH1 } from './HomePage.styled';

function HomePage() {
  return (
    <StyledDiv>
      <StyledH1>
        Contact manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </StyledH1>
    </StyledDiv>
  );
}

export default HomePage;
