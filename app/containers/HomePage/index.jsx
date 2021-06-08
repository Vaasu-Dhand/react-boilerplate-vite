/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function HomePage() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
      <h2>Welcome to my app!</h2>
      <h3>Some more text</h3>
      <h4>Another Heading</h4>
      <h5>Think it works</h5>
    </div>
  );
}
