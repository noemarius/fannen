import Image from 'next/image'
import styled from 'styled-components'
import { Text } from './Text'

const MemberContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    gap: 20px;
    justify-content: space-between;
    margin: 20px 0px;
`

export function Member(props) {
    return (
        <>
            <MemberContainer direction={props.direction}>
                <Text text={props.text} width="60%" />
                <Image
                    src={props.image}
                    height={props.height}
                    width={props.width}
                />
            </MemberContainer>
        </>
    )
}

// DONE