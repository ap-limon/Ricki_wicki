import "./index.scss";
import * as heading from "./heding";
import * as pBody from "./pBody";

const main = document.querySelector('.main');

const content = () => {
    return `${heading.h1}${pBody.p}`
}

main.innerHTML = content();

heading.simpleLog();
pBody.simpleLog();

console.log('you got me nice');

console.log("I have been looking for if the clean plugin is working well");