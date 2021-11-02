import React from 'react'
import { Mapa } from '../components/structure/mapa/Mapa'
import { NavbarTopMenu } from '../components/structure/navbar-top-menu/NavbarTopMenu'
import { Navbar } from '../components/structure/navbar/navbar/Navbar'

export const MapaRoutes = () => {
    return (
        <>
            <Navbar/>
            <NavbarTopMenu/>
            <Mapa/>
        </>
    )
}
