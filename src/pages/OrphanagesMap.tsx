import React from 'react'
import mapMarkerImg from '../images/map-marker.svg'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import '../styles/pages/orphanages-map.css'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'; 
import mapIcon from '../utils/mapIcon'


function OrfanagesMap() { 
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy logo" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Brasilia</strong>
                    <span>Distrito Federal</span>
                </footer>
            </aside>
            <Map
                center={[-15.79152, -47.8921486]}
                zoom={15}
                style={{width:'100%',height:'100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                <Marker
                    position={[-15.79152, -47.8921486]}
                    icon={mapIcon}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup" >
                        lar das peninas
                         <Link to="orphanages/1">
                            <FiArrowRight size={20} color='#FFF' />
                            
                         </Link>
                    </Popup>

                </Marker>
                
            </Map>
            <Link to="orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>

            </Link>
        </div>
    );
}

export default OrfanagesMap;