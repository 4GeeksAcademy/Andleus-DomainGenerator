/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let showConsole = document.querySelector("#showConsole");

  let result = "";
  let resultForConsole = "";
  let cookingResult = "";

  let arra1 = ["the", "our"];
  let arra2 = ["great", "big"];
  let arra3 = ["jogger", "racoon"];
  let arra4 = [".com", ".net", "us", ".io", "es"];

  cookingResult = arra1.flatMap(a1 =>
    arra2.flatMap(a2 => arra3.flatMap(a3 => arra4.map(a4 => a1 + a2 + a3 + a4)))
  );

  for (let i of cookingResult) {
    result += `${i}<br>`;
  }

  for (let i of cookingResult) {
    resultForConsole += `${i}\n`;
  }

  showConsole.innerHTML = result;
  console.log(resultForConsole);
};
