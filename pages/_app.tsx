import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../store';

import Navbar from '../containers/navbar.container';
import Footer from '../containers/footer.container';

import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className='min-h-screen'>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
