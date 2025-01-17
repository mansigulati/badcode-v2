import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout/Layout';
import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
