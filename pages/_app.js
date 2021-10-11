import { Provider } from 'react-redux'
import { store } from '../redux/store'
import '../styles/globals.css'
import {Provider as AuthProvider} from 'next-auth/client'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </AuthProvider>
  )
}

export default MyApp
