import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useState } from 'react'

async function getLocationComment(id) {
    let resp = await axios.get(`api/comments/${id.locationId}`)
    return resp.data
}

export default function Comment(props) {
    const [comment, setComment] = useState({})
    useEffect(() => {
        getLocationComment(props.sharedCommentState).then(rslt =>
            setComment(rslt),
        )
    }, [props.sharedCommentState])
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
