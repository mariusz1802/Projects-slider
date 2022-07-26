import myJson from "./data.json" assert { type: "json" };

const imageContainer = document.querySelector(".image-container");

function getAttributes() {
  myJson.map((el) => {
    const attributes = {
      name: `${el.name}`,
      alt: `${el.name}`,
      url: `${el.url}`,
    };

    return attributes;
  });
}

function setAttributes(element, attributes) {
  Object.keys(attributes).forEach((attr) => {
    element.setAttribute(attr, attributes[attr]);
  });
}

function sliderCreator() {
  const slider = document.createElement("img");
  // slider.setAttribute("src", `${el.url}`);
  // slider.setAttribute("alt", `${el.name}`);
  // slider.setAttribute("id", `${el.name}`);
  slider.classList.add("image");
  setAttributes(slider, getAttributes);

  return imageContainer.appendChild(slider);
}
sliderCreator();
