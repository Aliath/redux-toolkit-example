import React from 'react';
import { Provider } from 'react-redux';
import { UserInfo } from 'components/UserInfo';
import { store } from 'store/root';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <UserInfo />
    </Provider>
  );
}

export default App;
