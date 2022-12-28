import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import Sidebar from './Sidebar';
import { Wrapper } from './styledComponents';
import { useNavigate } from 'react-router-dom';
import { axios } from '../../core';
import ClipLoader from 'react-spinners/ClipLoader';

const Home = () => {
  const navigate = useNavigate();
  const [isFetching, setIsFetching] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [details, setDetails] = useState([]);

  const getUserDetails = async () => {
    setIsFetching(true);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/auth/user`,
        {},
        {
          withCredentials: true,
        }
      );
      setDetails(data);
      setIsFetching(false);
    } catch (error) {
      console.log('err', error);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user?.msg !== 'Logged in successfully') {
      navigate('/');
    } else {
      getUserDetails();
    }
  }, []);

  return (
    <Wrapper>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      {isFetching ? (
        <div style={{ margin: '300px auto' }}>
          <ClipLoader
            color="#f5df4d"
            loading={true}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <Profile
          details={details}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      )}
    </Wrapper>
  );
};

export default Home;
