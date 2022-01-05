import React, {Component} from "react";
import { FaAlignJustify } from "react-icons/fa";
import {Link} from 'react-router-dom';
import { Link as Ls } from "react-scroll";
import logo from '../images/logo.png';
import {animateScroll as scroll} from "react-scroll";
//import {getUser, removeUserSession} from "../Common";


class Navbar extends Component {
    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render(){
        return(
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/" onClick={() => scroll.scrollToTop()}>
                            <img src={logo} alt="Vietnam Travel"/>
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignJustify className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav": "nav-links"}>
                        <li><Link to="/" onClick={() => scroll.scrollToTop()}>Home</Link></li>
                        <li><Link to="/destinations">Destinations</Link></li>
                        <li><Ls to="contact" smooth={true} duration={800}>About Us</Ls></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                    
                </div>
            </nav>
        );
    }
}

export default Navbar;