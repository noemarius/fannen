import styled from 'styled-components'

export const StyledText = styled.p`
    font-size: ${props => props.size || '16px'};
    text-align: justify;
    margin: ${props => props.margin || '0px 0px'};
    width: ${props => props.width || ''};
`

export function Text(props) {
    return (
        <>
            <StyledText
                margin={props.margin}
                size={props.size}
                width={props.width}>
                {props.text}
            </StyledText>
        </>
    )
}

// DONE
