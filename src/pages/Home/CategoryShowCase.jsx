import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "../../components/Sidebar/rating";
import ProductData from "../../products.json";

const title = "Our Products";

// const ProductData = [
//   {
//     imgUrl: "src/assets/images/categoryTab/01.jpg",
//     cate: "Shoes",
//     title: "Nike Premier X",
//     author: "assets/images/course/author/01.jpg",
//     brand: "Nike",
//     price: "$199.00",
//     id: "hd202411",
//   },
//   {
//     imgUrl: "src/assets/images/categoryTab/02.jpg",
//     cate: "Bags",
//     title: "Asthetic Bags",
//     author: "assets/images/course/author/02.jpg",
//     brand: "D&J Bags",
//     price: "$199.00",
//     id: "hd202411",
//   },
//   {
//     imgUrl: "src/assets/images/categoryTab/03.jpg",
//     cate: "Phones",
//     title: "iPhone 12",
//     author: "src/assets/images/categoryTab/brand/apple.png",
//     brand: "Apple",
//     price: "$199.00",
//     id: "hd202412",
//   },
//   {
//     imgUrl: "src/assets/images/categoryTab/04.jpg",
//     cate: "Bags",
//     title: "Hiking Bag 15 Nh100",
//     author: "assets/images/course/author/04.jpg",
//     brand: "Gucci",
//     price: "$199.00",
//     id: "hd202413",
//   },
//   {
//     imgUrl: "src/assets/images/categoryTab/05.jpg",
//     cate: "Shoes",
//     title: "Outdoor Sports Shoes",
//     author: "assets/images/course/author/05.jpg",
//     brand: "Nike",
//     price: "$199.00",
//     id: "hd202414",
//   },
//   {
//     imgUrl: "src/assets/images/categoryTab/06.jpg",
//     cate: "Beauty",
//     title: "COSRX Snail Mucin",
//     author: "assets/images/course/author/06.jpg",
//     brand: "Zaara",
//     price: "$199.00",
//     id: "hd202415",
//   },
//   {
//     imgUrl: "src/assets/images/categoryTab/07.jpg",
//     cate: "Bags",
//     title: "Look Less Chanel Bag ",
//     author: "assets/images/course/author/01.jpg",
//     brand: "Gucci",
//     price: "$199.00",
//     id: "hd202416",
//   },
//   {
//     imgUrl: "src/assets/images/categoryTab/08.jpg",
//     cate: "Shoes",
//     title: "Casual Sneakers",
//     author: "assets/images/course/author/02.jpg",
//     brand: "Bata",
//     price: "$199.00",
//     id: "hd202417",
//   },
// ];

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
        <img src="/src/assets/images/shape-img/icon/01.png" alt="education" />
      </div>
      <div className="course-shape two">
        <img src="/src/assets/images/shape-img/icon/02.png" alt="education" />
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
