import myJson from "./data.json" assert { type: "json" };

const imageContainer = document.querySelector(".image-container");

function sliderCreator() {
  myJson.map((el, index) => {
    const slider = document.createElement("img");
    slider.setAttribute("src", `${el.url}`);
    slider.setAttribute("alt", `${el.name}`);
    slider.setAttribute("id", `${el.name}`);
    slider.setAttribute("z-index", `${index}`);
    slider.classList.add("image");
    return imageContainer.appendChild(slider);
  });
}
sliderCreator();

const btns = document.getElementsByClassName("dot");

for (let i = 0; i < btns.length; i += 1) {
  btns[i].addEventListener("click", () => {});
}
