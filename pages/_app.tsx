import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../store';

import AppContainer from '../containers/app.container';
import Navbar from '../containers/navbar.container';
import Footer from '../containers/footer.container';

import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </AppContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
