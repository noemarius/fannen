import { useMemo, useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { useEffect } from 'react'

const mapContainerStyle = {
    width: '100%',
    height: '400px',
}

// #TODO:marker props
const RenderMap = props => {
    const [location, setLocation] = useState({})
    const [locationCenter, setLocationCenter] = useState({
        lat: 49.61203,
        lng: 6.1296,
    })

    useEffect(() => {
        setLocation(props.sharedState)
    }, [props.sharedState])

    useEffect(() => {
        setLocationCenter(props.sharedCenterState)
    }, [props.sharedCenterState])

    console.log(locationCenter)

    const position = { lat: 49.612035, lng: 6.129671 }
    const mapCenter = useMemo(() => ({ lat: 49.61203, lng: 6.1296 }), [])
    let markerList = []
    if (location) {
        markerList = Object.entries(location)
    } else {
        markerList = [
            {
                position: { lat: 49.612035, lng: 6.129671 },
                label: 'Lux Ville',
            },
            { position: { lat: 49.613494, lng: 6.128729 }, label: 'Pool' },
        ]
    }
    /* console.log(markerList) */

    return (
        <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                zoom={14}
                center={locationCenter}
                mapContainerStyle={mapContainerStyle}>
                {markerList.map((e, i) => {
                    return (
                        <Marker
                            key={i}
                            position={e[1].position}
                            label={e[1].label}
                        />
                    )
                })}
            </GoogleMap>
        </LoadScript>
    )
}

export default RenderMap
