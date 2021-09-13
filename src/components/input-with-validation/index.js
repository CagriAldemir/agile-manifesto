import React from 'react';
import Form from 'react-bootstrap/Form';
import { Typeahead } from 'react-bootstrap-typeahead';
import classes from './input-with-validation.module.scss';
import classNames from 'classnames';
import isInputValid from './validations';

function InputWithValidation({
  title,
  type = 'text',
  placeHolder,
  value,
  onChange,
  otherProps = {},
  showInformation,
}) {
  const showSuccess = showInformation && isInputValid(type, value);
  const showError = showInformation && !isInputValid(type, value);

  return (
    <Form.Group>
      {title && (
        <Form.Label
          className={classNames({
            [classes.successColor]: showSuccess,
            [classes.errorColor]: showError,
          })}
        >
          {title}
        </Form.Label>
      )}
      {type === 'typeahead' ? (
        <Typeahead
          inputProps={{
            className: classNames({
              [classes.successBorder]: showSuccess,
              [classes.errorBorder]: showError,
            }),
          }}
          onChange={onChange}
          placeholder={placeHolder}
          selected={value}
          {...otherProps}
        />
      ) : (
        <Form.Control
          className={classNames({
            [classes.successBorder]: showSuccess,
            [classes.errorBorder]: showError,
          })}
          type={type}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          {...otherProps}
        />
      )}
    </Form.Group>
  );
}

export default InputWithValidation;
