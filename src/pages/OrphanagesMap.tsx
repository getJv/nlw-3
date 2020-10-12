import React from 'react'
import mapMarkerImg from '../images/map-marker.svg'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import '../styles/pages/orphanages-map.css'
import 'leaflet/dist/leaflet.css'
import { Map,TileLayer } from 'react-leaflet'; 

function OrfanagesMap() { 
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy logo" />
                    <h2>Escolha um orfanato no mapa 2</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Rio do sul</strong>
                    <span>Santa Catarina</span>
                </footer>
            </aside>
            <Map
                center={[-15.79152, -47.8921486]}
                zoom={15}
                style={{width:'100%',height:'100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                 
            </Map>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>

            </Link>
        </div>
    );
}

export default OrfanagesMap;