const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/anh-cua-toi-2.jpg") {
    myImage.setAttribute("src", "images/anh-cua-toi.jpg");
  } else {
    myImage.setAttribute("src", "images/anh-cua-toi-2.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

myButton.addEventListener("click", () => {
  setUserName();
});
