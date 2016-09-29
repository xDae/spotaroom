import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Button from './../Components/Button';
// import Welcome from './Welcome';

storiesOf('Button', module)
  .add('Primary Button', () => (
    <Button type="primary" text="More details" />
  ))
  .add('Secondary Button', () => (
    <Button type="secondary" text="More details" />
  ));
