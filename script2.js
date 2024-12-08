let key = "new car";
const user = {
  name: "Adi",
  age: 26,
  car: "i10",
  "new-car": 20, //מילה לא תקנית נעטוף בסטרינג
  [key]: {
    x: 10,
    y: 20,
  },
};
let KeyChoosed = prompt("what key do u want?");
console.log(user[KeyChoosed]);
user.age = 30;
console.log(user.age);

user.isAdmin = true; //יצרתי שדה שלא היה קיים
console.log(user.asdsa);

let x;
console.log(x); // undefined-ידפיס ללא ערך
function getNewUser(name = "Adi", age) {
  if (!name) {
    name = "Adi";
  }
  let user = {
    //"name": name,
    //age:age    // מפתח וערך
    //age:20  // אפשר להכניס ישר ערך
    age, // דרך נוספת, השפה מחפשת את הערך בקוד
    name,
    car: "tesla",
  };
  return user;
}
console.log(getNewUser(undefined, 32));

KeyChoosed in getNewUser; //שם המפתח, האם  קיים בתוך האובייקט
