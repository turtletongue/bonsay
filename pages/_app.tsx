import { Provider } from 'react-redux';

import { store } from '../store';

import Navbar from '../containers/navbar.container';
import Footer from '../containers/footer.container';

import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className='min-h-screen'>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
