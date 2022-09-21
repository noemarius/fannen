import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { Text } from './Text'


const ContentContainer = styled.div`
    display: flex;
    width: 100%;

    &:hover {
        // ask team if they want animations
    }
`

export const LeftContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 16px;
    width: 100%;
`

export function ContentButton(props) {
    return (
        <>
            <Link href={props.link}>
                <ContentContainer>
                    <LeftContainer>
                        <Image src={props.image} height={24} width={24} />
                        <Text text={props.text} size={props.size}/>
                    </LeftContainer>
                    <Image src="/next.png" height={24} width={24} />
                </ContentContainer>
            </Link>
        </>
    )
}

// DONE