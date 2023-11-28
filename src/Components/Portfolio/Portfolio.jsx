import React from "react";
import "./Portfolio.css"
import {Swiper, SwiperSlide} from 'swiper/react'
import GameColor from "../../img/GameColor.png"
import log3 from "../../img/log3.png"
import FoodDelight4 from "../../img/FoodDelight4.png"
import Sidebar2 from "../../img/Sidebar2.png"
import 'swiper/css'
import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio = () => {


    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="portfolio" id="portfolio">
         {/* heading */}
         <span style={{color: darkMode? 'white': ''}}>Recent Projects </span>
         <span>Portfolio </span>


         {/* slider */}
         <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true}
         className="portfolio-slider">
            <SwiperSlide>
            
                <img src={Sidebar2} alt="" />
                <h1 className="info" >Html + Css</h1>
                <a href="https://github.com/azadehahmadi223/Sidebar">
                <button className="button">View Project<i className="fas fa-chevron-right"></i></button></a>
            </SwiperSlide>
            
            <SwiperSlide>
            
                <img src={GameColor} alt="" />
                <h1 className="info" >Html + Css + Js</h1>
                <a href="https://github.com/azadehahmadi223/GAME-COLOR2">
                <button className="button">View Project<i className="fas fa-chevron-right"></i></button></a>
            </SwiperSlide>
            <SwiperSlide>
           
                <img src={FoodDelight4} height="220px" alt="" />
              
                <h1 className="info" >Html + Css + Js + React</h1>
                <a href="https://github.com/azadehahmadi223/Food">
                <button className="button">View Project<i className="fas fa-chevron-right"></i></button></a>
            </SwiperSlide>
            <SwiperSlide>
           
                <img src={log3} alt="" />
                <h1 className="info" >Html + Css + Js</h1>
                <a href="https://github.com/azadehahmadi223/Login">
                <button className="button">View Project<i className="fas fa-chevron-right"></i></button></a>
            </SwiperSlide>
            
         </Swiper>
          
        </div>
    )
}
export default Portfolio;