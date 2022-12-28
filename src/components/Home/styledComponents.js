import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #f5f5f5;
  display: flex;
`;

export const SidebarContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 21px;

  @media (max-width: 540px) {
    background-color: ${(props) => (props.showSidebar ? '#ffffff' : '#f5f5f5')};
    z-index: 1;
  }
`;

export const MobileSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;

  @media (min-width: 541px) {
    display: none;
    background-color: #ffffff;
  }
`;

export const MobileSidebar = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 0px;
  height: 100%;
`;

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 540px) {
    display: none;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  cursor: pointer;
`;

export const LogoContainer = styled.div`
  display: flex;
  cursor: pointer;

  @media (min-width: 541px) {
    display: none;
  }
`;

export const MobileLogoutContainer = styled.div`
  display: ${(props) => (props.showSidebar ? 'flex' : 'none')};

  @media (min-width: 541px) {
    display: none;
  }
`;

export const LogoutContainer = styled.div`
  display: flex;

  @media (max-width: 540px) {
    display: none;
  }
`;

export const TabName = styled.p`
  margin: 10px 0 0 0;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #97999b;
  text-align: center;
`;

export const PageTitle = styled.p`
  margin: 32px 0 32px 40px;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  color: #1a1a1a;
`;

export const PageContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  z-index: ${(props) => (props.showSidebar ? 0 : 1)};
`;

export const ProfileContainer = styled.div`
  display: flex;
  gap: 40px;
  padding: 40px;
  justify-content: center;

  @media (max-width: 540px) {
    flex-direction: column;
    padding: 20px 0px 20px 40px;
    gap: 0px;
    margin-left: -110px;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 16px;
  width: 90%;
  margin-bottom: 40px;
  padding: 30px;

  @media (max-width: 540px) {
    width: 80%;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CardTitle = styled.p`
  margin: 0;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #1a1a1a;

  @media (max-width: 540px) {
    font-size: 18px;
  }
`;

export const ManageButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  background-color: #ffffff;
`;

export const ManageButtonText = styled.p`
  margin: 0;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #574ae2;
`;

export const ProfileContent = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: flex-start;

  @media (max-width: 540px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 540px) {
    margin-top: 20px;
    width: 100%;
  }
`;

export const ProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.p`
  margin: 0;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #97999b;
`;

export const Field = styled.p`
  margin: 5px 0 0 0;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #1a1a1a;
`;

export const InfoText = styled.p`
  margin: 0px 0 0 0;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #97999b;
`;

export const ErrorText = styled.p`
  margin: 0px 0 0 0;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #d36480;
`;

export const VerifyButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  background: #574ae2;
  border-radius: 12px;
  width: fit-content;
  padding: 6px 16px;
  margin-top: 10px;
`;

export const VerifyButtonText = styled.p`
  margin: 0;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
`;

export const EditModalWrapper = styled.div`
  z-index: 1000;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  height: 100vh;
  width: 25%;
  background-color: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
  padding: 20px 30px;

  @media (max-width: 540px) {
    width: 70%;
  }
`;

export const ModalInfoText = styled.p`
  margin: 10px 0 20px 0;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #97999b;
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const UpdateButton = styled.button`
  display: flex;
  background-color: #1a1a1a;
  border-radius: 20px;
  align-items: center;
  padding: 14px 24px;
  border: none;
  cursor: pointer;
  justify-content: center;
`;

export const UpdateButtonText = styled.p`
  margin: 0;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;

export const CancelButton = styled.button`
  display: flex;
  background-color: #f5f5f5;
  border-radius: 20px;
  align-items: center;
  padding: 14px 24px;
  border: none;
  cursor: pointer;
  justify-content: center;
  margin-left: 10px;
`;

export const CancelButtonText = styled.p`
  margin: 0;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #97999b;
`;
