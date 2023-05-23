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
    "This app will help you to get weather for any city around the world. And not only weather. You can also get the weather of your device location without any efforts.",
    "I created this app based on the Weather app. With this you can get info about your device's location. The photo shows my device's location.",
    "This one is for generating any QR code with some info. It can be everything you want – text, number, link, etc.",
    "As I created QR code generator I couldn’t help myself and not to create also a QR scanner. You just need to download a photo of QR code and that's it! The app will show you all the info inside it.",
    "GitHub's user’s searcher is one of my first projects. You need to input any GitHub's user's name and after it you will get info about them.",
    "This is a real clone of Web Work web-site. The photo above shows just a bit of the info about the project. It's bigger than it looks, so check the source code.",
    "I created Emoji Searcher after finishing my courses of React.js. just to practice my knowledge.",
    "This is the famous and popular To-Do List. I have created this with JS before. But as I like and prefer working with React.js, I made one more with React.js.",
    "With the Photo Searcher you can find any image you want. You just need to write down the word and click on the Search button.",
    "I used charts from Chartjs.org for this project and I got the list of deaths due to covid in LA with API.",
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
