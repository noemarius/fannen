import Head from 'next/head'
import styled from 'styled-components'
import { AppWrap } from '@/styles/appStyles'
import { Header } from './Header'
import { Footer } from './Footer'

const Content = styled.div`
    width: 90%;
    height: auto;
    flex: 1;
`
export function Layout({
    children,
    pageTitle = 'Fannen - Find everything you need!',
}) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
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
