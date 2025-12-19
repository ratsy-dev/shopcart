import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Rating from "./Sidebar/rating";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthProvider";
import img1 from "../assets/images/instructor/01.jpg";
import img2 from "../assets/images/instructor/02.jpg";
import img3 from "../assets/images/instructor/03.jpg";

const reviwtitle = "Add a Review";

let DefaultReviews = [
  {
    imgUrl: img1,
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 20, 2025 at 20:57 pm",
    desc: "Enthusiast build innovative initiatives before longterm high-impact themes.",
    rating: 4,
  },
  {
    imgUrl: img2,
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 15, 2025 at 9:00 am",
    desc: "Innovative initiatives before longterm high-impact awesome theme SEO.",
    rating: 5,
  },
];

const Review = () => {
  const { user } = useContext(AuthContext);

  // ACTIVE TAB — "description" or "reviews"
  const [activeTab, setActiveTab] = useState("description");

  // REVIEWS STATE
  const [reviews, setReviews] = useState(DefaultReviews);

  // FORM DATA
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: 5,
  });

  // Load reviews from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("reviews");
    if (stored) {
      setReviews(JSON.parse(stored));
    } else {
      setReviews(DefaultReviews);
    }
  }, []);

  // Save reviews into localStorage
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  // Form change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Review
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required ❌");
      return;
    }

    const newReview = {
      imgUrl: img3,
      imgAlt: "Client thumb",
      name: formData.name,
      date: new Date().toLocaleString(),
      desc: formData.message,
      rating: formData.rating,
    };

    setReviews([newReview, ...reviews]);

    toast.success("Review added successfully 🎉");

    setFormData({
      name: "",
      email: "",
      message: "",
      rating: 5,
    });
  };

  return (
    <>
      {/* TABS */}
      <ul className="review-nav lab-ul">
        <li
          onClick={() => setActiveTab("description")}
          className={activeTab === "description" ? "active" : ""}
        >
          Description
        </li>

        <li
          onClick={() => setActiveTab("reviews")}
          className={activeTab === "reviews" ? "active" : ""}
        >
          Reviews ({reviews.length})
        </li>
      </ul>

      {/* CONTENT WRAPPER — CSS decides what is shown */}
      <div
        className={`review-content ${
          activeTab === "reviews" ? "review-content-show" : "description-show"
        }`}
      >
        {/* ================= REVIEWS TAB ================= */}
        {activeTab === "reviews" && (
          <div className="review-showing">
            <ul className="content lab-ul">
              {reviews.map((review, i) => (
                <li key={i}>
                  <div className="post-thumb">
                    <img src={review.imgUrl} alt={review.imgAlt} />
                  </div>

                  <div className="post-content">
                    <div className="entry-meta">
                      <div className="posted-on">
                        <a href="#">{review.name}</a>
                        <p>{review.date}</p>
                      </div>

                      <Rating value={review.rating} />
                    </div>

                    <div className="entry-content">
                      <p>{review.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* ADD REVIEW FORM */}
            {user ? (
              <div className="client-review">
                <div className="review-form">
                  <div className="review-title">
                    <h5>{reviwtitle}</h5>
                  </div>

                  <form className="row" onSubmit={handleSubmit}>
                    <div className="col-md-4 col-12">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-4 col-12">
                      <input
                        type="text"
                        name="email"
                        placeholder="Your Email *"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-4 col-12">
                      <div className="rating">
                        <span className="rating-title">Your Rating : </span>
                        <select
                          name="rating"
                          value={formData.rating}
                          onChange={handleChange}
                          style={{
                            padding: "5px",
                            borderRadius: "6px",
                            cursor: "pointer",
                          }}
                        >
                          <option value="5">⭐⭐⭐⭐⭐</option>
                          <option value="4">⭐⭐⭐⭐</option>
                          <option value="3">⭐⭐⭐</option>
                          <option value="2">⭐⭐</option>
                          <option value="1">⭐</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-12 col-12">
                      <textarea
                        rows="8"
                        name="message"
                        placeholder="Type Here Message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <button className="default-button">
                        <span>Submit Review</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div style={{ padding: "5rem 0" }} className="text-center">
                <p className="text-danger fw-bold">Login to add a review 🔒</p>
                <Link to="/login" className="lab-btn">
                  <span>Login Now</span>
                </Link>
              </div>
            )}
          </div>
        )}

        {/* ================= DESCRIPTION TAB ================= */}
        {activeTab === "description" && (
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="post-item">
              <div className="post-thumb"></div>
              <div className="post-content">
                <ul className="lab-ul">
                  <li>Donec non est at libero vulputate rutrum.</li>
                  <li>Morbi ornare lectus quis justo gravida semper.</li>
                  <li>Pellentesque aliquet sem eget laoreet.</li>
                  <li>
                    Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id
                    nulla.
                  </li>
                  <li>Donec a neque libero.</li>
                  <li>Pellentesque aliquet, sem eget laoreet ultrices.</li>
                  <li>Morbi ornare lectus quis justo gravida semper..</li>
                </ul>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Review;
