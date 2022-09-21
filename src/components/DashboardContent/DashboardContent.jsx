import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { DropdownDash } from '@/components/DropdownDash/DropdownDash'
import { DropdownItem } from '@/components/DropdownItem/DropdownItem'
import Category from './Category'
import Map from './Map'
import Detail from './Detail'
import Comment from './Comment'
/* import Test from './test' */

// Styled components
const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 12px;
    width: 100%;
    .categoryContainer {
        border-radius: 20px;
        box-shadow: #fff 0px 3px 8px;
        background-color: white;
        width: 100%;
        color: black;
        padding: 8px;
    }
    .detailContainer,
    .commentContainer {
        flex: 0 0 50%;
        border-radius: 20px;
        box-shadow: #fff 0px 3px 8px;
        background-color: white;
        padding: 8px;
        overflow: scroll;
        word-wrap: break-word;
    }
    .infoContainer {
        display: flex;
        flex-direction: row;
        height: 200px;
        width: 100%;
        justify-items: center;
    }
`

export function DashboardContent() {
    const [sharedState, setSharedState] = useState({})
    const [sharedCenterState, setSharedCenterState] = useState({})
    const [sharedDetailState, setSharedDetailState] = useState({})
    const [sharedCommentState, setSharedCommentState] = useState({})

    /* useEffect(() => console.log(sharedState), [sharedState]) */
    /* useEffect(() => console.log(sharedCenterState), [sharedCenterState]) */
    /* useEffect(() => console.log(sharedDetailState), [sharedDetailState]) */
    useEffect(() => console.log(sharedCommentState), [sharedCommentState])
    return (
        <>
            <Container>
                <Map
                    sharedState={sharedState}
                    sharedCenterState={sharedCenterState}
                />
                <div className={`infoContainer`}>
                    <Detail sharedDetailState={sharedDetailState} />

                    <Comment sharedCommentState={sharedCommentState} />
                </div>

                <Category
                    setSharedState={val => {
                        setSharedState(val)
                    }}
                    setSharedCenterState={val => {
                        setSharedCenterState(val)
                    }}
                    setSharedDetailState={val => {
                        setSharedDetailState(val)
                    }}
                    setSharedCommentState={val => {
                        setSharedCommentState(val)
                    }}
                />
            </Container>
        </>
    )
}
