import React from "react";
import styles from './Map.module.css'
import mapData from '../../data/geoFloor.json';
import "leaflet/dist/leaflet.css";
import {MapContainer, GeoJSON} from "react-leaflet";

export function Map() {
    return (
        <div className={styles.wrapper}>
            <MapContainer
                className={styles.map}
                center={[53.91687819154794 , 27.63435423374176]}
                zoom={19}
            >
                <GeoJSON data={mapData.features}/>
            </MapContainer>
        </div>

    )
}