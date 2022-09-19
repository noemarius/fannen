import { DropdownItemWrap } from './DropdownItemStyles'
import Link from 'next/link'

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

// Why does it not work with link tag
