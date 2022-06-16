const background = [
  "0.png",
  "1.png",
  "2.png",
];


const chosenImage = background[Math.floor(Math.random() * background.length)];

const bgImages = document.createElement("img");

bgImages.src = `img/${chosenImage}`;

document.body.appendChild(bgImages);