import styled from 'styled-components'
import Button from './Button'
import { Dropdown } from './Dropdown'
import { DropdownItem } from './DropdownItem'
import { useAuth } from '@/hooks/auth'

const HeaderWrap = styled.div`
    align-items: center;
    background-color: #39b7ff;
    display: flex;
    min-height: 80px;
    justify-content: center;
    width: 100%;
`

export function Header() {
    const { user, logout } = useAuth()
    if (user) {
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
                        <DropdownItem
                            link="/account"
                            text="Account"></DropdownItem>
                        <Button onClick={logout}>logout</Button>
                    </Dropdown>
                </HeaderWrap>
            </>
        )
    } else {
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
                    </Dropdown>
                </HeaderWrap>
            </>
        )
    }
}
