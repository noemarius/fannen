import styled from 'styled-components'

export function DropDownItem(props) {
    // Styled Components
    const Li = styled.li`
        &:hover {
            background-color: gray;
        }
    `
    const Link = styled.a`
        color: black;
    `

    // Render
    return (
        <>
            <Li>
                <Link href={props.link}>{props.text}</Link>
            </Li>
        </>
    )
}
