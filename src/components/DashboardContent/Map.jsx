import { useMemo, useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { useEffect } from 'react'

const mapContainerStyle = {
    width: '100%',
    height: '400px',
}

// #TODO:marker props
const RenderMap = props => {
    const mapCenter = useMemo(() => ({ lat: 49.61203, lng: 6.1296 }), [])
    let markerList = []

    const [location, setLocation] = useState({})
    const [locationCenter, setLocationCenter] = useState({})

    useEffect(() => {
        if (Object.keys(props.sharedState).length != 0) {
            setLocation(props.sharedState)
        } else {
            setLocation([{ position: mapCenter, label: 'Lux Ville' }])
        }
    }, [props.sharedState])

    useEffect(() => {
        if (Object.keys(props.sharedCenterState).length != 0) {
            setLocationCenter(props.sharedCenterState)
        } else {
            setLocationCenter(mapCenter)
        }
    }, [props.sharedCenterState])

    return (
        <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                zoom={14}
                center={locationCenter}
                mapContainerStyle={mapContainerStyle}>
                {Object.entries(location).map((e, i) => {
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
