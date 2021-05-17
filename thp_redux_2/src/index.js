import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import PastasContainerWithHook from './Components/PastasContainerWithHook';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <PastasContainerWithHook />
      </div>
    </Provider>
  );
};



ReactDOM.render(<App />, document.querySelector("#root"));
