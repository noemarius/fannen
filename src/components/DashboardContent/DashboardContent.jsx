import styled from 'styled-components'
import { DropdownDash } from '@/components/DropdownDash/DropdownDash'
import { DropdownItem } from '@/components/DropdownItem/DropdownItem'
import Category from './Category'
import Map from './Map'
import { useState, useEffect } from 'react'

export function DashboardContent() {
    // Styled components
    const Container = styled.div`
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 12px;
        width: 100%;
        .test {
            background-color: black;
            width: 100%;
            color: white;
        }
    `
    const [sharedState, setSharedState] = useState({})
    useEffect(() => console.log(sharedState), [sharedState])
    return (
        <>
            <Container>
                <Map
                    setSharedState={setSharedState}
                    sharedState={sharedState}
                />
                <Category
                    setSharedState={setSharedState}
                    sharedState={sharedState}
                />
            </Container>
        </>
    )
}
