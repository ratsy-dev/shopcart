const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        className="spinner-border"
        style={{ width: "3rem", height: "3rem" }}
      ></div>
    </div>
  );
};

export default Loader;
