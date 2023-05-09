import "./AboutPage.css";
import oldPC from "../Images/oldPC.png"
import coding from "../Images/coding.jpg";
import guitar from "../Images/guitar.jpg"
import chess from "../Images/chess.png";
import chooseMe from "../Images/chooseMe.jpeg"

function AboutPage({ changingMode }) {
  return (
    <div
      className={changingMode === "light" ? "aboutPage" : "aboutPageDarkMode"}
    >
      <h1
        className={
          changingMode === "light" ? "pageTittle" : "pageTittleDarkMode"
        }
      >
        About Me
      </h1>

      <div className={changingMode === "light" ? "divForTwoSides" : "divForTwoSidesDarkMode"}>

        <div className={changingMode === "light" ? "aboutPageLeftSide" : "aboutPageLeftSideDarkMode"}>
          <div className={changingMode === "light" ? "infoForLeft" : "infoForLeftDarkMode"}>
            <img src={oldPC} alt="" />
            <span>
            <p><b>MY OLD PC</b></p>
            <br />
              Everything started when I was a child and got my first computer. It was an obscure device for me to want
              to explore everything in it and then it's began - finding and losting,
              opening and closing, downloading and deleting and etc.Keeping it all going
              իn adolescence I fully realized that I want to master a profession that will be related to computers, creativity, innovation -
               whic is a programmer.
            </span>
          </div>
        </div>

      {/* nkarneri chapsy darkmode-um petqa dzvi */}

        <div className={changingMode === "light" ? "aboutPageRightSide" : "aboutPageRightSideDarkMode"}>
          <div className={changingMode === "light" ? "infoForRight" : "infoForRightDarkMode"}>
            <img src={coding} alt="" />
            <span>
            <p><b>CODING</b></p>
            <br />
             After army I have benn studying web development. At RELQ school has started my studying for 6 months. It was full-stack development
             but for a start I chose front-end branch. Then finishing it I have continued my courses at Armenian Code Academy, also for 6 months.
             In ACA first 3 months I deepened my knowledge of JavaScript, after it React.js. So now I'm skilled in HTML5, CSS3, JS/ES6, React.js, MUI, GIT, GitHub.
             Also famialrity with Redux, MySQL, and JAVA (but want to learn Node.js).
            </span>
          </div>         
        </div>

        <div className={changingMode === "light" ? "aboutPageLeftSide" : "aboutPageLeftSideDarkMode"}>
          <div className={changingMode === "light" ? "infoForLeft" : "infoForLeftDarkMode"}>
            <img src={chess} alt="" />
            <span>
            <p><b>TO PLAY CHESS</b></p>
            <br />
              A little information about my hobbies.
              At free time I'm playing chess. I learned to play it at a young age but started regularly play and develop my skills since 2022 year.
              Two of my friends has hosted me, I brought chess to play and from there and it started. I don't have a degree in chess yet, but I think I will
              in the near future.
            </span>
          </div>
        </div>

        <div className={changingMode === "light" ? "aboutPageRightSide" : "aboutPageRightSideDarkMode"}>
          <div className={changingMode === "light" ? "infoForRight" : "infoForRightDarkMode"}>
            <img src={guitar} alt="" />
            <span>
            <p><b>PLAY THE GUITAR</b></p>
            <br />
              As I like to listen music, I have to master in one of  musical instruments and that was a guitar.
              Playing guitar the only one thing that can help me to relax me when I'm angry, nervous or not in myself, just kidding.
              Despite playing guitar  or just listening are sospleasent.
            </span>
          </div>         
        </div>

        <div className={changingMode === "light" ? "aboutPageLeftSide" : "aboutPageLeftSideDarkMode"}>
          <div className={changingMode === "light" ? "infoForLeft" : "infoForLeftDarkMode"}>
            <img src={chooseMe} alt="" />
            <span>
            <p><b>WHY YOU SHOULD HIRE ME ?</b></p>
            <br />
              As a human I'm responsible, accommodating, friendly, tolerant guy - who loves to communicate with people and help everyone.
              I like to study, learn new skills, think, suffer, and solve various problems, beacuse I see through them I become even more 
              powerful and competetive.
              The amount of salary, working hours, and location are not important for me at the moment, but gaining work experience is.
              So I will be happy if you give me the opportunity to start my career right here.
            </span>
          </div>
        </div>
      </div>
      </div>
  );
}

export default AboutPage;
