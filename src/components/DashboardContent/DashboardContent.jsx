import styled from 'styled-components'
import { DropdownDash } from '@/components/DropdownDash/DropdownDash'
import { DropdownItem } from '@/components/DropdownItem/DropdownItem'
import Category from './Category'
import Map from './Map'

export function DashboardContent() {
    // Styled components
    const Container = styled.div`
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 12px;
        width: 100%;
    `

    return (
        <>
            <Container>
                <Map />

                <Category />
            </Container>
        </>
    )
}
