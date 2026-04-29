const now = new Date();

console.log("Full Date:", now);
console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1); // 0-based
console.log("Date:", now.getDate());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());

document.write("Full Date:", now);
document.write("<br>");
document.write("Year:", now.getFullYear());
document.write("<br>");
document.write("Month:", now.getMonth() + 1); // 0-based
document.write("<br>");
document.write("Date:", now.getDate());
document.write("<br>");
document.write("Hours:", now.getHours());
document.write("<br>");
document.write("Minutes:", now.getMinutes());
document.write("<br>");
document.write("Seconds:", now.getSeconds());
document.write("<br>");

 const date = new Date();

//MM/DD/YYYY
let usFormat = (date.getMonth() + 1) + "/" + (date.getDate()-3) + "/" + date.getFullYear();

//DD/MM/YYYY
let indiaFormat =(date.getDate()+3) + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

document.write("US Format:", usFormat);
document.write("<br>");

document.write("India Format:", indiaFormat);

const today = new Date();
console.log("Width: " + screen.width);
console.log("Height: " + screen.height);
console.log("Available Width: " + screen.availWidth);
console.log("Available Height: " + screen.availHeight);