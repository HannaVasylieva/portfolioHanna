import "./Projects.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

export const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects__text">My projects</h2>

      <Swiper
        spaceBetween={10}
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide>
          <img className="projects__img" src="e-store.jpg" alt="laptop" />
          <h2 className="projects__name">React E-Store</h2>
          <a
            className="projects__link"
            href="https://hannavasylieva.github.io/phone-catalog/"
            aria-label="online electronics store"
            target="_blank"
            rel="noreferrer"
          >
            👉DEMO
          </a>
          <a
            className="projects__link"
            href="https://github.com/HannaVasylieva/phone-catalog"
            aria-label="GitHub code"
            target="_blank"
            rel="noreferrer"
          >
            👉GitHub code
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <img className="projects__img" src="cosmetics.jpg" alt="cosmetics" />
          <h2 className="projects__name">Evergreen-essense</h2>
          <a
            className="projects__link"
            href="https://evergreen-essense.netlify.app/"
            aria-label="Online beauty store"
            target="_blank"
            rel="noreferrer"
          >
            👉DEMO
          </a>
          <a
            className="projects__link"
            href="https://github.com/HannaVasylieva/beauty-shop-frontend"
            aria-label="GitHub code"
            target="_blank"
            rel="noreferrer"
          >
            👉GitHub code: Frontend
          </a>
          <a
            className="projects__link"
            href="https://github.com/HannaVasylieva/beauty-shop-backend"
            aria-label="GitHub code"
            target="_blank"
            rel="noreferrer"
          >
            👉GitHub code: Backend
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <img className="projects__img" src="portfolioqa.jpg" alt="laptop" />
          <h2 className="projects__name">Portfolio for QA engineer</h2>
          <a
            className="projects__link"
            href="https://serhiivasylievqa.netlify.app/"
            aria-label="Portfolio for QA engineer"
            target="_blank"
            rel="noreferrer"
          >
            👉DEMO
          </a>
          <a
            className="projects__link"
            href="https://github.com/HannaVasylieva/serhiivasylievqa"
            aria-label="GitHub code"
            target="_blank"
            rel="noreferrer"
          >
            👉GitHub code
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <img className="projects__img" src="soundscape.jpg" alt="music" />
          <h2 className="projects__name">SoundScape SPA</h2>
          <a
            className="projects__link"
            href="https://hannavasylieva.github.io/bose-layout/"
            aria-label="SoundScape SPA"
            target="_blank"
            rel="noreferrer"
          >
            👉DEMO
          </a>
          <a
            className="projects__link"
            href="https://github.com/HannaVasylieva/bose-layout"
            aria-label="GitHub code"
            target="_blank"
            rel="noreferrer"
          >
            👉GitHub code
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <img className="projects__img" src="double-game.jpg" alt="phone" />
          <h2 className="projects__name">Double-up game in Javascript</h2>
          <a
            className="projects__link"
            href="https://hannavasylieva.github.io/2048-game/"
            aria-label="Double-up game on Javascript"
            target="_blank"
            rel="noreferrer"
          >
            👉DEMO
          </a>
          <a
            className="projects__link"
            href="https://github.com/HannaVasylieva/2048-game"
            aria-label="GitHub code"
            target="_blank"
            rel="noreferrer"
          >
            👉GitHub code
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <img className="projects__img" src="rocket.png" alt="phone" />
          <h2 className="projects__name">Rocket launch app</h2>
          <a
            className="projects__link"
            href="https://neo-rocket-app.vercel.app/"
            aria-label="Double-up game on Javascript"
            target="_blank"
            rel="noreferrer"
          >
            👉DEMO
          </a>
          <a
            className="projects__link"
            href="https://github.com/HannaVasylieva/neo-rocketApp"
            aria-label="GitHub code"
            target="_blank"
            rel="noreferrer"
          >
            👉GitHub code
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <img className="projects__img" src="soundwawe.jpg" alt="girl" />
          <h2 className="projects__name">Online store (SPA)</h2>
          <a
            className="projects__link"
            href="https://hannavasylieva.github.io/kickstarter-layout/"
            aria-label="Online store (SPA)"
            target="_blank"
            rel="noreferrer"
          >
            👉DEMO
          </a>
          <a
            className="projects__link"
            href="https://github.com/HannaVasylieva/kickstarter-layout"
            aria-label="GitHub code"
            target="_blank"
            rel="noreferrer"
          >
            👉GitHub code
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
