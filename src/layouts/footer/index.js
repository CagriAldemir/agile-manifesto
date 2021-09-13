import React from 'react';
import classes from './footer.module.scss';
import { useTranslation } from 'react-i18next';
import Form from 'react-bootstrap/Form';
import { THEMES } from '../../common/consts';
import useMainContext from '../../common/contexts/main-context';
import { setTheme } from '../../common/contexts/main-context/main-actions';
import { changeTheme } from '../../common/utils';

function Footer() {
  const { t: translate } = useTranslation();

  const [{ theme }, mainDispatch] = useMainContext();

  const onChangeTheme = (e) => {
    const selectedTheme = e.target.value;
    mainDispatch(setTheme(selectedTheme));
    changeTheme(selectedTheme);
  };

  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        <Form className={classes.themeRadioGroup}>
          <Form.Label className={classes.themeLabel}>
            {translate('theme')}:
          </Form.Label>
          {Object.values(THEMES).map((themeName) => (
            <Form.Check
              inline
              value={themeName}
              label={translate(`theme-${themeName}`)}
              type="radio"
              name="theme-radio-group"
              id={`${themeName}-option`}
              checked={theme === themeName}
              key={themeName}
              onChange={onChangeTheme}
            />
          ))}
        </Form>

        <a
          className={classes.footerText}
          target="_blank"
          rel="noopener noreferrer"
          href="https://cagrialdemir.com.tr"
        >
          {translate('footerText_siteName', { siteName: 'Çağrı Aldemir' })}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
