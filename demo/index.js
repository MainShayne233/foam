import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import DemoContainer from './Container';

const root = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <DemoContainer/>
  </AppContainer>,
  root
);

if (module.hot) {
  module.hot.accept('./Container', () => {
    ReactDOM.render(
      <AppContainer>
        <DemoContainer/>
      </AppContainer>,
      root
    );
  });
}
