
//задача 1

const createStudent = {
  firstName: "Jyldyz",
  lastName: "Turdubaeva",
  age: "17",
  education: {
    university: "Peaksoft Moscow",
    faculty: "JS",
    gpa: "55",
  },
  sayHello: () => {
    console.log("Turdubaeva Jyldyz");
  },
};
console.log(createStudent);

//задача 2

function deleteKey(object, key) {
  if (key in object) {
    delete object[key];
    return object;
  } else {
    return `Ключ ${key} отсутствует в объекте`;
  }
}

const obj = { name: "Jyldyz", age: 17, city: "Moscow" };

console.log(deleteKey(obj, "age"));
console.log(deleteKey(obj, "country"));

//задача 3

const user = {
  name: "Jiko",
  email: "Jiko@email.com",
  age: "18",
  password: "888888",
};

let sum = 5;

let userEmail = prompt("Введите ваш email:");

if (userEmail !== user.email) {
  alert("Извините, такого email не существует");
} else {
  let userPassword = prompt("Введите ваш пароль:");

  if (userPassword !== user.password) {
    alert("Неверный пароль");
  } else {
    let userAnswer = prompt("2 + 3 = ?");

    if (parseInt(userAnswer) === sum) {
      user.sum = 5;
      alert(`Верно! Ваша премия = ${user.sum}`);
    } else {
      alert("Неправильный ответ");
    }
  }
}
