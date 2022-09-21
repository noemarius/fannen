import styled from 'styled-components'

export const StyledText = styled.p`
    font-size: ${props => props.size || '16px'};
`

export function Text(props) {
    return (
        <>
            <StyledText size={props.size}>{props.text}</StyledText>
        </>
    )
}

// DONE