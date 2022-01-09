import React, { useState, useEffect } from 'react';
import {ArrowLeftOutlined, MenuOutlined} from '@ant-design/icons'
import area from '@turf/area'



export const SideMenu = ({props}) => {


    const ToggleMenu=()=>{
        
    }

    return (
        <div style={{
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            display: 'flex',
            position: 'fixed',
            zIndex: 100,
        }}>
            {/* БОКОВОЕ МЕНЮ */}
            <div className='sideMenuBody' style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
                width: '400px',
                height: '100vh',
                left: '-400px',
                background: '#fff',
                transition: 'transform 1s',
                transform: props.sideMenuOpen ? 'translateX(400px)' : '',
            }}>
                <img src={props.fieldImage ?? 'https://lasd.lv/public/assets/no-image.png'} width={400} height={300} />
                <p style={{
                    background: '#1560BD',
                    padding: 10,
                    color: '#fff',
                    fontSize: 25,
                    minHeight: 60,
                    marginLeft: 0
                }}>
                    {props.fieldInfo?.properties?.name }
                </p>
                <p>Номер участка: {props.fieldInfo?.id}</p>
                <p>Владелец: {props.fieldInfo?.properties?.owner}</p>
                <p>Площадь: {props.fieldInfo?.geometry && Math.round(area(props.fieldInfo?.geometry))/10000} Га</p>
                <p>Стоимость: {props.fieldInfo?.properties?.price.toLocaleString()} руб.</p>
            </div>
            {/* КНОПКА ОТКРЫТИЯ МЕНЮ */}
            <div style={{
                position: 'fixed',
                width: 50,
                height: 50,
                background: '#fff',
                borderRadius: '100%',
                margin: 10,
                cursor: 'pointer',
                transition: 'transform 1s',
                transform: props.sideMenuOpen ? 'translateX(400px)' : ''
            }} onClick={()=>{props.setsideMenuOpen(!props.sideMenuOpen)}}>
                {props.sideMenuOpen ? <ArrowLeftOutlined style={{fontSize: 30, left: 10, top: 10, position: 'relative', color: '#555'}}/> : <MenuOutlined style={{fontSize: 26, left: 12, top: 12, position: 'relative', color: '#555'}} /> }
            </div>
        </div>
    )
}
