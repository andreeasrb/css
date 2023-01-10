console.log('Hello!');

/** FLEXBOX */
const switcher = document.querySelector('#switcher');
const container = document.querySelector('#container');

switcher.addEventListener('change', (evt) => {
  container.style.flexDirection = evt.target.value;
});
