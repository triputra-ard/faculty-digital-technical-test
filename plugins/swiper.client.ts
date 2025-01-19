// plugins/swiper.ts
import { defineNuxtPlugin } from "#app";
import Swiper, { SwiperOptions } from "swiper";
import "swiper/css";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      createSwiper: (selector: string, options: SwiperOptions) => {
        return new Swiper(selector, {
          ...options,
        });
      },
    },
  };
});
