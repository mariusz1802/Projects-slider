import myJson from "./data.json" assert { type: "json" };

const imageContainer = document.querySelector(".image-container");

// Images Creator
// function createSlider() {
//   myJson.map((el) => {
//     const slider = document.createElement("img");
//     slider.setAttribute("src", `${el.url}`);
//     slider.setAttribute("alt", `${el.name}`);
//     slider.setAttribute("id", `${el.name}`);

//     slider.classList.add("image");
//     return imageContainer.appendChild(slider);
//   });
// }
// createSlider();

// Photo selector
function changePhoto() {
  const btns = document.querySelectorAll("button");
  const sliders = document.querySelectorAll("img");

  // for (let i = 0; i < btns.length; i += 1) {
  //   btns[i].addEventListener("click", () => {
  //     const selectedSlider = document.getElementsByClassName("image")[i];
  //     selectedSlider.classList.add("active");
  //     const current = document.getElementsByClassName("active");
  //     current[0].className = current[0].className.replace(" active", "");
  //   });
  // }

  btns.forEach((button) => {
    button.addEventListener("click", function () {
      sliders.forEach((slider) => slider.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

changePhoto();
