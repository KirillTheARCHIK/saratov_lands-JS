import React, { useState, useEffect } from 'react';
import { selectOneField } from '../components/Axios';
import MapGL from '../components/MapGL';
import { SideMenu } from '../components/SideMenu';


export const MapPage = () => {
    const [sideMenuOpen, setsideMenuOpen] = useState(false);
    const [fieldInfo, setfieldInfo] = useState({});
    const [selectedFieldId, setselectedFieldId] = useState(null);

    useEffect(() => {
        selectOneField(selectedFieldId).then((response)=>{
            setfieldInfo(response)
        })
    }, [selectedFieldId]);

    return (
        <div>
            <SideMenu props={{
                sideMenuOpen,
                setsideMenuOpen,
                fieldInfo
            }} />
            <MapGL props={{
                setsideMenuOpen,
                selectedFieldId,
                setselectedFieldId,
            }} />
        </div>
    )
}
