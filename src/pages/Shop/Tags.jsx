const title = "Our Popular Tags";

const tagsList = [
  { link: "#", text: "electronics" },
  { link: "#", text: "fashion" },
  { link: "#", text: "shoes" },
  { link: "#", text: "camera" },
  { link: "#", text: "bags" },
  { link: "#", text: "home decor" },
  { link: "#", text: "accessories" },
  { link: "#", text: "gadgets" },
  { link: "#", text: "trending" },
];

const Tags = () => {
  return (
    <div className="widget widget-tags">
      <div className="widget-header">
        <h5 className="title">{title}</h5>
      </div>
      <ul className="widget-wrapper">
        {tagsList.map((val, i) => (
          <li key={i}>
            <a>{val.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
