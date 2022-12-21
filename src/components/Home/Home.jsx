import React from 'react';
import Profile from './Profile';
import Sidebar from './Sidebar';
import { Wrapper } from './styledComponents';

const Home = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Profile />
    </Wrapper>
  );
};

export default Home;
