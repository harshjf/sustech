import SwiperCore, {
  A11y,
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  HashNavigation,
  History,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  Virtual,
} from "swiper";

SwiperCore.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
  Pagination,
  HashNavigation,
  History,
  Thumbs,
  Scrollbar,
  Keyboard,
  A11y,
]);

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const sliderProps = {
  heroSlider: {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    parallax: true,
    loop: true,
    navigation: {
      prevEl: ".swiper-nav-prev",
      nextEl: ".swiper-nav-next",
    },
  },
};
