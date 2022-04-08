/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import './localSwitchStile.css';

function IconSwitch({ icon, onSwitch }) {
  return (
    <header className="IconSwitch__header">
      <span
        className="material-icons"
        role="button"
        tabIndex={0}
        onClick={onSwitch}
      >
        {icon}
      </span>
    </header>

  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

export default IconSwitch;
