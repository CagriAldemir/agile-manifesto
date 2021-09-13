import React from 'react';
import NotFoundImage from './components/not-found-image';
import classes from './not-found.module.scss';
import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t: translate } = useTranslation();

  return (
    <div className={classes.container}>
      <NotFoundImage className={classes.notFoundImage} />
      <h1>{translate('notFound')}</h1>
    </div>
  );
}

export default NotFound;
