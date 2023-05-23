import "./AboutPage.css";
import oldPC from "../Images/oldPC.png";
import coding from "../Images/coding.jpg";
import guitar from "../Images/guitar.jpg";
import chess from "../Images/chess.png";
import chooseMe from "../Images/chooseMe.jpeg";

function AboutPage({ changingMode, outsideCloser }) {
  return (
    <div
      className={changingMode === "light" ? "aboutPage" : "aboutPageDarkMode"}
      onClick={() => {
        outsideCloser();
      }}
    >
      <h1
        className={
          changingMode === "light" ? "pageTittle" : "pageTittleDarkMode"
        }
      >
        About Me
      </h1>

      <div
        className={
          changingMode === "light" ? "divForTwoSides" : "divForTwoSidesDarkMode"
        }
      >
        <div
          className={
            changingMode === "light"
              ? "aboutPageLeftSide"
              : "aboutPageLeftSideDarkMode"
          }
        >
          <div
            className={
              changingMode === "light" ? "infoForLeft" : "infoForLeftDarkMode"
            }
          >
            <img src={oldPC} alt="" />
            <span>
              <p>
                <b>MY OLD PC</b>
              </p>
              <br />
              Everything started when I was a child and got my first computer.
              It was an obscure device for me - I wanted to explore everything
              in it. And then my journey began - finding and losing, opening and
              closing, downloading and deleting, etc. And when I was a teenager,
              I fully realized that I wanted to master a profession that would
              be related to computers, creativity, innovation – and that was the
              programmer.
            </span>
          </div>
        </div>

        <div
          className={
            changingMode === "light"
              ? "aboutPageRightSide"
              : "aboutPageRightSideDarkMode"
          }
        >
          <div
            className={
              changingMode === "light" ? "infoForRight" : "infoForRightDarkMode"
            }
          >
            <img src={coding} alt="" />
            <span>
              <p>
                <b>CODING</b>
              </p>
              <br />
              My education path started at Relq school – lasted 6 months. It was
              full-stack development but for a start I chose front-end
              direction. After I finished it I continued my courses at Armenian
              Code Academy, which also lasted 6 months. Here I deepened my
              knowledge of JavaScript, then React.js. So now I'm skilled in
              HTML5, CSS3, JS/ES6, React.js, MUI, GIT, GitHub. Also familiar
              with Redux, MySQL, and JAVA (but want to learn Node.js).
            </span>
          </div>
        </div>

        <div
          className={
            changingMode === "light"
              ? "aboutPageLeftSide"
              : "aboutPageLeftSideDarkMode"
          }
        >
          <div
            className={
              changingMode === "light" ? "infoForLeft" : "infoForLeftDarkMode"
            }
          >
            <img src={chess} alt="" />
            <span>
              <p>
                <b>TO PLAY CHESS</b>
              </p>
              <br />A little information about my hobbies. At free time I play
              chess. I learned to play it at a young age but started playing
              regularly and has developed my skills since 2022. Once two of my
              friends gave a visit to me. I brought chess to play and since then
              I play chess almost every day. I don't have a degree in chess yet,
              but I think I will apply for it in the near future.
            </span>
          </div>
        </div>

        <div
          className={
            changingMode === "light"
              ? "aboutPageRightSide"
              : "aboutPageRightSideDarkMode"
          }
        >
          <div
            className={
              changingMode === "light" ? "infoForRight" : "infoForRightDarkMode"
            }
          >
            <img src={guitar} alt="" />
            <span>
              <p>
                <b>PLAY THE GUITAR</b>
              </p>
              <br />
              As I like to listen to music, I had to master in one of the
              musical instruments and that was the guitar. When I have some
              errors or bugs - playing guitar is the only thing that helps me to
              relax when I'm angry, nervous or not in mood – well, just kidding.
              It helps me to relax, refresh and get on with my work. Beside
              playing the guitar, just listening to it is so pleasing.
            </span>
          </div>
        </div>

        <div
          className={
            changingMode === "light"
              ? "aboutPageLeftSide"
              : "aboutPageLeftSideDarkMode"
          }
        >
          <div
            className={
              changingMode === "light" ? "infoForLeft" : "infoForLeftDarkMode"
            }
          >
            <img src={chooseMe} alt="" />
            <span>
              <p>
                <b>WHY YOU SHOULD HIRE ME ?</b>
              </p>
              <br />
              As a person I'm responsible, flexible, friendly, tolerant. I love
              to communicate with people and help everyone. I like to study,
              learn new skills, think, try hard and solve various problems,
              because I become more professional and competitive thanks to them.
              The amount of salary, working hours, and location are not
              important for me at the moment, but gaining work experience is. So
              I will be happy if you give me the opportunity to start my career
              right here, right with you.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
