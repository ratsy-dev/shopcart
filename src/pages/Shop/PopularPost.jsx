import { Link } from "react-router-dom";

const title = "Most Popular Post";
import img1 from "/src/assets/images/blog/10.jpg";
import img2 from "/src/assets/images/blog/11.jpg";
import img3 from "/src/assets/images/blog/12.jpg";
import img4 from "/src/assets/images/blog/09.jpg";

const postList = [
  {
    id: 1,
    imgUrl: img1,
    imgAlt: "rajibraj91",
    title: "Poor People Campaign Our Resources",
    date: "Jun 05,2022",
  },
  {
    id: 2,
    imgUrl: img2,
    imgAlt: "rajibraj91",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05,2022",
  },
  {
    id: 3,
    imgUrl: img3,
    imgAlt: "rajibraj91",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05,2022",
  },
  {
    id: 4,
    imgUrl: img4,
    imgAlt: "rajibraj91",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05,2022",
  },
];

const PopularPost = () => {
  return (
    <div className="widget widget-post">
      <div className="widget-header">
        <h5 className="title">{title}</h5>
      </div>
      <ul className="widget-wrapper">
        {postList.map((blog, i) => (
          <li className="d-flex flex-wrap justify-content-between" key={i}>
            <div className="post-thumb">
              <Link to={`/blog/${blog.id}`}>
                <img src={`${blog.imgUrl}`} alt={`${blog.imgAlt}`} />
              </Link>
            </div>
            <div className="post-content">
              <Link to={`/blog/${blog.id}`}>
                <h6>{blog.title}</h6>
              </Link>
              <p>{blog.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularPost;
