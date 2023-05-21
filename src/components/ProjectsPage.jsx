import "./ProjectsPage.css";
import gitHubUsersInfo from "../Images/gitHubUsersInfo.png";
import qrScanner from "../Images/qrCodeScanner.png";
import qrGenerator from "../Images/qrCodeGenerator.png";
import weatherApp from "../Images/weatherApp.png";
import locationApp from "../Images/locationApp.png";
import webWork from "../Images/webWork.png";
import emojiSearcher from "../Images/emojiSearcher.png";
import toDoList from "../Images/toDoReact.png";
import diagram from "../Images/diagramReact.png";
import photosSearcher from "../Images/photosSearcher.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function ProjectsPage({changingMode, outsideCloser}) {
  const texts = [
    "This project will help you to get any cities weather around the world and not only weather,or you can just get device's location's weather.",
    "Location App I created based on weather App, by this project I wanted to get info about device's location, and in this photo is my device's location. ",
    "This one is for generating an any QR Code with some info, it's can be everything that you will want - text, number, link etc.",
    "The previous project was Qr Code Generator and I couldn't create a project for scanning it, and here is - you should to download a photo of QR Code and that's it, project will show you the info inside it.",
    "GitHub's users searcher is one of my first projects, you need to write an any GitHub user's name and after it you will get info about they.",
    "This is a real clone of Web Work web-site. In photo is so little information about project. It's bigger than it looks, so check the source code.  ",
    "Emoji Searcher I created after finishing my courses of React.js and wanted to create any project and found it for an example, so I did it.",
    "This is famous and popular To-Do List. I created it with JS too, but beacuse I like to work with React.js -  it's in list of React Projects.",
    "Through Photo Searcher you can get photo about everything, you should to write a word and click on Search button.",
    "For this project I used a charts from chartjs.org and by API I got nformation about list of deaths due to covid in LA.",
  ];

  const [showMore, setShowMore] = useState([]);
  const maxLetter = 37;

  function showMoreOrLess(index) {
    const newShowMore = [...showMore];
    newShowMore[index] = !newShowMore[index];
    setShowMore(newShowMore);
  }

  return (
    <div className={changingMode === "light" ? "divForProjectsPage" : "divForProjectsPageDarkMode"} onClick={() => {
      outsideCloser()
  }}>
      <h1 className={changingMode === "light" ? "pageTittle" : "pageTittleDarkMode"}>Projects</h1>
      <div className={changingMode === "light" ? "projectsBothSides" : "projectsBothSidesDarkMode"}>
        <div className={changingMode === "light" ? "projectLeftSide" : "projectLeftSideDarkMode"}>
          <h1>Projects created by JavaScript</h1>

          <div>
            <p>Weahter App</p>
            <img src={weatherApp} alt="" />
            <span>
              {showMore[0] ? texts[0] : `${texts[0].slice(0, maxLetter)} ...`}
              <button onClick={() => showMoreOrLess(0)}>
                {showMore[0] ? "less" : "more"}
              </button>
            </span>
            <Link
              className={changingMode === "light" ? "sourceCodeButton" : "sourceCodeButtonDarkMode"}
              to="https://github.com/Seryozha02/Weather-App.git"
              target="_blank"
            >
              Click for source code
            </Link>
          </div>

          <div>
            <p>Location App</p>
            <img src={locationApp} alt="" />
            <span>
              {showMore[1] ? texts[1] : `${texts[1].slice(0, maxLetter)} ...`}
              <button onClick={() => showMoreOrLess(1)}>
                {showMore[1] ? "less" : "more"}
              </button>
            </span>
            <Link
              className={changingMode === "light" ? "sourceCodeButton" : "sourceCodeButtonDarkMode"}
              to="https://github.com/Seryozha02/location-app"
              target="_blank"
            >
              Click for source code
            </Link>
          </div>

          <div>
            <p>QR Code Generator</p>
            <img src={qrGenerator} alt="" />
            <span>
              {showMore[2] ? texts[2] : `${texts[2].slice(0, maxLetter)} ...`}
              <button onClick={() => showMoreOrLess(2)}>
                {showMore[2] ? "less" : "more"}
              </button>
            </span>
            <Link
              className= {changingMode === "light" ? "sourceCodeButton" : "sourceCodeButtonDarkMode"}
              to="https://github.com/Seryozha02/QR-Code-Generator"
              target="_blank"
            >
              Click for source code
            </Link>
          </div>

          <div>
            <p>QR Code Scanner</p>
            <img src={qrScanner} alt="" />
            <span>
              {showMore[3] ? texts[3] : `${texts[3].slice(0, maxLetter)} ...`}
              <button onClick={() => showMoreOrLess(3)}>
                {showMore[3] ? "less" : "more"}
              </button>
            </span>
            <Link
              className={changingMode === "light" ? "sourceCodeButton" : "sourceCodeButtonDarkMode"}
              to="https://github.com/Seryozha02/QR-Code-Scanner"
              target="_blank"
            >
              Click for source code
            </Link>
          </div>

          <div>
            <p>GitHub's Users Searcher</p>
            <img src={gitHubUsersInfo} alt="" />
            <span>
              {showMore[4] ? texts[4] : `${texts[4].slice(0, maxLetter)} ...`}
              <button onClick={() => showMoreOrLess(4)}>
                {showMore[4] ? "less" : "more"}
              </button>
            </span>
            <Link
              className={changingMode === "light" ? "sourceCodeButton" : "sourceCodeButtonDarkMode"}
              to="https://github.com/Seryozha02/GitHubUsersInfo"
              target="_blank"
            >
              Click for source code
            </Link>
          </div>
        </div>

        <div className={changingMode === "light" ? "projectsRightSide" : "projectsRightSideDarkMode"}>
          <h1>Projects created by React.js</h1>

          <div>
            <p>Web Work Clone</p>
            <img src={webWork} alt="" />
            <span>
              {showMore[5] ? texts[5] : `${texts[5].slice(0, maxLetter)} ...`}
              <button onClick={() => showMoreOrLess(5)}>
                {showMore[5] ? "less" : "more"}
              </button>
            </span>
            <Link
              className={changingMode === "light" ? "sourceCodeButton" : "sourceCodeButtonDarkMode"}
              to="https://github.com/Seryozha02/WebWorkClone.git"
              target="_blank"
            >
              Click for source code
            </Link>
          </div>

          <div>
            <p>Emoji Searcher</p>
            <img src={emojiSearcher} alt="" />
            <span>
              {showMore[6] ? texts[6] : `${texts[6].slice(0, maxLetter)} ...`}
              <button onClick={() => showMoreOrLess(6)}>
                {showMore[6] ? "less" : "more"}
              </button>
            </span>
            <Link
              className={changingMode === "light" ? "sourceCodeButton" : "sourceCodeButtonDarkMode"}
              to="https://github.com/Seryozha02/EmojiSearcher.git"
              target="_blank"
            >
              Click for source code
            </Link>
          </div>

          <div>
            <p>To-Do List</p>
            <img src={toDoList} alt="" />
            <span>
              {showMore[7] ? texts[7] : `${texts[7].slice(0, maxLetter)} ...`}
              <button onClick={() => showMoreOrLess(7)}>
                {showMore[7] ? "less" : "more"}
              </button>
            </span>
            <Link
              className={changingMode === "light" ? "sourceCodeButton" : "sourceCodeButtonDarkMode"}
              to="https://github.com/Seryozha02/ToDo-Project.git"
              target="_blank"
            >
              Click for source code
            </Link>
          </div>

          <div>
            <p>Photos Searcher</p>
            <img src={photosSearcher} alt="" />
            <span>
              {showMore[8] ? texts[8] : `${texts[8].slice(0, maxLetter)} ...`}
              <button onClick={() => showMoreOrLess(8)}>
                {showMore[8] ? "less" : "more"}
              </button>
            </span>
            <Link
              className={changingMode === "light" ? "sourceCodeButton" : "sourceCodeButtonDarkMode"}
              to="https://github.com/Seryozha02/PhotosSearcher.git"
              target="_blank"
            >
              Click for source code
            </Link>
          </div>

          <div>
            <p>Diagram</p>
            <img src={diagram} alt="" />
            <span>
              {showMore[9] ? texts[9] : `${texts[9].slice(0, maxLetter)} ...`}
              <button onClick={() => showMoreOrLess(9)}>
                {showMore[9] ? "less" : "more"}
              </button>
            </span>
            <Link
              className={changingMode === "light" ? "sourceCodeButton" : "sourceCodeButtonDarkMode"}
              to="https://github.com/Seryozha02/Diagram.git"
              target="_blank"
            >
              Click for source code
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
