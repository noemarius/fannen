import { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { FLIGHT_PROPS_ID } from 'next/dist/shared/lib/constants'

const mapContainerStyle = {
    width: '400px',
    height: '400px',
}

export default function MapGen() {
    const { isLoaded } = useLoadScript(
        process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    )
    if (!isLoaded) return <div>Loading...</div>
    return <Map />
}

// #TODO: Marker FLIGHT_PROPS_ID
function Map() {
    const mapCenter = useMemo(() => ({ lat: 49, lng: 6 }), [])
    return (
        <GoogleMap
            zoom={14}
            center={mapCenter}
            mapContainerStyle={mapContainerStyle}
        />
    )
}
