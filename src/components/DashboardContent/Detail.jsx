import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container } from '../Container'
import { Text } from '../Text'
import { Title } from '../Title'

async function getLocationDetail(id) {
    let resp = await axios.get(`api/locations/${id.locationId}`)
    return resp.data
}

export default function Detail(props) {
    const [detail, setDetail] = useState({})
    useEffect(() => {
        getLocationDetail(props.sharedDetailState).then(rslt => setDetail(rslt))
    }, [props.sharedDetailState])
    console.log(detail)
    return (
        <>
            <div className="details">
                <Container gap="20px" align="left">
                    <Title title="Details:" />
                    <Text text={`Name: ${detail.name}`} />
                    <Text text={`Address: ${detail.address}`} />
                    <Text text={`Contact: ${detail.contact}`} />
                    <a href={detail.link} target="_blank">
                        <Text text={`Link: ${detail.link}`} />
                    </a>
                </Container>
            </div>
            <style jsx>{`
                .details {
                    height: 250px;
                    overflow: scroll;
                    width: 100%;
                    padding: 20px 0px 0px 0px;
                }
            `}</style>
        </>
    )
}
