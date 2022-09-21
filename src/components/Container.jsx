import styled from 'styled-components'

const StyledContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: ${props => props.margin || '0px 0px'};
    width: 100%;
`

export function Container(props) {
    return (
        <StyledContainer margin={props.margin}>
            {props.children}
        </StyledContainer>
    )
}

// DONE
