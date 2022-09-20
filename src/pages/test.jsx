import { Layout } from '@/components/Layouts/Layout'
import {
    AlignLeft,
    Button,
    Card,
    ContentContainer,
    LeftContainer,
    Text,
    Text2,
    Title,
} from '@/styles/StyledComponents'
import Link from 'next/link'

import styled from 'styled-components'
import { ContentButton } from '@/components/ContentButton'
import { UserDetails } from '@/components/UserDetails'

export default function test() {
    return (
        <>
            <Layout>
                <UserDetails
                    image="/user.png"
                    username="Username"
                    email="email@here.com"
                />
                <AlignLeft>
                    <Text>Test</Text>
                </AlignLeft>
                <Card>
                    <ContentButton
                        link="/test"
                        image="/heart.png"
                        text="Favorites"
                    />
                    <ContentButton
                        link="/test"
                        image="/heart.png"
                        text="dsfag"
                    />
                    <ContentButton
                        link="/test"
                        image="/heart.png"
                        text="Favorites"
                    />
                    <ContentButton
                        link="/test"
                        image="/heart.png"
                        text="Favorites"
                    />
                    <ContentButton
                        link="/test"
                        image="/heart.png"
                        text="Favorites"
                    />
                    <ContentButton
                        link="/test"
                        image="/heart.png"
                        text="Favorites"
                    />
                    <ContentButton
                        link="/test"
                        image="/heart.png"
                        text="Favorites"
                    />
                </Card>
            </Layout>
            <style jsx>{`
                img {
                    height: 24px;
                    width: 24px;
                }
            `}</style>
        </>
    )
}
