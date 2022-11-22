import { type NextPage, type GetStaticProps } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import CardItem from "../components/shared/card-item";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="mb-12 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] md:max-w-[75%] lg:max-w-[50%]">
        Platform cocok buat kalian para{" "}
        <span className="text-electric-pink-400">Wibu</span> Stress
      </h1>
      <h5 className="mb-4 text-xl text-electric-pink-400 underline-offset-4">
        Top Komik
      </h5>
      <Swiper
        slidesPerView={8}
        spaceBetween={20}
        breakpoints={{
          1024: {
            slidesPerView: 7,
          },
          768: {
            slidesPerView: 4,
          },
          640: {
            slidesPerView: 3,
          },
          320: {
            slidesPerView: 2,
          },
        }}
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <SwiperSlide key={i}>
            <CardItem />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Home",
    },
  };
};
