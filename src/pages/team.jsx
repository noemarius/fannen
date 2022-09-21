import { Layout } from '@/components/Layouts/Layout'
import { Container } from '@/components/Container'
import { Member } from '@/components/Member'
import { Text } from '@/components/Text'
import { Title } from '@/components/Title'

export default function Team() {
    return (
        <>
            <Layout pageTitle="Meet The Team">
                <Container margin="28px 0px">
                    <Title title="Meet The Team" size="48px" />
                    <Member
                        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quam voluptatibus aliquid dolorum nemo quas a sed assumenda perferendis debitis."
                        image="/sample.jpeg"
                        height="220"
                        width="150"
                    />
                    <Text text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quam voluptatibus aliquid dolorum nemo quas a sed assumenda perferendis debitis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quam voluptatibus aliquid dolorum nemo quas a sed assumenda perferendis debitis." />
                    <Member
                        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quam voluptatibus aliquid dolorum nemo quas a sed assumenda perferendis debitis."
                        image="/sample.jpeg"
                        height="220"
                        width="150"
                        direction="row-reverse"
                    />
                    <Text text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quam voluptatibus aliquid dolorum nemo quas a sed assumenda perferendis debitis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quam voluptatibus aliquid dolorum nemo quas a sed assumenda perferendis debitis." />
                </Container>
            </Layout>
        </>
    )
}

// DONE