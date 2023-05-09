import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import NotFoundPage from "./components/NotFoundPage";
import ProjectsPage from "./components/ProjectsPage";
import RezumePage from "./components/RezumePage";
import { useEffect, useState } from "react";
import iconForDarkMode from "./Images/moon.png"
import iconForLightMode from "./Images/sun.png"

function App() {
  const [changingMode, setChangingMode] = useState("light")

  useEffect(() => {
      const savingModeInLocalStrg = localStorage.getItem("changingMode")
      if(savingModeInLocalStrg) {
        setChangingMode(savingModeInLocalStrg)
      }
  }, [])

  function darkAndLightMode() {
      const modeChanged = changingMode === "light" ? "dark" : "light"
      setChangingMode(modeChanged)

      localStorage.setItem("changingMode", modeChanged)
  };

  const navigation = useNavigate()

  function navigationToHome() {
    return navigation("/")
  }

  return (
    <>
      <div className={changingMode === "light" ? "app" : "appDarkMode"}>
         <div className="divForHeader" >
          <div className="divForLogo" onClick={navigationToHome}>
              <p className="A">A</p><p className="S">S</p>
          </div>
            
          <header className="headerOfPages" >
              <NavLink className="navBar" to="/">Home</NavLink>
              <NavLink className="navBar" to="/projects">Projects</NavLink>
              <NavLink className="navBar" to="/about">About</NavLink>
              <NavLink className="navBar" to="/rezume">Rezume</NavLink>
              <NavLink className="navBar" to="/contact">Contact</NavLink>
            <button className="buttonForModeChanging" onClick={ darkAndLightMode }>
                {changingMode === "light" ? <img className="moon" src={iconForDarkMode} alt=""/> : <img className="sun" src={iconForLightMode} alt=""/>}
              </button>
          </header>


            <label id="hamburger-menu" htmlFor="hamburger-input">
              <nav id="sidebar-menu">
                      <div className="divForLogoMobile">
                          <p className="A">A</p><p className="S">S</p>
                      </div>
                    
          <input type="checkbox" id="hamburger-input" onClick={() => {
            const sdBarOpen = document.getElementById("sidebar-menu")
            sdBarOpen.style.visibility = "visible"
            sdBarOpen.style.left = "0"
          }}/>

          <header className="headerOfPagesMobile" >
              <NavLink className="navBarMobile" onClick={() => {
                const sideBarCloser = document.getElementById("sidebar-menu");
                sideBarCloser.style.visibility = "hidden"
                sideBarCloser.style.left = "-250px"
              }} to="/">Home</NavLink>
              <NavLink className="navBarMobile" onClick={() => {
                 const sideBarCloser = document.getElementById("sidebar-menu");
                 sideBarCloser.style.visibility = "hidden"
                 sideBarCloser.style.left = "-250px"
              }} to="/projects">Projects</NavLink>
              <NavLink className="navBarMobile" onClick={() => {
                 const sideBarCloser = document.getElementById("sidebar-menu");
                 sideBarCloser.style.visibility = "hidden"
                 sideBarCloser.style.left = "-250px"               
              }} to="/about">About</NavLink>
              <NavLink className="navBarMobile" onClick={() => {
                 const sideBarCloser = document.getElementById("sidebar-menu");
                 sideBarCloser.style.visibility = "hidden"
                 sideBarCloser.style.left = "-250px"
              }} to="/rezume">Rezume</NavLink>
              <NavLink className="navBarMobile" onClick={() => {
                const sideBarCloser = document.getElementById("sidebar-menu");
                sideBarCloser.style.visibility = "hidden"
                sideBarCloser.style.left = "-250px"               
              }} to="/contact">Contact</NavLink>
          </header>
            <div id="overlay"></div>
              </nav>
            </label>


        </div>
        <Routes>
            <Route path="/" element={<HomePage changingMode={changingMode} />}/>
            <Route path="/rezume" element={<RezumePage changingMode={changingMode} />}/>
            <Route path="/projects" element={<ProjectsPage changingMode={changingMode} />}/>
            <Route path="/about" element={<AboutPage changingMode={changingMode} />}/>
            <Route path="/contact" element={<ContactPage changingMode={changingMode} />}/>
            <Route path="*" element={<NotFoundPage changingMode={changingMode} />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;



// checkbox-i valuen erb true-a sideBar-y baca erb falsy pag....
//petqa stugel ete navLink-i className-y active-a uremn petqa checkboxy sarqel false ete che che