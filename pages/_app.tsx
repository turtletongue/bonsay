import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import AppContainer from '@containers/app.container';
import Navbar from '@containers/navbar.container';
import Footer from '@containers/footer.container';
import { store, persistor } from '@store/index';

import '@app/styles/globals.css';

const alertOptions = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE,
};

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {() => (
          <AlertProvider template={AlertTemplate} {...alertOptions}>
            <AppContainer>
              <Navbar />
              <Component {...pageProps} />
              <Footer />
            </AppContainer>
          </AlertProvider>
        )}
      </PersistGate>
    </Provider>
  );
}

export default App;
