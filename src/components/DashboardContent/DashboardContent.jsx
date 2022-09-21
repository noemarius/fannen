import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { DropdownDash } from '@/components/DropdownDash/DropdownDash'
import { DropdownItem } from '@/components/DropdownItem/DropdownItem'
import Category from './Category'
import Map from './Map'
/* import Test from './test' */

// Styled components
const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 12px;
    width: 100%;
    .test {
        border-radius: 20px;
        box-shadow: #fff 0px 3px 8px;
        background-color: white;
        width: 100%;
        color: black;
    }
`

export function DashboardContent() {
    const [sharedState, setSharedState] = useState({})
    const [sharedCenterState, setSharedCenterState] = useState({})
    /* useEffect(() => console.log(sharedState), [sharedState]) */
    /* useEffect(() => console.log(sharedCenterState), [sharedCenterState]) */
    return (
        <>
            <Container>
                <Map
                    sharedState={sharedState}
                    sharedCenterState={sharedCenterState}
                />

                <Category
                    setSharedState={val => {
                        setSharedState(val)
                    }}
                    setSharedCenterState={val => {
                        setSharedCenterState(val)
                    }}
                />
            </Container>
        </>
    )
}
