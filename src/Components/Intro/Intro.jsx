import React  from "react";
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import girl from "../../img/girl.jpg"
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";


const Intro = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="intro" id="home">
            <div className="i-left">
                <div className="i-name">
               
                    <span style={{color: darkMode? 'white': ''}}>Hy! I Am </span>
                    <span>Azadeh Ahmadi</span>
                    <span>
                    I am Azadeh Ahmadi. Student in Herat university 🎓and
                    full Stuck lerner in Code To Inspire📚.Since my
                     childhood, I love art and design.I always try to design my stuff with my unique point of view.
                    I also create things that can be usefull to others.coding is also an art for me. love it and now I have opportunity to create my idea and design along with the coding.
                    and I find it really interesting and I enjoyed the process a lot.
                    for I want to have my own Afghan coding company.
                    my hobby is Coding👩‍💻, My interest are : Drawing🎨, play football, reading📖, photography📸, and so on </span>
                </div>
                
                <a href="#services">
                <button className="button i-button">Hire me</button></a>
                <div className="i-icons">
                    <a href="https://github.com/azadehahmadi223">
                    <img src={Github} alt="" />
                    </a>
                    <a  href="https://www.linkedin.com/in/azadeh-ahmadi-7a835226b">
                    <img src={LinkedIn} alt="" />
                    </a>
              
                   <a href="https://www.instagram.com/azadehahmadi_2228">
                   <img src={Instagram} alt="" />
                   </a>
                </div>
            </div>

            <div className="i-right">

             
                <div className="right_img">
                <img className="draw" src={girl} alt=""/>
                </div>
                <img className="f-img"
              
                src={glassesimoji} alt=""/>
                <div
                     style={{top: '-4%', left: '67%'}} className="floating-div">
                    <FloatingDiv image={crown} txt1="Web" txt2="Developer"/>
                </div>
                <br />
                <br />
                <div style={{top: '19.9rem', left: '0rem'}} className="floating-div">
                <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award"/>
                </div>

                {/* blur divs */}
                <div className="blur" style={{background: "rgb(238 210 255)" }}></div>
                <div className="blur" style={{background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left:'-9rem'}}></div>
            </div>
        </div>
    )
}
export default Intro;