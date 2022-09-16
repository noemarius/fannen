import { useState } from 'react'
import Image from 'next/image'
import { DropdownStyle } from './DropdownStyles'

export function Dropdown(props) {
    // Use States
    const [open, setOpen] = useState(false)

    // Render
    return (
        <>
            <DropdownStyle>
                <div
                    onClick={() => {
                        setOpen(!open)
                    }}
                    className="menuTrigger">
                    <Image src="/more.png" height={40} width={40}></Image>
                </div>
                <div className={`dropdownMenu ${open ? 'active' : 'inactive'}`}>
                    <ul className="listContainer">{props.children}</ul>
                </div>
            </DropdownStyle>
        </>
    )
}
