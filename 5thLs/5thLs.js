let a =
{
    name: "Xuanddat",
    age: 20
};
let b = 7;
console.log(a['age']);
document.writeln('hello my fen');
let language = "JavaScript";

let text = "";
for (let x of language) {
  text += x + "<br>"; // br means '\n'
}
function sum(a, b){
    return a*b;
}
console.log(sum(4, 5));
document.writeln(sum(10,10));
document.getElementById("demo").innerHTML = text;