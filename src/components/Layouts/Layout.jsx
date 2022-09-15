import Head from 'next/head'
import { Footer } from '../Footer'
import { Header } from '../Header'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Content = styled.div`
    width: 80%;
    min-height: 86.5vh;
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
            <Container>
                <Header />
                <Content>{children}</Content>
                <Footer />
            </Container>
        </>
    )
}
