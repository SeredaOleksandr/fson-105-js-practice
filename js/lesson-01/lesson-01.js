// TODO 1 ========================================
// Розгалуження: if, if...else, else...if

// Даний рядок, що складається із символів, наприклад, "abcde".
// Перевірте, що першим символом цього рядка є буква "a".
// Якщо це так - виведіть "так", інакше виведіть "ні".
// str - це рядок!!!

// const str = "abcde";
// if (str.startsWith("a")) {
//     console.log("так");
// } else {
//     console.log("ні");
// }

// str.startsWith("a") ? console.log("так") : console.log("ні"); // Тернарний вигляд

// TODO 2 ========================================
// Якщо і'я містить більше 4 літер і прізвище більше 5, то виведи на екран число, яке дорівнює сумі літер імені та прізвища.
// Якщо умова не виконується - вивести "неможливо виконати умову".
// Наприклад: "Віктор Сташко". Віктор - 6 літер, Сташко - 6 літер. Виводимо - 12.
// Використовувати вбудований метод length.

// const firstName = "Віктор";
// const lastName = "Сташко";
// const totalLeters = firstName.length + lastName.length;

// if (firstName.length > 4 && lastName.length > 5) {
//     console.log(totalLeters);
// } else {
//     console.log("неможливо виконати умову");
// }

// firstName.length > 4 && lastName.length > 5
//   ? console.log(totalLeters)
//   : console.log('неможливо виконати умову');  // Тернарний варіант

// TODO 3 ========================================
// Написати скрипт, який перевіряє, чи введене число через promt потрапляє в діапазон: від 55 до 99 включно.
// Якщо так - вивести в консоль "Число потрапляє в діапазон".
// Якщо ні - вивести в консоль "Число не потрапляє в діапазон".

// const num = prompt("Enter number");

// if (num >= 55 && num <= 99) {
//     alert("Число потрапляє в діапазон");
// } else {
//     alert("Число не потрапляє в діапазон");
// }

// num >= 55 && num <= 99
//     ? alert("Число потрапляє в діапазон")
//     : alert("Число не потрапляє в діапазон");  // Тернарний варіант

// TODO 4 ========================================
// Є вікові групи: діти (0-16), дорослі (16-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років. Назву групи виведи на екран.

// const ageMaxym = 55;

// if (ageMaxym >= 0 && ageMaxym <= 16) {
//     console.log("Діти");
// } else if (ageMaxym > 16 && ageMaxym <= 60) {
//     console.log("Дорослі");
// } else if (ageMaxym > 60 && ageMaxym <= 100) {
//     console.log("Пенсіонери");
// } else {
//     console.log("Error");
// }

// TODO 5 ========================================
// Конструкція switch
// Запитай користувача у модальному вікні, який з напоїв він бажає придбати - "Кава", "Чай" чи "Сік",
// та залежно від виду напою, оголоси досплати. Використовувати switch.

// const drink = (prompt("Choise drink")).toLowerCase();

// function orderDrink(drinkName) {
//   let price;
//   switch (drinkName) {
//     case 'coffe':
//       price = 40;
//       break;

//     case 'tea':
//       price = 25;
//       break;

//     case 'juce':
//       price = 30;
//       break;

//     default:
//       alert("Error")
//   }
//   return `Your order total price: ${price} UAH`;
// }

// alert(orderDrink(drink));

// TODO 6 ========================================
// Напишіть цикл, який пропонує ввести число більше 100 через promt.
// Якщо відвідувач ввів інше число - попроси ввести ще раз і так далі.
// Цикл має питати число, роки відвідувач не введе число більше 100,
// або натисне кнопку скасування в promt.

// let number = Number(prompt("Число більше 100"));
// console.log("Number", number);

// while (Number(number) < 100 && !isNaN(number)) {
//   number = Number(prompt("Число більше 100"));
// }

// do {                                            // Ду - хоч 1 раз виконається
//   if (number === null) {
//     alert("Cancel");
//     break;
//   }
//   number = Number(prompt("Число більше 100"));
// } while (Number(number) < 100);

// let i = 1;

// while (i <= 100) {
//   console.log(i);
//   i += 1;           //  можна - i++
// }

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// TODO 7 ========================================
// Знайдіть число 49 у проміжку чисел від 1 до 100 та виведіть з циклу.

// const targetNumber = 49;

// for (let i = 0; i <= 100; i++) {
//   if (i === targetNumber) {
//     console.log(i);
//     break;
//   }

  // if (i !== targetNumber) {
  //   continue;                  // Але "continue" цикл не зупиняє, тому краще з "break"
  // }
  // console.log(i);
// }


// TODO 8 ========================================
// Виведіть методом console.log() зірочки, від 1 до 7 штук у вигляді трикутника таким чином.
// *
// **
// ***
// ****
// *****

// let star = "*"

// for (let i = 1; i <= 7; i += 1) {
//   console.log(star);
//   star += "*";
// }


// TODO 9 ========================================
// Порахуйте суму чисел від 12 до 27.

// const minNum = 12;
// const maxNum = 27;
// let sumNum = 0;

// for (let i = minNum; i <= maxNum; i++) {
//   console.log(`${sumNum} + ${i} = ${sumNum + i}`); // Прикольний вивід підрухунків.
//   sumNum += i;
// }

// console.log("sum", sumNum);

// TODO 10 ========================================
// Якщо число ділиться на 3 повертає "fizz",
// якщо ділиться на 5 - повертає "buzz".
// Якщо ділиться на 3 і на 5 - повертає "fizzbuzz"

// function checkNumber(num) {
//   for (let i = 1; i <= num; i++) {
    // if (i % 3 === 0 && i % 5 === 0) {
    //   console.log("fizzbuzz");
    // } else if (i % 5 === 0) {
    //   console.log("buzz");
    // } else if (i % 3 === 0) {
    //   console.log("fizz");
    // } else {
    //   console.log(i);
    // }

    // варіант 2
//     let str = "";
//     if (i % 3 === 0) {
//       str += "fizz";
//     }

//     if (i % 5 === 0) {
//       str += "buzz";
//     }

//     console.log(str || i);
//   }
// }

// checkNumber(30);

function getSlice(array, value) {

  return 
}

console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));
console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));
console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));
console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey"));