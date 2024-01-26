const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/IMG_3310.jpeg") {
    myImage.setAttribute("src", "images/DSC_0632_Original.JPG");
  } else {
    myImage.setAttribute("src", "images/IMG_3310.jpeg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


myButton.onclick = () => {
  setUserName();
};


function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to my website, ${myName}`;
  }
}