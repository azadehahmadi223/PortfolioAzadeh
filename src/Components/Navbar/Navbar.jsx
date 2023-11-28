import React from "react"
import './Navbar.css'
import Toggle from "../Toggle/Toggle";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Navbar = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
   
    return(
        <div className="n-wrapper">
            <div className="n-left">
                <div style={{color: darkMode? 'white': ''}} className="n-name">Azadeh
                </div>
             <Toggle/>
            </div>
            <div  className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <li>
                            <a href="#home">Home</a>
                            </li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#skill">Skills</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <a href="#contact">
                <button className="button n-button">
                    Contact
                </button></a>
            </div>
        </div>
    )
}
export default Navbar;