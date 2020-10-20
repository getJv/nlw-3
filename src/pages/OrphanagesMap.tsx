import React, { useEffect, useState } from 'react'
import mapMarkerImg from '../images/map-marker.svg'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import '../styles/pages/orphanages-map.css'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'; 
import mapIcon from '../utils/mapIcon'
import api from '../services/api'

interface Orphanage { 
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    
}


function OrfanagesMap() { 
    
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
    
    /**
     * o useEffect Serve para execurar a função anonima apenas uma vez. na verdade mesmo 
     * o segunda parametro sendo um vetor vazio é que a faz executar apeanas uma vez
     */
    useEffect(() => { 
        api.get('/orphanages').then(res => { 
            setOrphanages(res.data);
        })
     }, []);
{/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
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
                center={[-15.7931994,-47.88613]}
                zoom={15}
                style={{width:'100%',height:'100%'}}
            >
                
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>

                {orphanages.map(orphanage => {
                    return (
                        <Marker
                            position={[orphanage.latitude, orphanage.longitude]}
                            icon={mapIcon}
                            key={orphanage.id}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup" >
                                {orphanage.name}
                         <Link to={`orphanages/${orphanage.id}`}>
                            <FiArrowRight size={20} color='#FFF' />
                            
                         </Link>
                    </Popup>

                </Marker>
                    )

                 }) }
                
            </Map>
            <Link to="orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>

            </Link>
        </div>

    );
}

export default OrfanagesMap;

