import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container } from '../Container'
import { Text } from '../Text'

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
            {/* TODO: Add card component */}
            <Container gap="20px" align="left">
                <Text text={`Name: ${detail.name}`} />
                <Text text={`Address: ${detail.address}`} />
                <Text text={`Contact: ${detail.contact}`} />
                <a href={detail.link} target="_blank">
                    <Text text={`Link: ${detail.link}`} />
                </a>
            </Container>
        </>
    )
}
