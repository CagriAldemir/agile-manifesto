import React, { useState } from 'react';
import classes from './header.module.scss';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import routing from '../../common/routing';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { LANGUAGE_KEYS } from '../../common/consts';
import useMainContext from '../../common/contexts/main-context';
import {
  setLanguage,
  setUserInfo,
} from '../../common/contexts/main-context/main-actions';
import { getCurrentPageNameKeyByPath } from '../../common/utils';
import LoginModal from '../../components/login-modal';

function Header() {
  const { t: translate, i18n } = useTranslation();
  const { pathname: pathName } = useLocation();
  const [{ languageKey, userInfo }, mainDispatch] = useMainContext();
  const [isLoginModalVisible, setLoginModalVisibility] = useState(false);

  const changeLanguageByKey = (langKey) => {
    i18n.changeLanguage(langKey);
    mainDispatch(setLanguage(langKey));
  };

  const logout = () => {
    mainDispatch(setUserInfo(null));
  };

  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              className={classes.companyLogo}
              src="/company-logo.svg"
              alt="company-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link>
                {translate(getCurrentPageNameKeyByPath(pathName))}
              </Nav.Link>
            </Nav>
            <Nav>
              {routing.map(
                ({ nameKey, path, showOnMenu }) =>
                  showOnMenu && (
                    <Nav.Link
                      as={Link}
                      to={path}
                      key={path}
                      active={pathName === path}
                    >
                      {translate(nameKey)}
                    </Nav.Link>
                  )
              )}

              <NavDropdown title={languageKey.toUpperCase()}>
                {Object.values(LANGUAGE_KEYS).map((langKey) => (
                  <NavDropdown.Item
                    onClick={() => changeLanguageByKey(langKey)}
                    key={langKey}
                  >
                    {translate(`language-${langKey}`)}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              {userInfo ? (
                <NavDropdown
                  title={translate('welcome_userName', {
                    userName: userInfo.name,
                  })}
                >
                  <NavDropdown.Item disabled>{userInfo.email}</NavDropdown.Item>
                  <NavDropdown.Item onClick={logout}>
                    {translate('logout')}
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link onClick={() => setLoginModalVisibility(true)}>
                  {translate('login')}
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal
        isVisible={isLoginModalVisible}
        closeModal={() => setLoginModalVisibility(false)}
      />
    </>
  );
}

export default Header;
