import React from 'react'
import portada from '../assets/fotos/portada.jpg'
import logo from '../assets/fotos/logo.png'

export const Home = () => {
    return (
        <div className="home">
            <img alt="Portada Rebeca" className="home__portada" src={portada} />
            <img alt="logo Rebeca" className="home__logo" src={logo} />

            <h1>mi pasion </h1>
            
        </div>
    )
}
