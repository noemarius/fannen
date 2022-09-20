import Image from 'next/image'
import { Title, Card, Text } from '@/styles/StyledComponents'

export function UserDetails(props) {
    return (
        <>
            <Card>
                <Image src={props.image} height={80} width={80} />
                <Title>{props.username}</Title>
                <Text>{props.email}</Text>
            </Card>
        </>
    )
}
