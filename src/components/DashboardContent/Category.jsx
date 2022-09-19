import * as React from 'react'
import axios from '@/lib/axios'
import { useState, useEffect } from 'react'
import TreeView from '@mui/lab/TreeView'
import TreeItem from '@mui/lab/TreeItem'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Construction } from '@mui/icons-material'

async function getCategoriesAndLocations() {
    const resp = await axios.get('api/locsandcategs')
    return resp
}

export default function Category(props) {
    const [categAndLoc, setCategAndLoc] = useState([])

    useEffect(() => {
        getCategoriesAndLocations().then(result => {
            result = [result.data]
            setCategAndLoc(result)
        })
    }, [])

    return (
        <>
            {/* {JSON.stringify(categAndLoc)} */}
            <TreeView
                className={`test`}
                aria-label="Category and Location Tree"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                sx={{
                    minHeight: 240,
                    flexGrow: 1,
                    /* maxWidth: '30%', */
                    overflowY: 'auto',
                }}>
                <Tree data={categAndLoc} parentProps={props} />
            </TreeView>
        </>
    )
}

const Tree = ({ data, parentProps }) => {
    /* const buildGeoLocCateg = categName => {
        console.log(categName)
        data = data[0]
        let parsedData = Object.entries(data)
        console.log(parsedData.categName)
    } */

    const getData = data => {
        parentProps.setSharedState({
            loc: data,
        })
    }
    return (
        <>
            {data &&
                data.map(item => {
                    let counter = 0
                    return Object.entries(item).map((categ, id) => {
                        return (
                            <>
                                <TreeItem
                                    nodeId={`${(counter += 1)}`}
                                    label={categ[0]}
                                    key={counter}
                                    onClick={() => {
                                        /* buildGeoLocCateg(categ[0]) */
                                    }}>
                                    {categ[1].map(children => {
                                        return (
                                            <TreeItem
                                                nodeId={`${(counter += 1)}`}
                                                label={children.name}
                                                key={counter}
                                                onClick={() => {
                                                    getData(children.geo)
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
