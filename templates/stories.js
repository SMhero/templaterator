module.exports.create = function () {
  return (`
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

storiesOf('Component', module)
  .addDecorator(withKnobs)
  .add('state', () => (
    <div/>
  ));
`)
};
