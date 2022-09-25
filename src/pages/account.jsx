import { Layout } from '@/components/Layout'
import { UserDetails } from '@/components/UserDetails'
import { AlignLeft } from '@/components/AlignLeft'
import { Card } from '@/components/Card'
import { ContentButton } from '@/components/ContentButton'
import { Text } from '@/components/Text'
import { useAuth } from '@/hooks/auth'

export default function Account() {
    const { login } = useAuth({
        middleware: 'auth',
        redirectIfAuthenticated: '/login',
    })
    return (
        <>
            <Layout pageTitle="Account">
                <UserDetails
                    image="/user.png"
                    link="/settings"
                    text="Edit Profile"
                    margin="20px 0px 12px 0px"
                />
                <AlignLeft>
                    <Text text="Content" />
                </AlignLeft>
                <Card margin="12px 0px">
                    <ContentButton
                        link="/test"
                        image="/heart.png"
                        text="Favorites"
                    />
                    <ContentButton
                        link="/create-event"
                        image="/heart.png"
                        text="Add an Event"
                    />
                    <ContentButton
                        link="/test"
                        image="/heart.png"
                        text="Something"
                    />
                </Card>
                <AlignLeft>
                    <Text text="Preferences"></Text>
                </AlignLeft>
                <Card margin="12px 0px">
                    <ContentButton
                        link="/test"
                        image="/language.png"
                        text="Language"
                    />
                    <ContentButton
                        link="/test"
                        image="/night-mode.png"
                        text="Dark Mode"
                    />
                </Card>
            </Layout>
        </>
    )
}

// DONE