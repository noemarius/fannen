import Image from 'next/image'
import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { Title } from '@/components/Title'
import { Text } from '@/components/Text'
import { Card } from '@/components/Card'
import Link from 'next/link'

export default function About() {
    return (
        <>
            <Layout pageTitle="About">
                <Card>
                    <Container margin="28px 0px 0px 0px">
                        <Title title="About" size="48px" />
                        <Text
                            text="With Fannen.lu we hope to offer a Luxembourg based location aggregator grouped by industry sectors. We hope to become the go-to website to visually locate related places (i.e.: buildings, events...). Furthermore we would like to allow users to customise their experience and interact with other users through the use of reviews/comments.
                            Built with Laravel for the Back-end and NextJS for the front-end.We are using the Breeze package to manage the authentication."
                            margin="32px 0px 0px 0px"
                        />
                        <a
                            href="https://github.com/noemarius/fannen"
                            style={{ fontSize: '1.5rem', padding: '2rem' }}>
                            The Github Repository
                        </a>
                        <Image src="/fannen.png" height={300} width={300} />
                    </Container>
                </Card>
            </Layout>
        </>
    )
}

// DONE
