import { DropdownItemWrap } from './DropdownItemStyles'

export function DropdownItem(props) {
    return (
        <>
            <DropdownItemWrap>
                <li>
                    <a href={props.link}>{props.text}</a>
                </li>
            </DropdownItemWrap>
        </>
    )
}
