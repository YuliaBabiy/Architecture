import '../scss/style.scss';

import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm';

new Glide('.glide', {
  type: 'carousel',
  perView: 2,
  focusAt: 'center',
  breakpoints: {
    600: {
      perView: 1
    },
    480: {
      perView: 1
    }
  }
  // perView: 1,
  // peek: 100,
  // gap: 0,
}).mount({ Controls, Breakpoints });