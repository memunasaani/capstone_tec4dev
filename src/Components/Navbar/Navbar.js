import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import Logo from '../../Assets/Insightify Logo.png'; // Import your logo image

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        return (
            <nav className='NavbarItems'>
                <div className='navbar-logo'>
                    <img src={Logo} alt="Logo" /> {/* Add your logo image */}
                    <h2>...the best online career compass</h2> {/* Add the heading */}
                </div>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fa fa-times" : "fa fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;
