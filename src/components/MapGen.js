import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const mapStyle = styled.div`
    background-color: red;
    height: 500px;
    width: 500px;
`

export default function MapGen() {
    const ref = useRef(null)
    const [map, setMap] = useState()
    useEffect(() => {
        if (ref.current && !map) {
            setMap(
                new window.google.maps.Map(ref.current, {
                    center: google.maps.LatLngLiteral,
                    zoom: 14,
                }),
            )
        }
    }, [ref, map])

    return <div ref={ref} />
}
