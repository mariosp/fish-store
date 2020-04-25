import React from 'react';
import './App.css';
import Main from "./components/Main/Main";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

function App() {
  return (
      <Provider store={store} >
        <Main />
      </Provider>
  );
}

export default App;
