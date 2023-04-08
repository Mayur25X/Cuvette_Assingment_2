let number = Number(document.getElementById("number").innerText);
// const num = document.getElementById("number")
// console.log(typeof(num))

const IncreMent_by_One = () => {
  number += 1;
  document.getElementById("number").innerText = String(number);
  // console.log(number);
};
function decreMent_by_One() {
  number -= 1;
  document.getElementById("number").innerText = String(number);
  // console.log(number);
}
const IncreMent_by_five = () => {
  number += 5;
  document.getElementById("number").innerText = String(number);
  // console.log(number);
};
function decreMent_by_five() {
  number -= 5;
  document.getElementById("number").innerText = String(number);
  // console.log(number);
}

const Rest_Number = () => {number = 0 ; document.getElementById("number").innerText = 0;}

const Custom_In = () => {
    let num = document.querySelector("input").value;
    number += Number(num)
    document.getElementById("number").innerText = String(number);
};
const Custom_out = () => {
  let num = document.querySelector("input").value;
  number -= Number(num);
  document.getElementById("number").innerText = String(number);
};
