import "./HomePage.css"
import SeryozhaAsatryan from "../Images/SeryozhaAsatryan.jpg"
import {Link, useNavigate} from 'react-router-dom';
import linkedInIcon from "../Images/linkedinIcon.png"
import githubIcon from "../Images/githubIcon.png"
import instagramIcon from "../Images/instagramIcon.png"


function HomePage({changingMode, outsideCloser}) {
  const projectNavigate = useNavigate()

  function navigateToProjects() {
    return projectNavigate("/projects")
  }

  return (
    <>
    <div className={changingMode === "light" ? "homePage" : "homePageDarkMode"}
    onClick={() => {
      outsideCloser()
  }}>
    <div>
        <h1 className={changingMode === "light" ? "pageTittle" : "pageTittleDarkMode"}>Home Page</h1>
      </div>
        
      <div className="homePageBothSides">
            <div className={changingMode === "light" ? "homePageLeftSide" : "homePageLeftSideDarkMode"}>
              <p>Hello everyone</p>
              <p>and welcome, I'm</p>
              <h1>Seryozha Asatryan</h1>
              <p>and a Front-End developer.</p>
                    <br />
              <span>
                This is my Web Site - created by me. <br /> 
                It will help you to get a lot of information about me.
              </span>
                <div className="divForButtons">
                    <button onClick={navigateToProjects}>See Projects</button> <br />
                    <Link to="https://www.linkedin.com/in/seryozha-asatryan-7a4267230/" target="_blank"><img src={linkedInIcon} alt="" /></Link>
                    <Link to="https://github.com/Seryozha02" target="_blank"><img src={githubIcon} alt="" /></Link>
                    <Link to="https://www.instagram.com/serozh_0801/?igshid=ZGUzMzM3NWJiOQ%3D%3D" target="_blank"><img src={instagramIcon} alt="" /></Link>                    
                </div>
            </div>

            <div className="homePageRightSide">
              <p className={changingMode === "light" ? "after850px" : "after850pxDarkMode"}>Hello everyone and welcome, it's <b> Seryozha Asatryan </b>and I'm a Front-End developer.</p>
                <img src={SeryozhaAsatryan} alt=""/>
            </div>
      </div> 
    </div>
      
    </>
  );
}

export default HomePage;
