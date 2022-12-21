import React from 'react';
import Header from './Header';
import SignInCard from './SignInCard';
import { CardContainer, Wrapper } from './styledComponents';

const SignIn = () => {
  return (
    <Wrapper>
      <Header />

      <CardContainer>
        <SignInCard />
      </CardContainer>
    </Wrapper>
  );
};

export default SignIn;
