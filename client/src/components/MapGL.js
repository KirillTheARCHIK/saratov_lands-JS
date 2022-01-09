import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import fieldsJSON from '../data/fields.json'
import Legend from './Legend'
import area from '@turf/area'
import { selectAllFields } from '../redux/Map/actions';
import {useDispatch, useSelector} from 'react-redux'

mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

mapboxgl.accessToken = 'pk.eyJ1Ijoia2lyaWxsdGhlYXJjaGlrIiwiYSI6ImNrdjBxZWo1dzA4eDcydnA3djF3N2Q2Zm8ifQ.kVlHsV6U8Y9tOeDfeQ2Csg';
 
export default function MapGL({props}) {
    const mapContainer = useRef(null);
    const [lng, setLng] = useState(46.059607);
    const [lat, setLat] = useState(51.597266);
    const [zoom, setZoom] = useState(15);
    const [map, setMap] = useState(null);
    let hoveredFieldId = null;
    let selectedFieldId=null;

    const dispatch = useDispatch()
    const [fieldsFeatures, setfieldsFeatures] = useState({type: 'FeatureCollection',});
    const fields=useSelector(state => state.Map.fields)

    const options = [
        {
            name: 'Value',
            description: 'Общее количество заболевших коронавирусом',
            property: 'owner',
            stops: [
                ["kirill", '#FF0']
            ]
        }
    ];
    const [active, setActive] = useState(options[0]);

    useEffect(() => {
        selectAllFields(dispatch)
    }, []);

    useEffect(() => {
        setfieldsFeatures({
            type: 'FeatureCollection',
            features: fields
        })
    }, [fields]);
    
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/satellite-streets-v11',
            center: [lng, lat],
            zoom: zoom,
        });
        map.on('load', () => {
            map.addSource('fields', {
              type: 'geojson',
              data: fieldsFeatures
            });
            map.setLayoutProperty('country-label', 'text-field', [
                'get',
                `name_ru`
            ]);
            map.setLayoutProperty('settlement-label', 'text-field', [
                'get',
                `name_ru`
            ]);
            //СЛОЙ ЗАЛИВКИ
            map.addLayer(
                {
                    id: 'fields',
                    type: 'fill',
                    source: 'fields',
                    paint: {
                        'fill-color': [
                            'case',
                            ['==', ['get', 'owner'], "kirill"],
                            "#008BFF",
                            ['==', ['get', 'owner'], "none"],
                            "#00FF36",
                            "#F00"
                        ],
                        'fill-opacity': [
                            'case',
                            ['boolean', ['feature-state', 'selected'], false],
                            1,
                            ['boolean', ['feature-state', 'hover'], false],
                            0.8,
                            0.5
                        ]
                    },
                },
                'settlement-label'
            );
            //СЛОЙ ЛИНИЙ
            map.addLayer(
                {
                    id: 'fields-borders',
                    type: 'line',
                    source: 'fields',
                    paint: {
                        'line-color': '#000',
                        'line-width': 3
                    },
                },
                'settlement-label'
            );
            //ПОПАП ПРИ КЛИКЕ
            map.on('click', 'fields', (e) => {
                // new mapboxgl.Popup()
                // .setLngLat(e.lngLat)
                // .setHTML(`
                //     <p>Номер участка: ${e.features[0].id}</p>
                //     <p>Владелец: ${e.features[0].properties.owner}</p>
                //     <p>Площадь: ${Math.round(area(e.features[0].geometry))/10000} Га</p>
                //     <p>Стоимость:  руб.</p>
                // `)
                // .addTo(map);
                props.setsideMenuOpen(true)
                if (e.features.length > 0 && e.features[0]?.id != selectedFieldId) {
                    if(selectedFieldId){
                        map.setFeatureState(
                            { source: 'fields', id: selectedFieldId },
                            { selected: false }
                        );
                    }
                    props.setselectedFieldId(e.features[0].id);
                    selectedFieldId=e.features[0].id
                    map.setFeatureState(
                        { source: 'fields', id: selectedFieldId },
                        { selected: true }
                    );
                }
            });
            //ОКРАСКА ПРИ НАВЕДЕНИИ
            map.on('mousemove', 'fields', (e) => {
                if (e.features.length > 0) {
                    if (hoveredFieldId !== null) {
                        map.setFeatureState(
                            { source: 'fields', id: hoveredFieldId },
                            { hover: false }
                        );
                    }
                    hoveredFieldId = e.features[0].id;
                    map.setFeatureState(
                        { source: 'fields', id: hoveredFieldId },
                        { hover: true }
                    );
                }
            });
            //ОБЕСЦВЕЧИВАНИЕ ПОСЛЕ НАВЕДЕНИЯ 
            map.on('mouseleave', 'fields', () => {
                if (hoveredFieldId !== null) {
                    map.setFeatureState(
                        { source: 'fields', id: hoveredFieldId },
                        { hover: false }
                    );
                }
                hoveredFieldId = null;
            });
            //УКАЗАТЕЛЬ ПРИ НАВЕДЕНИИ
            map.on('mouseenter', 'fields', () => {
                map.getCanvas().style.cursor = 'pointer';
            });    
            map.on('mouseleave', 'fields', () => {
                map.getCanvas().style.cursor = '';
            });

            map.setPaintProperty('fields', 'fill-color', {
                property: active.property,
                stops: active.stops
            });
            setMap(map)
        });

        // return () => map.remove();
    },[fieldsFeatures])
    
    useEffect(() => {
        if (map) {
            map.setPaintProperty('fields', 'fill-color', {
                property: active.property,
                stops: active.stops
            });
        }
    }, [active]);

    useEffect(() => {
        if (!map) return; // wait for map to initialize
        map.on('move', () => {
            setLng(map.getCenter().lng.toFixed(4));
            setLat(map.getCenter().lat.toFixed(4));
            setZoom(map.getZoom().toFixed(2));
        });
    });
    
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            position: 'fixed'
        }}>
            <div ref={mapContainer} className="map-container" style={{
                height: '100vh',
                left: 0,
                top: 0,
                width: '100vw'
            }} />
            <div style={{
                position: 'relative',
                width: 0,
                height: 0,
                left: '-440px'
            }}>
                <div className='sidebarStyle' style={{
                    display: 'inline-block',
                    width: 420,
                    top: 0,
                    left: 0,
                    margin: '12px',
                    backgroundColor: '#404040',
                    color: '#ffffff',
                    zIndex: 1,
                    padding: '6px',
                    fontWeight: 'bold',
                }}>
                    <div>
                    Долгота: {lng} | Широта: {lat} | Приближение: {zoom}
                    </div>
                </div>
            </div>
            {/* <Legend active={active} stops={active.stops} /> */}
        </div>
    );
}