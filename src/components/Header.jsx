import styled from 'styled-components'
import Image from 'next/image'
import { device } from './Device'
import { DropDownItem } from './DropDownItem'
import { Dropdown } from './Dropdown'

export function Header() {
    // Styled Components
    const Navbar = styled.div`
        align-items: center;
        background-color: black;
        color: black;
        display: flex;
        height: 80px;
        justify-content: space-between;
        padding-right: 12px;
        width: 100vw;
    `

    const Title = styled.a`
        color: white;
        display: none;
        text-decoration: none;
        font-size: 28px;
        &:hover {
            transform: scale(1.05);
        }

        @media ${device.tablet} {
            display: inline;
        }
    `

    // Render
    return (
        <>
            <Navbar>
                <Image src="/fannen.png" width={100} height={100} />
                <Title>Hello</Title>
                <Title>Hello</Title>
                <Title>Hello</Title>
                <Title>Hello</Title>
                <Dropdown src="/more.svg" height="40" width="40">
                    <DropDownItem link="/homepage" text="AAAAAA"></DropDownItem>
                    <DropDownItem link="/homepage" text="BBBBBB"></DropDownItem>
                    <DropDownItem link="/homepage" text="CCCCCC"></DropDownItem>
                </Dropdown>
            </Navbar>
        </>
    )
}
