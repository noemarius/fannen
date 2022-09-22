import Link from 'next/link'
import styled from 'styled-components'
import { Text } from './Text'

const StyledButton = styled.div`
    align-items: center;
    background-color: #39b7ff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    height: 32px;
    justify-content: center;
    margin-top: 8px;
    width: 120px;

    :hover {
        transform: scale(1.05);
    }
`

export function LinkButton(props) {
    return (
        <>
            <Link href={props.link}>
                <StyledButton>
                    <Text size={props.size} text={props.text} />
                </StyledButton>
            </Link>
        </>
    )
}

// DONE
