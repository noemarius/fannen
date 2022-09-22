import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Category from './Category'
import Map from './Map'
import Detail from './Detail'
import Comment from './Comment'
import Event from './Event'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
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
        box-shadow: #fff 0px 3px 8px;
        background-color: white;
        width: 100%;
        color: black;
        padding: 8px;
    }
    .detailContainer,
    .commentContainer {
        flex: 0 0 50%;
        box-shadow: #fff 0px 3px 8px;
        background-color: white;
        padding: 8px;
        overflow: scroll;
        word-wrap: break-word;
    }
    .infoContainer,
    .treeContainer {
        display: flex;
        flex-direction: row;
        min-height: 200px;
        width: 100%;
        justify-items: center;
    }
`
function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

export function DashboardContent() {
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

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
                <div className={`treeContainer`}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                aria-label="basic tabs example">
                                <Tab label="Themes" {...a11yProps(0)} />
                                <Tab label="Events" {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
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
                                treeType={'categories'}
                            />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Event
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
                                treeType={'events'}
                            />
                        </TabPanel>
                    </Box>
                </div>
                <Map
                    sharedState={sharedState}
                    sharedCenterState={sharedCenterState}
                />
                <div className={`infoContainer`}>
                    <Detail sharedDetailState={sharedDetailState} />
                    <Comment sharedCommentState={sharedCommentState} />
                </div>
            </Container>
        </>
    )
}
