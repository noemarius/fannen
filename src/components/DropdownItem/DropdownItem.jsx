import { DropdownItemWrap } from './DropdownItemStyles'
import Link from 'next/link'

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
