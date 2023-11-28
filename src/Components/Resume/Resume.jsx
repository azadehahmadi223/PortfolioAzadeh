import React from "react"
import Card from "./Card"
import "./Resume.css"
import ResumeApi from "./ResumeApi"
import { themeContext } from "../../Context";
import { useContext } from "react";


const Resume = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return (
      <>
        <section className='Resume' id='resume'>
          <div className='container top'>
            <div className='heading text-center'>
            <br />
              <span className="res">My Resume</span>
            </div>
  <br />
  <br />
            <div className='content-section mtop d_flex'>
                <div className='left'>
                <div className='heading'>
                  <span className="ear"  style={{color: darkMode? 'white': ''}}>2008-2020</span>
                  <br />
                  <span className="res">Education Quality</span>
                </div>
                <br />
                <div className='content'>
                  {ResumeApi.map((val,id) => {
                    if (val.category === "education"){
                      return <Card key={id} title={val.title} year={val.year} desc={val.desc} />
                    }
                  })}
                  
                </div>
              </div>
              <div className='left'>
                <div className='heading'>
                  <span className="ear"  style={{color: darkMode? 'white': ''}}>2019-2021</span>
                  <br />
                  <span className="res">Job Experience</span>
                </div>
                 <br />
                <div className='content'>
                  {ResumeApi.map((val,id) => {
                    if (val.category === "experience") {
                     return <Card key={id} title={val.title} year={val.year}  desc={val.desc} />
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
  
  export default Resume


  