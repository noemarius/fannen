import { Dropdown } from '../Dropdown/Dropdown'
import { DropdownItem } from '../DropdownItem/DropdownItem'
import { HeaderWrap } from './HeaderStyles'

export function Header(props) {
    return (
        <>
            <HeaderWrap>
                <Dropdown>
                    <DropdownItem link="/" text="Home"></DropdownItem>
                    <DropdownItem
                        link="/dashboard"
                        text="Dashboard"></DropdownItem>
                    <DropdownItem link="/about" text="About"></DropdownItem>
                    <DropdownItem
                        link="/team"
                        text="Meet the Team"></DropdownItem>
                    <DropdownItem link="/account" text="Account"></DropdownItem>
                </Dropdown>
            </HeaderWrap>
        </>
    )
}
