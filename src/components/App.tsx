import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux/configureStore";


import SplashPage from './splash_page/SplashPage';

import "./App.scss";

export const store = configureStore();

const App = () => {
  return (
    <div className="App">
      I am here.
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SplashPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
