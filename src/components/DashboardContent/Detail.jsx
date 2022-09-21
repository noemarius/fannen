import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useState } from 'react'

async function getLocationDetail(id) {
    let resp = await axios.get(`api/locations/${id.locationId}`)
    return resp.data
}

export default function Detail(props) {
    const [detail, setDetail] = useState({})
    useEffect(() => {
        getLocationDetail(props.sharedDetailState).then(rslt => setDetail(rslt))
    }, [props.sharedDetailState])
    return (
        <>
            <div className={`detailContainer`}>
                {/* TODO: Add card component */}
                {Object.entries(detail).map((e, i) => {
                    return <li key={i}>{JSON.stringify(e)}</li>
                })}
            </div>
        </>
    )
}
