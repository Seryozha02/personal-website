import { Link } from "react-router-dom";
import IDK from "../Images/IDK.png";
import "./NotFoundPage.css"

function NotFoundPage({changingMode, outsideCloser}) {
  return (
    <div className={changingMode === "light" ? "notFoundPage" : "notFoundPageDarkMode"}
    onClick={() => {
      outsideCloser()
  }}>
      <h1
        className={
          changingMode === "light" ? "pageTittle" : "pageTittleDarkMode"
        }
      >
        This Page is not found. Please go to <Link to="/">Home</Link> Page
      </h1>

      <div>
        <img className="IDK" src={IDK} alt="" />
      </div>
    </div>
  );
}

export default NotFoundPage;
