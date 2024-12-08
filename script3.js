//task2 (27 עמוד )
function isEmpty(obj) {
  for (let key in obj) {
    console.log(key);
    return false;
  }
  return true;
}
console.log(isEmpty({ name: "Adi" }));
console.log(isEmpty({}));
//?

//task2 (28 עמוד )
let salaries = {
  rotem: 10,
  matan: 50,
};
let sum = 0;
for (let name in salaries) {
  const salary = salaries[name];
  //sum =sum+salary
  sum += salary;
}
console.log(sum);

//task2 (29 עמוד )
function multiplyNumeric(obj) {
  for (let name in obj) {
    const value = obj[key];
    if (typeof value === "number") {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "hi",
};
console.log(menu);
multiplyNumeric(menu);
console.log(menu);
