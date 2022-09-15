import styled from 'styled-components'
import Image from 'next/image'
import React, { useState } from 'react'
import { device } from './Responsiveness/Device'


export function Dropdown(props) {
    // Use States
    const [open, setOpen] = useState(false)

    // Styled Components
    const Container = styled.div`
    @media ${device.tablet} {
        display: none;
    }
    `

    const MenuTrigger = styled.div`
        background-color: white;
        border-radius: 50%;
        height: 40px;
        position: absolute;
        right: 20px;
        top: 20px;
        width: 40px;
    `

    const DropDownMenu = styled.div.attrs(() => ({
        className: `${open ? 'active' : 'inactive'}`,
    }))`
        position: absolute;
        top: 100px;
        right: 20px;
        background-color: white;
        border-radius: 12px;
        padding: 10px 20px;
        width: 200px;
    `

    // Render
    return (
        <>
            <Container>
                <MenuTrigger
                    onClick={() => {
                        setOpen(!open)
                    }}>
                    <Image
                        src={props.src}
                        width={props.width}
                        height={props.height}
                    />
                </MenuTrigger>
                <DropDownMenu>
                    <ul>{props.children}</ul>
                </DropDownMenu>
            </Container>

            {/* TODO Ask Jade why the transition doesn't work inside the styled component. */}
            <style jsx>{`
                .active {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(20px);
                    transition: 0.5s ease;
                }

                .inactive {
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(-20px);
                    transition: 0.5s ease;
                }
            `}</style>
        </>
    )
}
