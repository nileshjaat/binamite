import React from 'react';
import {
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

const Sidebar = () => {
  return (
    <SidebarContainer>
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

      <TabContainer style={{ marginBottom: '-10px', marginTop: '100px' }}>
        <img src={Logout} alt="logout" />
        <TabName>Logout</TabName>
      </TabContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
