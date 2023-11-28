import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Skill from "./Components/Skills/Skill";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import Resume from "./Components/Resume/Resume";

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{background: darkMode? 'black': "",color : darkMode? 'white': ''}}>
   <Navbar/>
   <Intro/>
   <Services/>
   <Skill/>
  <Resume/>
   <Portfolio/>
   <Contact/>
   <Footer/>
    </div>
  );
}

export default App;
