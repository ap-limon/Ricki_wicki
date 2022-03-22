import "./index.scss";

const main = document.querySelector('.main');

const firstHeading = () => {
    return "<h1>You got what you deserved.</h1>"
}

main.innerHTML = firstHeading();
console.log("you got me");