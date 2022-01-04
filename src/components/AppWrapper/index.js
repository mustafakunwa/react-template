import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import AppLocale from '../../i18n';

const AppWrapper = ({ children }) => {
  const { lang } = useSelector(({ common }) => common);
  const [currentAppLocale, setCurrentAppLocale] = useState(AppLocale[lang]);

  useEffect(() => {
    setCurrentAppLocale(AppLocale[lang]);
  }, [lang]);

  return (
    <IntlProvider locale={currentAppLocale?.locale} messages={currentAppLocale?.messages}>
      {children}
    </IntlProvider>
  );
};

AppWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default AppWrapper;
