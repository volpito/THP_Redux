import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import PastasContainer from './Components/PastasContainer';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <PastasContainer />
      </div>
    </Provider>
  );
};



ReactDOM.render(<App />, document.querySelector("#root"));
