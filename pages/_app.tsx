import '../src/styles/style.scss'
import type { AppProps } from 'next/app'
import { UiProvider } from '../src/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UiProvider>
      <Component {...pageProps} />
    </UiProvider>
  )
}

export default MyApp
