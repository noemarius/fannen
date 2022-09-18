import { useState } from 'react'
import { DropdownDashStyle } from './DropdownDashStyles'

export function DropdownDash(props) {
    // Use States
    const [open, setOpen] = useState(false)

    // Render
    return (
        <>
            <DropdownDashStyle>
                <div
                    onClick={() => {
                        setOpen(!open)
                    }}
                    className="menuTrigger">
                    <p className="title">Select your theme!</p>
                </div>
                <div className={`dropdownMenu ${open ? 'active' : 'inactive'}`}>
                        <ul className="listContainer">{props.children}</ul>
                </div>
            </DropdownDashStyle>
        </>
    )
}
