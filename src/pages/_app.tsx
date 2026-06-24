import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {memo, type ReactNode} from 'react';

const MyApp = memo(({Component, pageProps}: AppProps): ReactNode => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
