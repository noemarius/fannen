import styled from 'styled-components'

const StyledCard = styled.div`
    align-items: center;
    background-color: white;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    margin: 20px 0px;
    padding: 16px 20px;
`

export function Card({ children }) {
    return (
        <>
            <StyledCard>{children}</StyledCard>
        </>
    )
}

// DONE