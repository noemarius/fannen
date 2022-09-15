import { GlobalStyle } from '../styles/globals'
import { Reset } from '../styles/reset'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Reset />
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
