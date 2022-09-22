import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useState } from 'react'

async function getLocationComment(props) {
    let id = props.sharedCommentState
    if (props.treeType === 'categories') {
        let resp = await axios.get(`api/comments/${id.locationId}`)
    } else if (props.treeType === 'events') {
        let resp = await axios.get(`api/comments/${id.locationId}`)
    } else {
        let resp = await axios.get(`api/comments/${id.locationId}`)
    }
    return resp.data
}

export default function Comment(props) {
    const [comment, setComment] = useState({})
    useEffect(() => {
        getLocationComment(props).then(rslt => setComment(rslt))
    }, [props.sharedCommentState, props.treeType])
    return (
        <>
            <div className={`commentContainer`}>
                {/* TODO: Add card component */}
                {Object.entries(comment).map(e => {
                    return <li>{JSON.stringify(e)}</li>
                })}
            </div>
        </>
    )
}
