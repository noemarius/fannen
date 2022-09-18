import Image from 'next/image'
import { Dropdown } from '../Dropdown/Dropdown'
import { DropdownItem } from '../DropdownItem/DropdownItem'
import { HeaderWrap } from './HeaderStyles'

export function Header(props) {
    return (
        <>
            <HeaderWrap>
                <Dropdown>
                    <DropdownItem link="/home" text="Home"></DropdownItem>
                    <DropdownItem
                        link="/dashboard"
                        text="Dashboard"></DropdownItem>
                    <DropdownItem link="/about" text="About"></DropdownItem>
                    <DropdownItem
                        link="/team"
                        text="Meet the Team"></DropdownItem>
                    <DropdownItem link="/login" text="Login"></DropdownItem>
                    <DropdownItem
                        link="/register"
                        text="Register"></DropdownItem>
                    <DropdownItem link="/account" text="Account"></DropdownItem>
                </Dropdown>
            </HeaderWrap>
        </>
    )
}
