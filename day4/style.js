// let btn = document.createElement("button");
// btn.textContent = "click";
// console.log(btn);
// btn.setAttribute("onclick", "color()");

// document.body.append(btn);
// var colors = true;
// function color() {
//   colors = !colors;
//   btn.setAttribute("style", `background-color:${colors ? "red" : "white"}`);
// }
function randomColor() {
  var divColor = "";
  for (let i = 1; i <= 6; i++) {
    let random = Math.floor(Math.random() * 16);

    divColor += random.toString(16);
  }
  console.log(divColor);

  return divColor;
}

function fun() {
  let color = `${randomColor()}`;
  let change = document.getElementById("colorChange");
  change.style.background = `${"#"}` + color;
  let list = document.getElementById("colorlist");
  let listitem = document.createElement("li");
  listitem.textContent = color;
  list.appendChild(listitem);
}
