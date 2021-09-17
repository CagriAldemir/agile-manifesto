import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classes from './login-modal.module.scss';
import { useTranslation } from 'react-i18next';
import InputWithValidation from '../input-with-validation';
import useMainContext from '../../common/contexts/main-context';
import isInputValid from '../input-with-validation/validations';
import {
  setLanguage,
  setUserInfo,
} from '../../common/contexts/main-context/main-actions';
import { LANGUAGE_KEYS } from '../../common/consts';

function LoginModal({ isVisible, closeModal }) {
  const { t: translate } = useTranslation();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [{ languageKey }, mainDispatch] = useMainContext();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    isVisible && resetForm();
  }, [isVisible]);

  const formData = [
    {
      titleKey: 'name',
      placeHolderKey: 'enterName',
      value: name,
      onChange: (e) => setName(e.target.value),
    },
    {
      titleKey: 'emailAddress',
      type: 'email',
      placeHolderKey: 'enterEmailAddress',
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
    {
      titleKey: 'password',
      type: 'password',
      placeHolderKey: 'enterPassword',
      value: password,
      onChange: (e) => setPassword(e.target.value),
    },
  ];

  const resetForm = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setPassword('');
  };

  const login = () => {
    setIsSubmitted(true);

    const isFormValid = formData.every(({ type, value }) =>
      isInputValid(type, value)
    );

    if (isFormValid) {
      const userInfo = {
        name,
        email,
        password,
      };
      mainDispatch(setUserInfo(userInfo));
      closeModal();
    }
  };

  const changeLanguage = (e) => {
    mainDispatch(setLanguage(e.target.value));
  };

  return (
    <Modal
      show={isVisible}
      onHide={closeModal}
      contentClassName={classes.modalContent}
    >
      <Modal.Header closeButton>
        <Modal.Title>{translate('memberLogin')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className={classes.loginForm}>
          {formData.map(
            ({ titleKey, type, placeHolderKey, value, onChange }) => (
              <InputWithValidation
                title={translate(titleKey)}
                type={type}
                placeHolder={translate(placeHolderKey)}
                value={value}
                onChange={onChange}
                showInformation={isSubmitted}
                key={titleKey}
              />
            )
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Form.Select
          value={languageKey}
          onChange={changeLanguage}
          className={classes.languageSelect}
        >
          {Object.values(LANGUAGE_KEYS).map((langKey) => (
            <option value={langKey} key={langKey}>
              {translate(`language-${langKey}`)}
            </option>
          ))}
        </Form.Select>
        <Button variant="secondary" onClick={closeModal}>
          {translate('close')}
        </Button>
        <Button variant="primary" onClick={login}>
          {translate('login')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;
