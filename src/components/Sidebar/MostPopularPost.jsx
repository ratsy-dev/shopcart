import React from "react";

const title = "Most Popular Posts";

const postList = [
  {
    id: "blog-1",
    imgUrl: "/src/assets/images/blog/10.jpg",
    imgAlt: "Shopping Tips",
    title: "Top 10 Money-Saving Hacks for Online Shopping",
    date: "Jan 12, 2025",
  },
  {
    id: "blog-2",
    imgUrl: "/src/assets/images/blog/11.jpg",
    imgAlt: "Gadgets Review",
    title: "5 Must-Have Gadgets Under ₹1999 in 2025",
    date: "Jan 10, 2025",
  },
  {
    id: "blog-3",
    imgUrl: "/src/assets/images/blog/12.jpg",
    imgAlt: "Fashion Trends",
    title: "Latest Fashion Trends You Shouldn’t Miss",
    date: "Jan 08, 2025",
  },
  {
    id: "blog-4",
    imgUrl: "/src/assets/images/blog/09.jpg",
    imgAlt: "Shopping Guide",
    title: "Beginner’s Guide to Choosing Quality Products Online",
    date: "Jan 05, 2025",
  },
];

const MostPopularPost = () => {
  return (
    <div className="widget widget-post">
      <div className="widget-header">
        <h5 className="title">{title}</h5>
      </div>

      <ul className="widget-wrapper">
        {postList.map((blog) => (
          <li
            className="d-flex flex-wrap justify-content-between"
            key={blog.id}
          >
            <div className="post-thumb">
              <img src={blog.imgUrl} alt={blog.imgAlt} />
            </div>

            <div className="post-content">
              <h6>{blog.title}</h6>
              <p>{blog.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostPopularPost;
