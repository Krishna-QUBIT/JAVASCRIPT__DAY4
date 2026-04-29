// let arr = [10, 20, 30];
// console.log("for...of");
// for (let v of arr) {
//     console.log(v);
// }
let language = "Java";
let text = "";
for (let x of language) {
  text += x + "<br>";
}
document.getElementById("demo").innerHTML = text;