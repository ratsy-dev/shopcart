import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "../../components/Sidebar/rating";
import ProductData from "../../products.json";
import img1 from "../../assets/images/shape-img/icon/01.png";
import img2 from "../../assets/images/shape-img/icon/02.png";

const title = "Our Products";

const CategoryShowCase = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const filtered = ProductData.filter((item) =>
      item.category.toLowerCase().startsWith("premier")
    );
    setItems(filtered);
  }, []);

  const filterItem = (categItem) => {
    const updateItems = ProductData.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItems(updateItems);
  };

  const setAllItems = () => {
    const filtered = ProductData.filter((item) =>
      item.category.toLowerCase().startsWith("premier")
    );
    setItems(filtered);
  };

  return (
    <div className="course-section style-3 padding-tb">
      <div className="course-shape one">
        <img src={img1} alt="education" />
      </div>
      <div className="course-shape two">
        <img src={img2} alt="education" />
      </div>
      <div className="container">
        {/* section header */}
        <div className="section-header">
          <h2 className="title">{title}</h2>
          <div className="course-filter-group">
            <ul className="lab-ul">
              <li onClick={() => setAllItems()}>All</li>
              <li onClick={() => filterItem("Premier Shoes")}>Shoes</li>
              <li onClick={() => filterItem("Premier Bags")}>Bags</li>
              <li onClick={() => filterItem("Premier IPhones")}>Phones</li>
              <li onClick={() => filterItem("Premier Designer Sunglasses")}>
                Sunglasses
              </li>
              <li onClick={() => filterItem("Premier Allen Solly Watches")}>
                Watches
              </li>
              <li onClick={() => filterItem("Premier Channel Perfumes")}>
                Perfumes
              </li>
            </ul>
          </div>
        </div>

        {/* section body */}
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
            {items.map((elem) => {
              const {
                id,
                category,
                img,
                name,
                price,
                quantity,
                ratings,
                ratingsCount,
                seller,
                shipping,
                stock,
              } = elem;
              return (
                <div style={{ height: "25rem" }} className="col" key={id}>
                  <div
                    style={{ height: "inherit" }}
                    className="course-item style-4"
                  >
                    <div style={{ height: "inherit" }} className="course-inner">
                      <div className="course-thumb">
                        <img
                          style={{ height: "18rem", objectFit: "cover" }}
                          src={img}
                          alt=""
                        />
                      </div>

                      {/* content  */}
                      <div className="course-content">
                        <Link to={`shop/${id}`}>
                          <h5>{name}</h5>
                        </Link>
                        <div className="course-footer">
                          <div className="course-author">
                            <Link to={`shop/${id}`} className="ca-name">
                              {seller}
                            </Link>
                          </div>
                          <div className="course-price">{price}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowCase;
