import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import './scripts/mobile-menu';
import './scripts/skills';
import './scripts/job';
import './scripts/parallax';
import './scripts/reviews';
import './scripts/scroll';
import Validate from './scripts/form';

const form = document.querySelector('.j-form');

if (form) {
  const validate = new Validate({
    element: '.j-form'
  });

  validate.init();
}