import GoogleMapReact from 'google-map-react';
import React from 'react'
import './map.scss'

function Map() {

    const defaultPropsForMap = {
        center: {
            lat: 50.459459,
            lng: 30.406034
        },
        zoom: 16
    };

    return (
        <div className="map flex__center section__padding">
            <div className="map-container">
                <div className="map-border">
                    <div className="map-content">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyCdns154n1DGvu6J3yzrZPCgPGxdr3YOTE" }}
                            defaultCenter={defaultPropsForMap.center}
                            defaultZoom={defaultPropsForMap.zoom}
                        >
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map