import Image from 'next/image'

import { Card } from './Card'
import { Title } from './Title'
import { Text } from './Text'
import { LinkButton } from './LinkButton'

export function UserDetails(props) {
    return (
        <>
            <Card margin={props.margin}>
                <Image src={props.image} height={80} width={80} />
                <Title title={props.username} size={props.userSize}></Title>
                <Text text={props.email} size={props.emailSize}></Text>
                <LinkButton
                    link={props.link}
                    text={props.text}
                    size={props.size}
                />
            </Card>
        </>
    )
}

// DONE
