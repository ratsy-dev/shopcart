// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const sponsorList = [
  { imgUrl: "/src/assets/images/sponsor/01.png" },
  { imgUrl: "/src/assets/images/sponsor/02.png" },
  { imgUrl: "/src/assets/images/sponsor/03.png" },
  { imgUrl: "/src/assets/images/sponsor/04.png" },
  { imgUrl: "/src/assets/images/sponsor/05.png" },
  { imgUrl: "/src/assets/images/sponsor/06.png" },
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
