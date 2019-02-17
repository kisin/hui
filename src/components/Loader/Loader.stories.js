import React from 'react';
import { storiesOf } from '@storybook/react';
import { Loader } from '../../index';

const style = {
  position: 'relative', 
  height: '100px', 
  border: '1px solid #ddd', 
  margin: '8px'
};

storiesOf('Loader', module)
  .add('default', () => (<Loader active />))
  .add('with text', () => (<Loader active>טוען נתונים</Loader>))
  .add('inline', () => (<Loader active inline />))
  .add('inverted', () => (
    <div style={{...style, backgroundColor: '#003f80'}}>
      <Loader active inverted />
    </div>
  ))
  .add('sizes', () => (
    <div>
      <div style={style}><Loader active size="small" /></div>
      <div style={style}><Loader active /></div>
      <div style={style}><Loader active size="large" /></div>
      <div style={style}><Loader active size="xlarge" /></div>
      <div style={style}><Loader active size="xxlarge" /></div>
    </div>
  ))