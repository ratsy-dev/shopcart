// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import img1 from "../../assets/images/sponsor/01.png";
import img2 from "../../assets/images/sponsor/02.png";
import img3 from "../../assets/images/sponsor/03.png";
import img4 from "../../assets/images/sponsor/04.png";
import img5 from "../../assets/images/sponsor/05.png";
import img6 from "../../assets/images/sponsor/06.png";

const sponsorList = [
  { imgUrl: img1 },
  { imgUrl: img2 },
  { imgUrl: img3 },
  { imgUrl: img4 },
  { imgUrl: img5 },
  { imgUrl: img6 },
];

const Sponsor = () => {
  return (
    <div
      style={{
        padding: "6rem 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      className="sponsor-section section-bg"
    >
      <h3 style={{ marginBottom: "4rem", fontWeight: "600" }}>Sponsored By</h3>

      <div style={{ width: "100%" }}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1200: { slidesPerView: 6 },
          }}
        >
          {sponsorList.map((val, i) => (
            <SwiperSlide key={i}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <img
                  src={val.imgUrl}
                  alt="sponsor"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "70px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Sponsor;
