import Image from 'next/image'
import { Dropdown } from '../Dropdown/Dropdown'
import { DropdownItem } from '../DropdownItem/DropdownItem'
import { HeaderWrap } from './HeaderStyles'

export function Header(props) {
    return (
        <>
            <HeaderWrap>
                <Image
                    id="logo"
                    src="/fannen.png"
                    width={80}
                    height={80}></Image>
                <Dropdown>
                    <DropdownItem link="/home" text="Test"></DropdownItem>
                    <DropdownItem link="/home" text="tEst"></DropdownItem>
                    <DropdownItem link="/home" text="teSt"></DropdownItem>
                    <DropdownItem link="/home" text="tesT"></DropdownItem>
                </Dropdown>
            </HeaderWrap>
        </>
    )
}
