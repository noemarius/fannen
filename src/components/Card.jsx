import styled from 'styled-components'

export function Card(props, {children}) {
    const Card = styled.div`
        align-items: center;
        background-color: white;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        margin-top: 20px;
        padding: 16px 16px;
        width: 100%;
    `

    return <>
        <Card>{children}</Card>
    </>
}
