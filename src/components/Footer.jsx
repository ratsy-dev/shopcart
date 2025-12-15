/* eslint-disable react/jsx-no-target-blank */

import { Link } from "react-router-dom";

const title = "About ShopCart";
const desc =
  "ShopCart is your trusted online shopping destination, offering a wide range of quality products at unbeatable prices. We focus on a smooth, simple, and secure shopping experience—anytime, anywhere.";
const ItemTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";

const addressList = [
  {
    iconName: "icofont-google-map",
    text: "Mumbai, India.",
  },
  {
    iconName: "icofont-phone",
    text: "+91 7039704083",
  },
  {
    iconName: "icofont-envelope",
    text: "info@shopcart.com",
  },
];

const socialList = [
  {
    iconName: "icofont-facebook",
    siteLink: "#",
    className: "facebook",
  },
  {
    iconName: "icofont-twitter",
    siteLink: "#",
    className: "twitter",
  },
  {
    iconName: "icofont-linkedin",
    siteLink: "#",
    className: "linkedin",
  },
  {
    iconName: "icofont-instagram",
    siteLink: "#",
    className: "instagram",
  },
  {
    iconName: "icofont-pinterest",
    siteLink: "#",
    className: "pinterest",
  },
];

const ItemList = [
  {
    text: "All Products",
    link: "/shop",
  },
  {
    text: "Shop",
    link: "/shop",
  },
  {
    text: "Blog",
    link: "/blog",
  },
  {
    text: "About",
    link: "/about",
  },
];

const tweetList = [
  {
    iconName: "icofont-twitter",
    desc: (
      <p>
        Raghav Nayak @ShopCart Greetings! Grab your item, 50% Big Sale Offer !!
      </p>
    ),
  },
  {
    iconName: "icofont-twitter",
    desc: (
      <p>Rajan Nayak @ShopCart Hey! Grab your item, 50% Big Sale Offer !!</p>
    ),
  },
  {
    iconName: "icofont-twitter",
    desc: (
      <p>
        Shreyansh Nayak @ShopCart Hey! Grab your item, 100% Kid's Sale Offer !!
      </p>
    ),
  },
  {
    iconName: "icofont-twitter",
    desc: (
      <p>Smita Nayak @ShopCart Hey! Grab your item, 90% Big Sale Offer !!</p>
    ),
  },
  {
    iconName: "icofont-twitter",
    desc: (
      <p>Urvika Nayak @ShopCart Hey! Grab your item, 90% Big Sale Offer !!</p>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="style-2">
      <div className="footer-top dark-view padding-tb">
        <div className="container">
          <div className="row g-4 row-cols-xl-3 row-cols-sm-2 row-cols-1 justify-content-center text-center">
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{title}</h4>
                    </div>
                    <div className="content">
                      <p>{desc}</p>
                      <ul className="lab-ul office-address">
                        {addressList.map((val, i) => (
                          <li key={i}>
                            <i className={val.iconName}></i>
                            {val.text}
                          </li>
                        ))}
                      </ul>
                      <ul
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "10px",
                        }}
                        className="lab-ul social-icons"
                      >
                        {socialList.map((val, i) => (
                          <li key={i}>
                            <Link
                              to="#"
                              onClick={() => {
                                setTimeout(() => {
                                  window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                  });
                                }, 5);
                              }}
                            >
                              <i className={val.iconName}></i>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{ItemTitle}</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul">
                        {ItemList.map((val, i) => (
                          <li key={i}>
                            <a href={val.link}>{val.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item twitter-post">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{tweetTitle}</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul">
                        {tweetList.map((val, i) => (
                          <li key={i}>
                            <i className={val.iconName}></i>
                            {val.desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="section-wrapper">
            <p>
              &copy; 2025{" "}
              <Link
                to="#"
                onClick={() => {
                  setTimeout(() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }, 5);
                }}
              >
                Shop Cart
              </Link>{" "}
              Designed by{" "}
              <a href="https://github.com/ratsy-dev/shopcart" target="_blank">
                Raghav Nayak
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
