import Head from 'next/head'
import styled from 'styled-components'
import { AppWrap } from '@/styles/appStyles'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'

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
