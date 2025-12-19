import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import img1 from "../assets/images/clients/avater.jpg";

const title = (
  <h2 className="title">
    More Then <span className="yellow-color">60,000</span> Customers
  </h2>
);

const desc =
  "Buy products on any device with our app and enjoy shopping the way you want. Just download, install, and start shopping!";

const clientsList = [
  {
    imgUrl: img1,
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: img1,
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: img1,
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: img1,
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: img1,
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: img1,
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: img1,
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
];

const LocationSprade = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="clients-section style-2 padding-tb">
      <div className="container">
        <div className="section-header text-center">
          {title}
          <p>{desc}</p>
        </div>

        <div className="section-wrapper">
          <div className="clients">
            {clientsList.map((val, i) => (
              <div className="client-list" key={i}>
                {/* If user logged in → Dealership page, else → Login */}
                <Link
                  to={user ? "/dealership" : "/login"}
                  className="client-content"
                >
                  <span>{val.text}</span>
                </Link>

                <div className="client-thumb">
                  <img src={val.imgUrl} alt={val.imgAlt} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSprade;
