import React from "react";
import PageHeader from "../../components/PageHeader";
import img1 from "../../assets/images/about/icon/01.jpg";
import img2 from "../../assets/images/about/icon/02.jpg";
import img3 from "../../assets/images /about/icon/03.jpg";
import img4 from "../../assets/images/about/01.jpg";
import img5 from "../../assets/images/about/02.jpg";

const subTitle = "About ShopCart";
const title = "Your Trusted Destination for Quality Shopping";
const desc =
  "At ShopCart, we bring you a seamless, secure, and enjoyable online shopping experience. From trendy fashion and durable gadgets to everyday essentials — we deliver products you love with unbeatable service.";

const year = "10+";
const experience = "Years Of Experiences";

const aboutList = [
  {
    imgUrl: img1,
    imgAlt: "Fast Delivery Icon",
    title: "Fast & Reliable Delivery",
    desc: "We ensure quick and safe delivery to your doorstep with real-time tracking.",
  },
  {
    imgUrl: img2,
    imgAlt: "Secure Payment Icon",
    title: "Secure Payments",
    desc: "Your transactions are protected with advanced security and encrypted gateways.",
  },
  {
    imgUrl: img3,
    imgAlt: "Customer Support Icon",
    title: "24/7 Customer Support",
    desc: "Our dedicated support team is always ready to help you with queries and concerns.",
  },
];

const About = () => {
  return (
    <div>
      <PageHeader title={"About Our Brand"} curPage={"About"} />
      <div className="about-section style-3 padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
            <div className="col">
              <div className="about-left">
                <div className="about-thumb">
                  <img src={img4} alt="about" />
                </div>
                <div className="abs-thumb">
                  <img src={img5} alt="about" />
                </div>
                <div className="about-left-content">
                  <h3>{year}</h3>
                  <p>{experience}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="about-right">
                <div className="section-header">
                  <span className="subtitle">{subTitle}</span>
                  <h2 className="title">{title}</h2>
                  <p>{desc}</p>
                </div>
                <div className="section-wrapper">
                  <ul className="lab-ul">
                    {aboutList.map((val, i) => (
                      <li key={i}>
                        <div className="sr-left">
                          <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                        </div>
                        <div className="sr-right">
                          <h5>{val.title}</h5>
                          <p>{val.desc}</p>
                        </div>
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
  );
};

export default About;
