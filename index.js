'use strict';

const currentYear = `<time>
  &copy; ${new Date().getFullYear()}</time>
  <span>Created with passion by Paw - All Rights Reserved
</span>`;

document.querySelector(".copyright").innerHTML = currentYear;
