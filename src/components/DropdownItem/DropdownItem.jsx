import Link from 'next/link'
import { DropdownItemWrap } from './DropdownItemStyles'

export function DropdownItem(props) {
    return (
        <>
            <DropdownItemWrap>
                <li>
                    <Link href={props.link}>{props.text}</Link>
                </li>
            </DropdownItemWrap>
        </>
    )
}

// Why does it not work with link tag
