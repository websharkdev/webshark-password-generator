import type { AppProps } from 'next/app'

import MaineProvider from '@/providers/MaineProvider'

import styles from '@/styles/globals.sass'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MaineProvider>
    <Component {...pageProps} className={styles.Root} />
  </MaineProvider>
)

export default MyApp
