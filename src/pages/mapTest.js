import Head from 'next/head'
import { useAuth } from '@/hooks/auth'
import axios from '@/lib/axios'
import Map from '@/components/Map'

async function getDataFromTest() {
    const resp = await axios.get('api/test')
    const rslt = JSON.stringify(resp)
    return rslt
}

export default function mapTest() {
    const { user } = useAuth({ middleware: 'guest' })
    const listOfMarkers = [
        [
            { position: { lat: 49.612035, lng: 6.13 }, label: 'm1' },
            { position: { lat: 49.612035, lng: 6.12 }, label: 'm2' },
        ],
    ]

    return (
        <>
            <Head>
                <title>test</title>
            </Head>
            <div>
                <Map markers={listOfMarkers} />
            </div>
        </>
    )
}
