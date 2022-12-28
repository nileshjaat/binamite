import React, { useState } from 'react';
import {
  ActionButton,
  ActionButtonText,
  ButtonsContainer,
  DropdownContainer,
  DropdownItem,
  HeaderContainer,
  LinksContainer,
  LinkTitle,
  MenuIconContainer,
  Title,
} from './styledComponents';
import DownArrow from '../../assets/down-arrow.png';
import RightArrow from '../../assets/right-arrow.png';
import Instagram from '../../assets/instagram.png';
import Facebook from '../../assets/facebook.png';
import Menu from '../../assets/hamburger.png';
import Close from '../../assets/close.png';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <HeaderContainer>
      <Title>Binamite</Title>
      <LinksContainer>
        <a
          href="https://binamite.com/pricing/"
          target="_blank"
          rel="noreferrer"
        >
          <LinksContainer>
            <LinkTitle>Pricing</LinkTitle>
          </LinksContainer>
        </a>
        <a href="https://binamite.com/" target="_blank" rel="noreferrer">
          <LinksContainer>
            <LinkTitle>Who it’s for</LinkTitle>
            <img
              src={DownArrow}
              alt="down-arrow"
              style={{ marginLeft: '7px' }}
            />
          </LinksContainer>
        </a>
        <a
          href="https://binamite.com/about-us/"
          target="_blank"
          rel="noreferrer"
        >
          <LinksContainer>
            <LinkTitle>Features</LinkTitle>
            <img
              src={DownArrow}
              alt="down-arrow"
              style={{ marginLeft: '7px' }}
            />
          </LinksContainer>
        </a>
        <a href="https://binamite.com/blogs/" target="_blank" rel="noreferrer">
          <LinksContainer>
            <LinkTitle>Blog</LinkTitle>
          </LinksContainer>
        </a>
        <a
          href="https://www.instagram.com/binamite/"
          target="_blank"
          rel="noreferrer"
        >
          <LinksContainer>
            <img
              src={Instagram}
              alt="instagram"
              style={{ marginLeft: '7px' }}
            />
          </LinksContainer>
        </a>
        <a
          href="https://twitter.com/TeamBinamite"
          target="_blank"
          rel="noreferrer"
        >
          <LinksContainer>
            <img src={Facebook} alt="facebook" style={{ marginLeft: '7px' }} />
          </LinksContainer>
        </a>
      </LinksContainer>

      <ButtonsContainer>
        <ActionButton style={{ marginRight: '30px' }}>
          <ActionButtonText>Sign Up Free</ActionButtonText>
        </ActionButton>
        <ActionButton>
          <ActionButtonText>Login</ActionButtonText>
          <img
            src={RightArrow}
            alt="right-arrow"
            style={{ marginLeft: '12px' }}
          />
        </ActionButton>
      </ButtonsContainer>

      {showDropdown && (
        <DropdownContainer>
          <a
            href="https://binamite.com/pricing/"
            target="_blank"
            rel="noreferrer"
            style={{ padding: '10px 20px' }}
          >
            <DropdownItem>
              <LinkTitle>Pricing</LinkTitle>
            </DropdownItem>
          </a>
          <a
            href="https://binamite.com/"
            target="_blank"
            rel="noreferrer"
            style={{ padding: '10px 20px' }}
          >
            <DropdownItem>
              <LinkTitle>Who it’s for</LinkTitle>
              <img
                src={DownArrow}
                alt="down-arrow"
                style={{ marginLeft: '7px' }}
              />
            </DropdownItem>
          </a>
          <a
            href="https://binamite.com/about-us/"
            target="_blank"
            rel="noreferrer"
            style={{ padding: '10px 20px' }}
          >
            <DropdownItem>
              <LinkTitle>Features</LinkTitle>
              <img
                src={DownArrow}
                alt="down-arrow"
                style={{ marginLeft: '7px' }}
              />
            </DropdownItem>
          </a>
          <a
            href="https://binamite.com/blogs/"
            target="_blank"
            rel="noreferrer"
            style={{ padding: '10px 20px' }}
          >
            <DropdownItem>
              <LinkTitle>Blog</LinkTitle>
            </DropdownItem>
          </a>

          <DropdownItem>
            <ActionButton>
              <ActionButtonText>Sign Up Free</ActionButtonText>
            </ActionButton>
          </DropdownItem>
          <DropdownItem>
            <ActionButton>
              <ActionButtonText>Login</ActionButtonText>
              <img
                src={RightArrow}
                alt="right-arrow"
                style={{ marginLeft: '12px' }}
              />
            </ActionButton>
          </DropdownItem>
        </DropdownContainer>
      )}

      {showDropdown ? (
        <MenuIconContainer onClick={() => setShowDropdown(false)}>
          <img src={Close} alt="close" style={{ margin: '-10px' }} />
        </MenuIconContainer>
      ) : (
        <MenuIconContainer onClick={() => setShowDropdown(true)}>
          <img src={Menu} alt="menu" />
        </MenuIconContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
