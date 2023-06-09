import "./RezumePage.css";
import CV from "../Images/SeryozhaAsatryanCVimg.png";
import axios from "axios";

function RezumePage({ changingMode, outsideCloser }) {
  async function cvDownloadPDF() {
    try {
      const fileURL = process.env.PUBLIC_URL + '/SeryozhaAsatryanCV.pdf';
      const response = await axios.get(fileURL, {
        responseType: 'blob',
      });
      const blob = response.data;
      const fileURL3 = window.URL.createObjectURL(blob);
      let linkPDF = document.createElement('a');
      linkPDF.href = fileURL3;
      linkPDF.download = 'SeryozhaAsatryanCV.pdf';
      linkPDF.click();
    } catch (error) {
      console.log(error);
    }
  }

  async function cvDownloadPNG() {
    try {
      const fileURL2 = process.env.PUBLIC_URL + '/SeryozhaAsatryanCVimg.png';
      const response = await axios.get(fileURL2, {
        responseType: 'blob',
      });
      const blob = response.data;
      const fileURL23 = window.URL.createObjectURL(blob);
      let linkPNG = document.createElement('a');
      linkPNG.href = fileURL23;
      linkPNG.download = 'SeryozhaAsatryanCVimg.png';
      linkPNG.click();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className={changingMode === "light" ? "rezumePage" : "rezumePageDarkMode"}
      onClick={() => {
        outsideCloser();
      }}
    >
      <h1
        className={
          changingMode === "light" ? "pageTittle" : "pageTittleDarkMode"
        }
      >
        Rezume
      </h1>
      <span className="spanForRezume">
        Here is my CV, if you are interested, you can download it.
      </span>
      <div className="divForRezume">
        <img className="myCV" src={CV} alt="" />
      </div>
      <div
        className={
          changingMode === "light"
            ? "downloadButtons"
            : "downloadButtonsDarkMode"
        }
      >
        <button
          className={
            changingMode === "light" ? "downloadCV" : "downloadCVDarkMode"
          }
          onClick={cvDownloadPDF}
        >
          Download CV as PDF
        </button>
        <p>or</p>
        <button
          className={
            changingMode === "light" ? "downloadCV" : "downloadCVDarkMode"
          }
          onClick={cvDownloadPNG}
        >
          Download CV as PNG
        </button>
      </div>
    </div>
  );
}

export default RezumePage;
