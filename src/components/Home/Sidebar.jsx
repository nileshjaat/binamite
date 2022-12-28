import React, { useState } from 'react';
import {
  LogoContainer,
  LogoutContainer,
  MobileLogoutContainer,
  MobileSidebar,
  MobileSidebarContainer,
  SidebarContainer,
  TabContainer,
  TabName,
  TabsContainer,
} from './styledComponents';
import Logo from '../../assets/binamite-logo.png';
import Dashboard from '../../assets/dashboard.png';
import Invoices from '../../assets/invoices.png';
import PayoutMethods from '../../assets/payout-methods.png';
import Profile from '../../assets/profile.png';
import Settings from '../../assets/settings.png';
import Logout from '../../assets/logout.png';
import ClipLoader from 'react-spinners/ClipLoader';
import { axios } from '../../core';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate();

  const onLogout = async () => {
    setIsFetching(true);

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/auth/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      setIsFetching(false);
      navigate('/');
      localStorage.removeItem('user');
    } catch (error) {
      console.log('err', error);
    }
  };

  return (
    <SidebarContainer showSidebar={showSidebar}>
      <MobileSidebarContainer showSidebar={showSidebar}>
        <LogoContainer onClick={() => setShowSidebar(!showSidebar)}>
          <img src={Logo} alt="logo" />
        </LogoContainer>
        {showSidebar && (
          <MobileSidebar>
            <TabContainer>
              <img src={Dashboard} alt="dashboard" />
              <TabName>Dashboard</TabName>
            </TabContainer>
            <TabContainer>
              <img src={Invoices} alt="invoices" />
              <TabName>Invoices</TabName>
            </TabContainer>
            <TabContainer>
              <img src={PayoutMethods} alt="payout-methods" />
              <TabName>
                Payout <br /> Methods
              </TabName>
            </TabContainer>
            <TabContainer>
              <img src={Profile} alt="profile" />
              <TabName>Profile</TabName>
            </TabContainer>
            <TabContainer>
              <img src={Settings} alt="settings" />
              <TabName>Settings</TabName>
            </TabContainer>
          </MobileSidebar>
        )}
      </MobileSidebarContainer>

      <MobileLogoutContainer showSidebar={showSidebar}>
        {isFetching ? (
          <ClipLoader
            color="#f5df4d"
            loading={true}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <TabContainer
            style={{ marginBottom: '-10px', marginTop: '100px' }}
            onClick={onLogout}
          >
            <img src={Logout} alt="logout" />
            <TabName>Logout</TabName>
          </TabContainer>
        )}
      </MobileLogoutContainer>

      <TabsContainer>
        <TabContainer>
          <img src={Logo} alt="logo" />
        </TabContainer>
        <TabContainer>
          <img src={Dashboard} alt="dashboard" />
          <TabName>Dashboard</TabName>
        </TabContainer>
        <TabContainer>
          <img src={Invoices} alt="invoices" />
          <TabName>Invoices</TabName>
        </TabContainer>
        <TabContainer>
          <img src={PayoutMethods} alt="payout-methods" />
          <TabName>
            Payout <br /> Methods
          </TabName>
        </TabContainer>
        <TabContainer>
          <img src={Profile} alt="profile" />
          <TabName>Profile</TabName>
        </TabContainer>
        <TabContainer>
          <img src={Settings} alt="settings" />
          <TabName>Settings</TabName>
        </TabContainer>
      </TabsContainer>

      <LogoutContainer>
        {isFetching ? (
          <ClipLoader
            color="#f5df4d"
            loading={true}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <TabContainer
            style={{ marginBottom: '-10px', marginTop: '100px' }}
            onClick={onLogout}
          >
            <img src={Logout} alt="logout" />
            <TabName>Logout</TabName>
          </TabContainer>
        )}
      </LogoutContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
