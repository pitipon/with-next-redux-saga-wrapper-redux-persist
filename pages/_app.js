import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { wrapper } from '../redux/store';
import Layout from '../components/_App/Layout';

const App = ({ Component, pageProps }) => {


    const store = useStore((state) => state);
    return process.browser ? (
        <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </PersistGate>
    ) : (
        <PersistGate persistor={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </PersistGate>
    );
}

export default wrapper.withRedux(App);