import myJson from "./data.json" assert { type: "json" };

const imageContainer = document.querySelector(".image-container");

// Images Creator
function createSlider() {
  myJson.map((el, index) => {
    const slider = document.createElement("img");
    slider.setAttribute("src", `${el.url}`);
    slider.setAttribute("alt", `${el.name}`);
    slider.setAttribute("id", `${el.name}`);

    slider.classList.add("image");
    if (index === 0) {
      slider.classList.add("active");
    }
    return imageContainer.appendChild(slider);
  });
}
createSlider();

// Photo selector
function changePhoto() {
  const btns = document.querySelectorAll("span");
  const sliders = document.querySelectorAll("img");

  for (let i = 0; i < btns.length; i += 1) {
    btns[i].addEventListener("click", () => {
      const selectedSlider = document.getElementsByClassName("image")[i];
      const selectedButton = document.getElementsByClassName("dot")[i];

      sliders.forEach((slider) => slider.classList.remove("active", "fadeIn"));
      btns.forEach((btn) => btn.classList.remove("active"));

      selectedSlider.classList.add("active", "fadeIn");
      selectedButton.classList.add("active");
    });
  }
}

changePhoto();
