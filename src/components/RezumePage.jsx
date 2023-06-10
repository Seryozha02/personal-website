import "./RezumePage.css";
import CV from "../Images/SeryozhaAsatryanCVimg.png";

function RezumePage({ changingMode, outsideCloser }) {
 function cvDownloadPDF() {
    const fileURL = process.env.PUBLIC_URL + "/SeryozhaAsatryanCV.pdf";
    const providedTime = new Date().getTime();

    fetch(`${fileURL}?v=${providedTime}`)
      .then((response) => response.blob())
      .then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let linkPDF = document.createElement("a");
        linkPDF.href = fileURL;
        linkPDF.download = "SeryozhaAsatryanCV.pdf";
        linkPDF.click();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function cvDownloadPNG() {
    const fileURL2 = process.env.PUBLIC_URL + "/SeryozhaAsatryanCVimg.png";
    const providedTime2 = new Date().getTime();

    fetch(`${fileURL2}?v=${providedTime2}`)
      .then((response) => response.blob())
      .then((blob) => {
        const fileURL2 = window.URL.createObjectURL(blob);
        let linkPNG = document.createElement("a");
        linkPNG.href = fileURL2;
        linkPNG.download = "SeryozhaAsatryanCVimg.png";
        linkPNG.click();
      })
      .catch((error2) => {
        console.log(error2);
      });
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
