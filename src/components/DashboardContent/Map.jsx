import { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

const mapContainerStyle = {
    width: '100%',
    height: '400px',
}

export default function Map(props) {
    const { isLoaded } = useLoadScript(
        process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    )
    if (!isLoaded) return <div>Loading...</div>
    return <RenderMap markers={props.markers} center={props.center} />
}

// #TODO:marker props
const RenderMap = props => {
    const position = { lat: 49.612035, lng: 6.129671 }
    const mapCenter = useMemo(() => ({ lat: 49.61203, lng: 6.1296 }), [])
    let markerList = []
    if (props.markers) {
        markerList = props.markers[0]
    } else {
        markerList = [
            { position: { lat: 49.612035, lng: 6.129671 }, label: 'Lux Ville' },
            { position: { lat: 49.613494, lng: 6.128729 }, label: 'Pool' },
        ]
    }
    console.log(markerList)

    return (
        <GoogleMap
            zoom={14}
            center={mapCenter}
            mapContainerStyle={mapContainerStyle}>
            {markerList.map(e => {
                return <Marker position={e.position} label={e.label} />
            })}
        </GoogleMap>
    )
}
