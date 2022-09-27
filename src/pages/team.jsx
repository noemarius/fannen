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
                <Card paddingTablet="16px 200px">
                    <Container margin="28px 0px">
                        <Title title="Meet The Team" size="44px" />
                        <Member
                            text="Ricardo Lopes is responsible for our front end part of Fannen. He is 25 years old, has always been passionate about the web and got into development a couple of months ago. He used Next.js coupled with styled-components to render what you can see on the website."
                            image="/sample.jpeg"
                            height="220"
                            width="150"
                        />

                        <Member
                            text="Zakariya developed the backend part of the fannen.lu site with php and the Laravel framework. Passionate about code and the logic linked to it, Zakariya brought his meticulousness and his sense of logic to develop the database as well as the backend structure of this site."
                            image="/sample.jpeg"
                            height="220"
                            width="150"
                            direction="row-reverse"
                        />

                        <Member
                            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quam voluptatibus aliquid dolorum nemo quas a sed assumenda perferendis debitis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quam voluptatibus aliquid dolorum nemo quas a sed assumenda perferendis debitis."
                            image="/sample.jpeg"
                            height="220"
                            width="150"
                        />
                        <Member
                            text="Noé Marius, is a 32 year old tech enthousiast. He is a System Engineer recently turned fullstack developer, with almost a decade of experience in the IT field, he is managing the Fannen team and the app, he also works on the frontend, backend as well as the infrastructure to host and run the application."
                            image="/sample.jpeg"
                            height="220"
                            width="150"
                            direction="row-reverse"
                        />
                    </Container>
                </Card>
            </Layout>
        </>
    )
}

// DONE
