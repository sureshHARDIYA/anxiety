import React from 'react';
import PropTypes from 'prop-types';

const ThemeContext = React.createContext({
  colors: {
    primary: '#0097e7',
  },
});

const Theme = ({ children }) => (
  <ThemeContext.Provider value={{}}>
    {children}
  </ThemeContext.Provider>
);

Theme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default Theme;
