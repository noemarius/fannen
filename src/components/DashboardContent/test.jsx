import * as React from 'react'
import axios from '@/lib/axios'
import { useState, useEffect } from 'react'
import TreeView from '@mui/lab/TreeView'
import TreeItem from '@mui/lab/TreeItem'
/* import { Construction } from '@mui/icons-material' */
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

async function getCategoriesAndLocations() {
    const resp = await axios.get('api/locsandcategs')
    return resp
}

export default function Test(props) {
    const [categAndLoc, setCategAndLoc] = useState([])

    useEffect(() => {
        getCategoriesAndLocations().then(result => {
            result = result.data
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
    let dataObj = Object.entries(data)
    let counter = 0

    const buildGeoLocCateg = id => {
        /*console.log(dataObj[id])*/
        const jsonGeoLoc = () => {
            let newJson = dataObj[id][1].map(e => {
                return { positon: JSON.parse(e.geo), label: e.name }
            })
            return newJson
        }

        parentProps.setSharedState(jsonGeoLoc())
    }

    return (
        <>
            {data &&
                dataObj.map((categ, id) => {
                    return (
                        <>
                            <TreeItem
                                nodeId={`${(counter += 1)}`}
                                label={categ[0]}
                                key={counter}
                                onClick={() => {
                                    buildGeoLocCateg(id)
                                }}>
                                {categ[1].map(children => {
                                    return (
                                        <TreeItem
                                            nodeId={`${(counter += 1)}`}
                                            label={children.name}
                                            key={counter}
                                            onClick={() => {
                                                //display info about location, and comments
                                            }}
                                        />
                                    )
                                })}
                            </TreeItem>
                        </>
                    )
                })}
        </>
    )
}
