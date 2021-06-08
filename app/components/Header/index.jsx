/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Header() {
  return (
    <div
      style={{ backgroundColor: 'grey', padding: '20px', textAlign: 'center' }}
    >
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Header.propTypes = {};

export default memo(Header);
