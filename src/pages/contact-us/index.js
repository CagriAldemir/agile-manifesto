import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { COUNTRY_LIST } from './consts';
import { useTranslation } from 'react-i18next';
import classes from './contact-us.module.scss';
import InputWithValidation from '../../components/input-with-validation';
import isInputValid from '../../components/input-with-validation/validations';
import useMainContext from '../../common/contexts/main-context';

function ContactUs() {
  const { t: translate } = useTranslation();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [{ languageKey, userInfo }] = useMainContext();

  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    if (userInfo) {
      const { name, email } = userInfo;
      setName(name);
      setEmail(email);
    } else {
      setName('');
      setEmail('');
    }
  }, [userInfo]);

  const getCountryLabel = ({ name }) => {
    return name[languageKey];
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setTitle('');
    setName('');
    setEmail('');
    setPhoneNumber('');
    setCountryCode([]);
    setText('');
  };

  const submit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const isFormValid = formData.every(({ type, value }) =>
      isInputValid(type, value)
    );

    if (isFormValid) {
      const data = {
        title,
        name,
        email,
        phoneNumber,
        countryCode: countryCode[0].id,
        text,
      };

      console.log(data);
      resetForm();

      window.alert('Check console');
    }
  };

  const formData = [
    {
      titleKey: 'title',
      placeHolderKey: 'enterTitle',
      value: title,
      onChange: (e) => setTitle(e.target.value),
    },
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
      titleKey: 'phoneNumber',
      type: 'tel',
      placeHolderKey: 'enterPhoneNumber',
      value: phoneNumber,
      onChange: (e) => setPhoneNumber(e.target.value),
    },
    {
      titleKey: 'country',
      type: 'typeahead',
      placeHolderKey: 'selectCountry',
      value: countryCode,
      onChange: setCountryCode,
      otherProps: {
        id: 'country-select',
        highlightOnlyResult: true,
        labelKey: getCountryLabel,
        options: COUNTRY_LIST,
      },
    },
    {
      titleKey: 'message',
      type: 'textarea',
      placeHolderKey: 'enterMessage',
      value: text,
      onChange: (e) => setText(e.target.value),
      otherProps: {
        as: 'textarea',
        rows: 5,
      },
    },
  ];

  return (
    <Form className={classes.contactUsForm}>
      {formData.map(
        ({ titleKey, type, placeHolderKey, value, onChange, otherProps }) => (
          <InputWithValidation
            title={translate(titleKey)}
            type={type}
            placeHolder={translate(placeHolderKey)}
            value={value}
            onChange={onChange}
            showInformation={isSubmitted}
            otherProps={otherProps}
            key={titleKey}
          />
        )
      )}

      <div className={classes.submitButtonContainer}>
        <Button variant="primary" type="submit" onClick={submit}>
          {translate('send')}
        </Button>
      </div>
    </Form>
  );
}

export default ContactUs;
