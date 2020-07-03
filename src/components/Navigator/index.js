import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './style.css';

const NavItem = ({ title, link, childs = [] }) => (
    <li className="nav-item">
        <Link
            to={link}
        >
            {title}
        </Link>
        {
            childs.length ?
                <ul className="sub-menu">
                    {childs.map(child => (
                        <li className="nav-item">
                            <Link to={child.link}>
                                {child.title}
                            </Link>
                        </li>
                    ))
                    }
                </ul>
                : null
        }
    </li>
);

const Navigator = () => (
    <nav id="navigator">
        <ul className="nav-wrapper">
            <NavItem
                title="Adquisición de datos"
                link="/adquisicion-datos"
                childs={
                    [
                        {
                            title: 'Topográficos',
                            link: '/adquisicion-datos/topograficos'
                        },
                        {
                            title: 'Geofísicos',
                            link: '/adquisicion-datos/geofisicos'
                        },
                        {
                            title: 'Suelos',
                            link: '/adquisicion-datos/suelos'
                        },
                        {
                            title: 'Áreas de aplicación',
                            link: '/adquisicion-datos/areas-aplicacion'
                        }
                    ]
                }
            />
            <NavItem
                title="Consultoría"
                link="/consultoria"
            />
            <NavItem
                title="Casos de estudio"
                link="/casos-estudio"
            />
            <NavItem
                title="Contacto"
                link="/contacto"
            />
        </ul>
    </nav>
)

// Navigator.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Navigator.defaultProps = {
//   siteTitle: ``,
// }

export default Navigator