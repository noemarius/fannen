import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { Member } from '@/components/Member'
import { Text } from '@/components/Text'
import { Title } from '@/components/Title'
import { Card } from '@/components/Card'

export default function Team() {
    return (
        <>
            <Layout pageTitle="Meet The Team">
                <Card>
                    <Container margin="28px 0px">
                        <Title title="Meet The Team" size="48px" />
                        <Member
                            text="Ricardo Lopes"
                            image="/sample.jpeg"
                            height="220"
                            width="150"
                        />
                        <Text text="Ricardo Lopes is responsible for our front end part of Fannen. He is 25 years old, has always been passionate about the web and got into development a couple of months ago. He used Next.js coupled with styled-components to render what you can see on the website." />

                        <Member
                            text="Zakariya"
                            image="/sample.jpeg"
                            height="220"
                            width="150"
                            direction="row-reverse"
                        />
                        <Text text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quam voluptatibus aliquid dolorum nemo quas a sed assumenda perferendis debitis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quam voluptatibus aliquid dolorum nemo quas a sed assumenda perferendis debitis." />
                        <Member
                            text="Sophia"
                            image="/sample.jpeg"
                            height="220"
                            width="150"
                            direction="row-reverse"
                        />
                        <Text text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quam voluptatibus aliquid dolorum nemo quas a sed assumenda perferendis debitis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quam voluptatibus aliquid dolorum nemo quas a sed assumenda perferendis debitis." />
                        <Member
                            text="Noé Marius"
                            image="/sample.jpeg"
                            height="220"
                            width="150"
                            direction="row-reverse"
                        />
                        <Text text="Noé Marius, is a 32 year old tech enthousiast. He is a System Engineer recently turned fullstack developer, with almost a decade of experience in the IT field, he is managing the Fannen team and the app, he also works on the frontend, backend as well as the infrastructure to host and run the application." />
                    </Container>
                </Card>
            </Layout>
        </>
    )
}

// DONE
