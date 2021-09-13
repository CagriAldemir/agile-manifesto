/* eslint-disable */
const validations = {
  text: {
    validationFunction: (value) => {
      return !!value;
    },
  },
  email: {
    validationFunction: (value) => {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    },
  },
  tel: {
    validationFunction: (value) => {
      return /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(
        value
      );
    },
  },
  typeahead: {
    validationFunction: (value) => {
      return Array.isArray(value) && value.length > 0;
    },
  },
  textarea: {
    validationFunction: (value) => {
      return !!value;
    },
  },
  password: {
    validationFunction: (value) => {
      return value && value.length >= 6;
    },
  },
};

const isInputValid = (type = 'text', value) => {
  return validations[type]?.validationFunction(value) || false;
};

export default isInputValid;
