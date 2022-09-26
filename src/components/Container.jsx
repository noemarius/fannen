import styled from 'styled-components'


const StyledContainer = styled.div`
    align-items: ${props => props.align || 'center'};
    background-color: ${props => props.color || ''};
    display: flex;
    flex-direction: ${props => props.direction || "column"};
    gap: ${props => props.gap || ''};
    justify-content:center;
    margin: ${props => props.margin || '0px 0px'};
    padding: ${props => props.padding || ''};
    width: 100%;


`

export function Container(props) {
    return (
        <StyledContainer align={props.align} color={props.color} gap={props.gap} margin={props.margin} padding={props.padding}>
            {props.children}
        </StyledContainer>
    )
}

// DONE
