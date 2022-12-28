import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  padding: 0 0 50px 0;
  min-height: 100vh;
`;

export const HeaderContainer = styled.div`
  display: flex;
  padding: 30px 80px;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 540px) {
    padding: 15px 30px;
  }
`;

export const MenuIconContainer = styled.div`
  display: flex;
  cursor: pointer;

  @media (min-width: 541px) {
    display: none;
  }
`;

export const Title = styled.p`
  margin: 0;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  color: #f5df4d;
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;

  @media (max-width: 540px) {
    display: none;
  }
`;

export const LinkTitle = styled.p`
  margin: 0;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #f5df4d;
`;

export const ButtonsContainer = styled.div`
  display: flex;

  @media (max-width: 540px) {
    display: none;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  background-color: #f5df4d;
  border-radius: 16px;
  align-items: center;
  padding: 14px 24px;
  border: none;
  cursor: pointer;

  @media (max-width: 540px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ActionButtonText = styled.p`
  margin: 0;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #1a1a1a;
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  z-index: 1;
  background-color: #1a1a1a;
  width: 90%;
  left: 0;
  padding: 10px 20px;

  @media (min-width: 541px) {
    display: none;
  }
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
`;

export const CardContainer = styled.div`
  align-self: flex-end;
  width: 30%;
  margin: 20px 280px 0 0;

  @media (max-width: 540px) {
    width: 90%;
    margin: 30px auto 0 auto;
  }
`;

export const SignInCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 50px 40px;
`;

export const FormHeading = styled.p`
  margin: 0 0 30px 0;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 57px;
  color: #000000;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  margin: 0 0 10px 0;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

export const FormInput = styled.input`
  margin: 0;
  background: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  padding: 17px 20px;

  &:focus {
    outline: none;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #97999b;
  }
  :-ms-input-placeholder {
    color: #97999b;
  }
`;

export const CreateButton = styled.button`
  display: flex;
  background-color: #1a1a1a;
  border-radius: 16px;
  align-items: center;
  padding: 14px 24px;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-bottom: 20px;
  justify-content: center;
`;

export const CreateButtonText = styled.p`
  margin: 0;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;

export const GoogleButton = styled.button`
  display: flex;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  border-radius: 16px;
  align-items: center;
  padding: 14px 24px;
  cursor: pointer;
  width: 100%;
  justify-content: center;
`;

export const GoogleButtonText = styled.p`
  margin: 0;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

export const ErrorText = styled.p`
  margin: 10px 0 0 0;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #d36480;
`;

export const InfoText = styled.p`
  margin: 10px 0 0 0;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #97999b;
`;
