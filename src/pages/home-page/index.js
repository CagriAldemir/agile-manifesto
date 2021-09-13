import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './home-page.module.scss';

function HomePage() {
  const { t: translate } = useTranslation();

  return (
    <div className={classes.container}>
      <h1 className={classes.loremTitle}>{translate('loremTitle')}</h1>
      <p className={classes.loremText}>{translate('loremText')}</p>
    </div>
  );
}

export default HomePage;
