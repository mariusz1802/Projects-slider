import myJson from './data.json' assert { type: 'json' };

const imageContainer = document.querySelector('.image-container');

// Images Creator
function createSlider() {
  myJson.map((el, index) => {
    const slider = document.createElement('img');
    slider.setAttribute('src', `${el.url}`);
    slider.setAttribute('alt', `${el.name}`);
    slider.setAttribute('id', `${el.name}`);

    slider.classList.add('image');
    if (index === 0) {
      slider.classList.add('active');
    }
    return imageContainer.appendChild(slider);
  });
}
createSlider();

const selectedSlider = document.getElementsByClassName('image');
const selectedButton = document.getElementsByClassName('dot');
const btns = document.querySelectorAll('span');
const sliders = document.querySelectorAll('img');

// Photo selector
function changePhoto() {
  for (let i = 0; i < btns.length; i += 1) {
    btns[i].addEventListener('click', () => {
      const oneSlider = selectedSlider[i];
      const oneButton = selectedButton[i];
      sliders.forEach((slider) => slider.classList.remove('active', 'fadeIn'));
      btns.forEach((btn) => btn.classList.remove('active'));
      oneSlider.classList.add('active', 'fadeIn');
      oneButton.classList.add('active');
    });
  }
}

changePhoto();

function sliderPlayer() {
  const btns = document.querySelectorAll('span');
  const sliders = document.querySelectorAll('img');
  let i = 0;
  setInterval(() => {
    const oneSlider = document.getElementsByClassName('image')[i];
    const oneButtonedButton = document.getElementsByClassName('dot')[i];
    sliders.forEach((slider) => slider.classList.remove('active', 'fadeIn'));
    btns.forEach((btn) => btn.classList.remove('active'));
    i += 1;
    if (i === 3) {
      i = 0;
    }
    selectedSlider.classList.add('active', 'fadeIn');
    selectedButton.classList.add('active');
  }, 4000);
}

// sliderPlayer();
