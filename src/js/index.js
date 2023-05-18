// import Swiper styles and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../css/style.css';

import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';

// import Swiper JS
import Swiper, { Pagination, Autoplay } from 'swiper';

// import ScrollReveal
import ScrollReveal from 'scrollreveal';

Alpine.plugin(intersect);
window.Alpine = Alpine;

Alpine.start();

// Testimonial
const testimonial01 = new Swiper('.testimonial-01', {
  // configure Swiper to use modules
  modules: [Pagination, Autoplay],
  loop: true,
  spaceBetween: 50,
  centeredSlides: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

/*========== SCROLL REVEAL ANIMATION ==========*/
window.sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    reset: false
});

sr.reveal(`.animate_top`, {
    origin: 'top',
    interval: 100,
})

sr.reveal(`.animate_left`, {
  origin: 'left',
  interval: 100,
});

sr.reveal(`.animate_right`, {
    origin: 'right',
    interval: 100,
})

// Document Loaded
document.addEventListener('DOMContentLoaded', () => {});

//Dark Mode
import { createApp } from 'vue';

// Initially set the dark mode to the user's preference
document.documentElement.classList.toggle('dark', window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

// Listen for changes to the user's preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    document.documentElement.classList.toggle('dark', e.matches);
});

// Your existing Vue.js logic for toggling dark mode
const app = {
  data() {
    return {
      darkMode: false,
      navigationOpen: false,
    }
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      document.documentElement.classList.toggle('dark', this.darkMode);
    }
  }
};

createApp(app).mount('#app');





