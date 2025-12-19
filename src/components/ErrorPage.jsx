import { Link } from "react-router-dom";

const title = "Error 404!";
const desc = "Oops! The Page You Are Looking For Could Not Be Found";
const btnText = "Go Back To Home";
import img1 from "../assets/images/logo/logo.png";
import img2 from "../assets/images/404.png";

const ErrorPage = () => {
  return (
    <div className="four-zero-section padding-tb section-bg">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="four-zero-content">
              <Link to="/">
                <img src={img1} alt="CodexCoder" />
              </Link>
              <h2 className="title">{title}</h2>
              <p>{desc}</p>
              <Link to="/" className="lab-btn">
                <span>
                  {btnText} <i className="icofont-external-link"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-8 col-sm-6 col-12">
            <div className="foue-zero-thumb">
              <img src={img2} alt="CodexCoder" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
