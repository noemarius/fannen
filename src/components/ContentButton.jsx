import Image from 'next/image'
import Link from 'next/link'
import {
    ContentContainer,
    LeftContainer,
    Text,
} from '@/styles/StyledComponents'

export function ContentButton(props) {
    return (
        <>
            <Link href={props.link}>
                <ContentContainer>
                    <LeftContainer>
                        <Image src={props.image} height={24} width={24} />
                        <Text>{props.text}</Text>
                    </LeftContainer>
                    <Image src="/next.png" height={24} width={24} />
                </ContentContainer>
            </Link>
        </>
    )
}
