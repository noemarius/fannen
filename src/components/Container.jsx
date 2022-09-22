import styled from 'styled-components'

const StyledContainer = styled.div`
    align-items: center;
    background-color: ${props => props.color || ''};
    display: flex;
    flex-direction: column;
    gap: ${props => props.gap || ''};
    margin: ${props => props.margin || '0px 0px'};
    width: 100%;
`

export function Container(props) {
    return (
        <StyledContainer color={props.color} gap={props.gap} margin={props.margin}>
            {props.children}
        </StyledContainer>
    )
}

// DONE
