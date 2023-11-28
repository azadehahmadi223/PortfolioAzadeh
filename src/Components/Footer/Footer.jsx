import React from "react";
import "./Footer.css";
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import Twitter from  '@iconscout/react-unicons/icons/uil-twitter';
import Wave from "../../img/wave.png";

const Footer = () => {
    return(
        <div className="footer">
            <img src={Wave} alt="" style={{width: "100%"}}/>
            <div className="f-content">
                <span className="font">azadehahmadi223@gmail.com</span>
                <div className="f-icons"> 
                <a href="https://www.instagram.com/azadehahmadi_2228" > 
                    <Insta color="white" size="3rem" />
                    </a> 
                    <a href="https://github.com/azadehahmadi223">
                    <Github color="white" size="3rem"/>
                    </a>
                    <a href="https://www.linkedin.com/in/azadeh-ahmadi-7a835226b">
                    <Linkedin color="white" size="3rem"/>
                    </a>
                   
                    <a href="https://www.twitter.com/@Azadeh42496882">
                    <Twitter color="white" size="3rem"/>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Footer;