import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useState } from 'react'

async function getLocationDetail(id) {
    console.log(id)
    let resp = axios.get(`api/locations/${id}`)
    return resp
}

export default function Detail(props) {
    const [detail, setDetail] = useState({})
    useEffect(() => {
        setDetail(getLocationDetail(props.sharedDetailState.locationId))
    }, [props.sharedDetailState])
    return (
        <>
            <div className={`detailContainer`}>{JSON.stringify(detail)}</div>
        </>
    )
}
