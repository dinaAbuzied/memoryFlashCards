import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from "./reducers";
import middleware from "./middleware";
import FlashCards from './components/FlashCards';

const store = createStore(reducers, middleware);

export default function App() {
  return (
    <Provider store={store}>
      <FlashCards />
    </Provider>
  );
}
