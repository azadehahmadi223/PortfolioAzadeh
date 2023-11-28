import React from "react";
import './Services.css';
 import HeartEmoji from "../../img/heartemoji.png"
 import Glasses from "../../img/glasses.png";
 import Humble from "../../img/humble.png";
import Card from "../Card/Card";
// import resume from './resume.pdf'
import resume from "../../img/resume.txt"
import { themeContext } from "../../Context";
import { useContext } from "react";

const Services = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="services" id="services">

            {/* left side */}
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
                <span>services</span>
                <span>I am a FullStack web developer and I have these skill that work
                <br/>
                in this parts like; Developer, Web Desighn, Photoshop.
                <br />
                in adition i have more skills in this parts:
                <ul>
                <li>able to search and work internet</li>
                    <li>Ms.Word, Power Point,Excel</li>
                    <li>Marketing</li>
                    <li>able to edit video and audio</li>
                    <li>Annoucing</li>
                    <li>Familiar With Windows</li>
                    <li>Cool Edit</li>
                    <li>Managementvi</li>
                    <li>Strong Communication</li>
                </ul>
                </span>
                <a href={resume} download="resume">
                <button className="button s-button">Download Cv</button>
                </a>
                <div className="blur s-blur" style={{background: "#ABF1FF94"}}></div>
            </div>
            
            {/* right side */}
            <div className="cards">

               <div style={{left: '14rem' }}>
                <Card
                emoji = {HeartEmoji}
                heading = {'Ui Design'}
                detail = {"User interface engineering is the design of user interface for machines and software."}
                />
               </div>
               {/* second card */}
               <div style={{top: '12rem', left: '-4rem'}}>
                <Card
                  emoji = {Glasses}
                  heading = {'Web Development'}
                  detail = {"Web development is the work involved in developing a web site for the internet or an internet."}
                />
               </div>
               {/* Third card */}
               <div style={{top: '19rem', left: '12rem'}}>
               <Card
                  emoji = {Humble}
                  heading = {'Grphic Designer'}
                  detail = {"Art and illustration graphic designer is work with programs like:Photoshop, Illustrator and Indesign."}
                />
               </div>
               
               <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    )
}
export default Services;