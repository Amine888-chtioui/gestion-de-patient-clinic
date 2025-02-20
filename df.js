/*   DAY 1   */

/*let user = {
  name: "amine",
  age: 25,
  email: "chtiouiamine82@gmail.com",
};

console.log(user);

let amine = [10, 20, 30, 25, 100];
let maxNumber = Math.max(...amine);

console.log("le plus grand number est ", maxNumber);

  DAY 2   */
/* 
let users = ["amine", "walid", "ilyass", "yasser"];
users.forEach((num) => console.log("le nom est : ", num));

let price = [10, 20, 16, 19, 53];
let nvprice = price.map((lon) => console.log((lon * 10) / 100));
*/
/*
let age = 10;
if (age <= 18) {
  console.log("vous pouvez pas d'acceder");
} else console.log("okkk");

let ven = [1, 2, 3, 4];
let ad = ven.map((don) => console.log(don ** 2));
*/

/*Spread opearter*/
let fruit = ["banana", "orange", "frize", "apple"];
let vegeur = ["batata", "tomato", "onyon"];
console.log(...fruit, ...vegeur);
console.log(...fruit, ...vegeur, "lavoca");

/*Rest opearter*/

function fofo(nom, prenom, ...per) {
  console.log(nom);
  console.log(prenom);
  console.log(per);
}
fofo("amine", "chtioui", 12, "ms", "g.i");
