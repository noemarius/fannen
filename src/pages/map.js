import Head from 'next/head'
import { useAuth } from '@/hooks/auth'
import axios from '@/lib/axios'
import { useState, useEffect } from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import MapGen from '@/components/MapGen'

async function getDataFromTest() {
    const resp = await axios.get('api/test')
    const rslt = JSON.stringify(resp)
    return rslt
}

export default function Map() {
    const { user } = useAuth({ middleware: 'guest' })
    const [test, setTest] = useState([])
    const [mapContainer, setMapContainer] = useState('')

    const render = status => {
        return <h1>{status}</h1>
    }

    useEffect(() => {
        getDataFromTest().then(e => {
            setTest(e)
        })
    }, [])

    useEffect(() => {
        console.log('toto')
    }, [])

    return (
        <>
            <Head>
                <title>test</title>
            </Head>
            <div>
                <div>{test}</div>
                <Wrapper
                    apiKey={'AIzaSyAKZd-kwT3ahZWjJLAqgEgHDOB95QysUZ4'}
                    render={render}>
                    <MapGen />
                </Wrapper>
            </div>
        </>
    )
}
