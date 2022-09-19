import * as React from 'react'
import axios from '@/lib/axios'
import { useState, useEffect } from 'react'
import TreeView from '@mui/lab/TreeView'
import TreeItem from '@mui/lab/TreeItem'

async function getCategoriesAndLocations() {
    const resp = await axios.get('api/locsandcategs')
    return resp
}

export default function CategTest() {
    const [categAndLoc, setCategAndLoc] = useState([])

    useEffect(() => {
        getCategoriesAndLocations().then(result => {
            result = [result.data]
            setCategAndLoc(result)
        })
    }, [])

    return (
        <>
            <Tree data={categAndLoc} />
            {/* {JSON.stringify(categAndLoc)} */}
        </>
    )
}

const Tree = ({ data }) => {
    return (
        <ul style={{ width: '200px' }}>
            {data &&
                data.map(item => {
                    return Object.entries(item).map(categ => {
                        const [childVisibility, setChildVisibility] = useState(
                            false,
                        )
                        return (
                            <li>
                                <div>
                                    <div>{categ[0]}</div>
                                    <div>
                                        <ul
                                            style={{
                                                backgroundColor: 'white',
                                            }}>
                                            {categ[1].map(children => (
                                                <li
                                                    style={{
                                                        textAlign: 'right',
                                                    }}>
                                                    {children.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                })}
        </ul>
    )
}
