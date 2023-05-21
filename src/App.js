import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import NotFoundPage from "./components/NotFoundPage";
import ProjectsPage from "./components/ProjectsPage";
import RezumePage from "./components/RezumePage";
import { useEffect, useState } from "react";

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

  function outsideCloser() {
    const sideBarCloser = document.getElementById("sidebar-menu");
    sideBarCloser.style.visibility = "hidden"
    sideBarCloser.style.left = "-250px"
  }

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
              <button className={changingMode === "light" ? "moon" : "sun"} onClick={ darkAndLightMode } />
          </header>


            <label id="hamburger-menu" htmlFor="hamburger-input">
              <nav id="sidebar-menu">
                          <input type="checkbox" id="hamburger-input" onClick={() => {
                            const sdBarOpen = document.getElementById("sidebar-menu")
                            sdBarOpen.style.visibility = "visible"
                            sdBarOpen.style.left = "0"
                          }}/>
                      <div className="divForLogoMobile">
                             <p className="A">A</p><p className="S">S</p>
                      </div>
                    

          <header className="headerOfPagesMobile" >
              <NavLink className="navBarMobile" onClick={outsideCloser} to="/">Home</NavLink>
              <NavLink className="navBarMobile" onClick={outsideCloser} to="/projects">Projects</NavLink>
              <NavLink className="navBarMobile" onClick={outsideCloser} to="/about">About</NavLink>
              <NavLink className="navBarMobile" onClick={outsideCloser} to="/rezume">Rezume</NavLink>
              <NavLink className="navBarMobile" onClick={outsideCloser} to="/contact">Contact</NavLink>
          </header>
            <div id="overlay"></div>
              </nav>
            </label>


        </div>
        <Routes>
            <Route path="/" element={<HomePage changingMode={changingMode} outsideCloser={outsideCloser}/>}/>
            <Route path="/rezume" element={<RezumePage changingMode={changingMode} outsideCloser={outsideCloser}/>}/>
            <Route path="/projects" element={<ProjectsPage changingMode={changingMode} outsideCloser={outsideCloser}/>}/>
            <Route path="/about" element={<AboutPage changingMode={changingMode} outsideCloser={outsideCloser}/>}/>
            <Route path="/contact" element={<ContactPage changingMode={changingMode} outsideCloser={outsideCloser}/>}/>
            <Route path="*" element={<NotFoundPage changingMode={changingMode} outsideCloser={outsideCloser}/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;