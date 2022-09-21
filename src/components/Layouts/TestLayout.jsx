import Head from 'next/head'
import styled from 'styled-components'
import { AppWrap } from '@/styles/appStyles'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { useAuth } from '@/hooks/auth'

const Content = styled.div`
    width: 90%;
    height: auto;
    flex: 1;
`
export function UserLayout({
    children,
    pageTitle = 'Fannen - Find everything you need!',
}) {
    const {  } = useAuth({ middleware: 'auth' })

    if (user) {
        return (
            <>
                <>
                    <Head>
                        <link
                            rel="preconnect"
                            href="https://fonts.googleapis.com"
                        />
                        <link
                            rel="preconnect"
                            href="https://fonts.gstatic.com"
                            crossorigin
                        />
                        <link
                            href="https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap"
                            rel="stylesheet"
                        />
                        <title>{pageTitle}</title>
                    </Head>
                    <AppWrap>
                        <HeaderUser />
                        <Content>{children}</Content>
                        <Footer />
                    </AppWrap>
                </>
            </>
        )
    } else {
        return (
            <>
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossorigin
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap"
                        rel="stylesheet"
                    />
                    <title>{pageTitle}</title>
                </Head>
                <AppWrap>
                    <Header />
                    <Content>{children}</Content>
                    <Footer />
                </AppWrap>
            </>
        )
    }
}
