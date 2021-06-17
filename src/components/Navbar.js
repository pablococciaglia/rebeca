import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/fotos/logonav.png'
export const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <Link to="./"><img alt="logo Rebeca" src={logo} className="brand-logo" /></Link>
                    <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li> <Link to="./">Home</Link> </li>
                        <li> <Link to="./Biography">Biografía</Link> </li>
                        <li> <Link to="./Interviews">Entrevistas</Link> </li>
                        <li> <Link to="./Performing">Arte</Link> </li>
                        <li> <Link to="./Gallery">Galería</Link> </li>
                        <li> 
                            <div className="nav-wrapper__icons">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                                <i className="fa fa-youtube" aria-hidden="true"></i>
                                <i className="fa fa-spotify" aria-hidden="true"></i>
                                <i className="fa fa-apple" aria-hidden="true"></i>
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </div> 
                        </li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li> <Link to="./">Home</Link> </li>
                <li> <Link to="./Biography">Biografía</Link> </li>
                <li> <Link to="./Interviews">Entrevistas</Link> </li>
                <li> <Link to="./Performing">Arte</Link> </li>
                <li> <Link to="./Gallery">Galería</Link> </li>
                <li> 
                    <div className="nav-wrapper__icons">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                        <i className="fa fa-youtube" aria-hidden="true"></i>
                        <i className="fa fa-spotify" aria-hidden="true"></i>
                        <i className="fa fa-apple" aria-hidden="true"></i>
                    </div> 
                </li>
            </ul>
        </div>
    )
}
