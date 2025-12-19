import React from "react";

const Merchant = () => {
  return (
    <div
      style={{
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingTop: "20rem",
      }}
    >
      <img
        src="https://media.istockphoto.com/id/1139968862/photo/barrier-under-construction.webp?a=1&b=1&s=612x612&w=0&k=20&c=erI3sd-_UQsTEtKM2iZiKHWHPXg9dQprzhitRPJfVjM="
        alt="Under Construction"
        style={{ width: "300px", marginBottom: "20px" }}
      />
      <h2>Become a Merchant</h2>
      <p style={{ maxWidth: "500px", color: "#555" }}>
        This page is currently under construction. We're building something
        amazing for our partners 🚀
      </p>
    </div>
  );
};

export default Merchant;
