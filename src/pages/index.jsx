import Image from 'next/image'
import { Layout } from '@/components/Layouts/Layout'
import { SearchBar } from '@/components/SearchBar'
import { Logo } from '@/components/Logo'
import { Container } from '@/components/Container'

export default function Home() {
    return (
        <>
            <Layout pageTitle="Home">
                <Container>
                    <Logo height="250" width="250" />
                    <SearchBar />
                </Container>
            </Layout>
        </>
    )
}

// DONE
