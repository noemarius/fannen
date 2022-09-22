import styled from 'styled-components'
import { Dropdown } from './Dropdown/Dropdown'
import { DropdownItem } from './DropdownItem/DropdownItem'

const HeaderWrap = styled.div`
    align-items: center;
    background-color: #39b7ff;
    display: flex;
    min-height: 80px;
    justify-content: center;
    width: 100%;
`

export function Header() {
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
