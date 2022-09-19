import * as React from 'react'
import axios from '@/lib/axios'
import { useState, useEffect } from 'react'
import TreeView from '@mui/lab/TreeView'
import TreeItem from '@mui/lab/TreeItem'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

async function getCategoriesAndLocations() {
    const resp = await axios.get('api/locsandcategs')
    return resp
}

export default function Category() {
    const [categAndLoc, setCategAndLoc] = useState([])

    useEffect(() => {
        getCategoriesAndLocations().then(result => {
            result = [result.data]
            setCategAndLoc(result)
        })
    }, [])

    return (
        <>
            <TreeView
                aria-label="Category and Location Tree"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                sx={{
                    minHeight: 240,
                    flexGrow: 1,
                    maxWidth: '30%',
                    overflowY: 'auto',
                }}>
                <Tree data={categAndLoc} />
            </TreeView>
        </>
    )
}

const Tree = ({ data }) => {
    return (
        <>
            {data &&
                data.map(item => {
                    var counter = 0
                    return Object.entries(item).map(categ => {
                        return (
                            <>
                                <TreeItem
                                    nodeId={`${(counter += 1)}`}
                                    label={categ[0]}
                                    key={counter}>
                                    {categ[1].map(children => {
                                        return (
                                            <TreeItem
                                                nodeId={`${(counter += 1)}`}
                                                label={children.name}
                                                key={counter}
                                                onClick={() => {
                                                    console.log(children.geo)
                                                }}
                                            />
                                        )
                                    })}
                                </TreeItem>
                            </>
                        )
                    })
                })}
        </>
    )
}
