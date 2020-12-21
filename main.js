const imageSrcList = [
  "./asset/phone2-1.png",
  "./asset/phone3-1.png",
  "./asset/phone1-1.png",
];

const phoneImageElement = document.querySelector(".main-phone-image");

const circleButtonList = document.querySelectorAll(".circle-button__item");

const learnButton = document.querySelector(".specific-button");

for (let i = 0; i < circleButtonList.length; i++) {
  const circleButton = circleButtonList[i];
  circleButton.addEventListener("click", function () {
    phoneImageElement.src = imageSrcList[i];
  });
}

const hamberger = document.querySelector(".hamberger");
const sideMenu = document.querySelector(".side-menu");
const backdrop = document.querySelector(".backdrop");

console.dir(backdrop);

hamberger.addEventListener("click", function () {
  sideMenu.style.display = "block";
  backdrop.style.display = "block";
});

backdrop.addEventListener("click", function () {
  sideMenu.style.display = "none";
  backdrop.style.display = "none";
});

const imageList = [
  {
    mainImage: "./asset/image_06_l.png",
    mainText: `It's not just coffee 01`,
    subOneImage: "./asset/image_07_s.png",
    subOneText: `It's not just coffee 02`,
    subTwoImage: "./asset/image_08_s.png",
    subTwoText: `It's not just coffee 03`,
  },
  {
    mainImage: "./asset/image_07_l.png",
    mainText: `It's not just coffee 02`,
    subOneImage: "./asset/image_08_s.png",
    subOneText: `It's not just coffee 03`,
    subTwoImage: "./asset/image_06_s.png",
    subTwoText: `It's not just coffee 01`,
  },
  {
    mainImage: "./asset/image_08_l.png",
    mainText: `It's not just coffee 03`,
    subOneImage: "./asset/image_06_s.png",
    subOneText: `It's not just coffee 01`,
    subTwoImage: "./asset/image_07_s.png",
    subTwoText: `It's not just coffee 02`,
  },
];

let currentIdx = 0;

const changeButtons = document.querySelectorAll(".change-button-list__item");

const partFourMainImage = document.querySelector(".part-four-main div");
const partFourMainText = document.querySelector(".part-four-main h1");
const partFourSubOneImage = document.querySelector(".part-four-sub__one div");
const partFourSubOneText = document.querySelector(".part-four-sub__one h3");
const partFourSubTwoImage = document.querySelector(".part-four-sub__two div");
const partFourSubTwoText = document.querySelector(".part-four-sub__two h3");

changeButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    partFourMainImage.style.backgroundImage = `url(${imageList[index].mainImage})`;
    partFourMainText.textContent = imageList[index].mainText;
    partFourSubOneImage.style.backgroundImage = `url(${imageList[index].subOneImage})`;
    partFourSubOneText.textContent = imageList[index].subOneText;
    partFourSubTwoImage.style.backgroundImage = `url(${imageList[index].subTwoImage})`;
    partFourSubTwoText.textContent = imageList[index].subTwoText;
    currentIdx = index;
  });
});

const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");

leftButton.addEventListener("click", function () {
  if (currentIdx === 0) currentIdx = 2;
  else {
    currentIdx -= 1;
  }
  partFourMainImage.style.backgroundImage = `url(${imageList[currentIdx].mainImage})`;
  partFourMainText.textContent = imageList[currentIdx].mainText;
  partFourSubOneImage.style.backgroundImage = `url(${imageList[currentIdx].subOneImage})`;
  partFourSubOneText.textContent = imageList[currentIdx].subOneText;
  partFourSubTwoImage.style.backgroundImage = `url(${imageList[currentIdx].subTwoImage})`;
  partFourSubTwoText.textContent = imageList[currentIdx].subTwoText;
});

rightButton.addEventListener("click", function () {
  if (currentIdx === 2) currentIdx = 0;
  else {
    currentIdx += 1;
  }
  partFourMainImage.style.backgroundImage = `url(${imageList[currentIdx].mainImage})`;
  partFourMainText.textContent = imageList[currentIdx].mainText;
  partFourSubOneImage.style.backgroundImage = `url(${imageList[currentIdx].subOneImage})`;
  partFourSubOneText.textContent = imageList[currentIdx].subOneText;
  partFourSubTwoImage.style.backgroundImage = `url(${imageList[currentIdx].subTwoImage})`;
  partFourSubTwoText.textContent = imageList[currentIdx].subTwoText;
});
