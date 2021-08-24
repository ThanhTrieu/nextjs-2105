import 'antd/dist/antd.css'
import '../styles/globals.css'
import { makeStore, wrapper } from '../src/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Skeleton } from 'antd'

function MyApp({ Component, pageProps }) {
  const store = makeStore();
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={<Skeleton active />} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default wrapper.withRedux(MyApp)
