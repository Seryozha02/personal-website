import "./RezumePage.css"
import CV from "../Images/SeryozhaAsatryanCVimg.png"

function RezumePage({changingMode}) {

    function cvDownloadPDF() {
        fetch("SeryozhaAsatryanCV.pdf").then(response => {
            response.blob().then(blob2 => {
                const fileURL2 = window.URL.createObjectURL(blob2)
                let blink = document.createElement("a")
                blink.href = fileURL2
                blink.download = "SeryozhaAsatryanCV.pdf"
                blink.click()
            })
        })
    }


    function cvDownloadPNG() {
        fetch('SeryozhaAsatryanCVimg.png').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SeryozhaAsatryanCVimg.png';
                alink.click();
            })
        })
    }

    return (
        <div className={changingMode === "light" ? "rezumePage" : "rezumePageDarkMode"}>
            <h1 className={changingMode === "light" ? "pageTittle" : "pageTittleDarkMode"}>Rezume</h1>
            <span className="spanForRezume">Here is my CV, if you interested you can download it.</span>
            <div className="divForRezume">
                <img className="myCV" src={CV} alt="" />
            </div>
            <div className={changingMode === "light" ? "downloadButtons" : "downloadButtonsDarkMode"}>
                <button className="downloadCV" onClick={cvDownloadPDF}>Download CV as PDF</button>
                <p>or</p>
                <button className="downloadCV" onClick={cvDownloadPNG}>Download CV as PNG</button>
            <br />
            </div>
        </div>
    )
}

export default RezumePage;