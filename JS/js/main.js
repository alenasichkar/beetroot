// let name = prompt('Введите Ваш логин');

// if (name == 'Админ') {
//     password = prompt('Введите пароль');
//     console.log(password);
// }
// else if (name == null) {
//     alert ('Вход отменен');
//     console.log(name);
// }
// else {
//     alert('Я Вас не знаю');
//     console.log(name);
// }

// if (password =='Чёрный Властелин') {
//     alert('Добро пожаловать!');
//     console.log(password);
// }
// else if (password == null) {
//     alert('Вход отменён');
//     console.log(password);
// }
// else {
//     alert('Пароль неверен');
//     console.log(password);
// }

// function numberInput() {
//     let numberCustom = prompt("Number");
//     let numberBasic = 100;

//     if(numberCustom !== null) {
//         if (numberCustom / 1 == numberCustom) {
//             if(numberCustom > numberBasic) {
//                 console.log("OK");
//             } else {
//                 numberInput();
//             }
//         } else {
//             console.log("Input NaN");
//         }
//     } else {
//         console.log("Closed");
//     }     
// }
// numberInput();


let num1 = prompt("Input First Number!");
let num2 = prompt("Input Second Number!");
let simple = 0;
let ostatok;

console.log(`Num1: ${num1}, num2: ${num2}`);

if(num1 !== null || num2 !== null) {
    if (num1 > num2) {
        console.log("number1 > number2")
    } else {
        for(let j = num1; j != num2; j++) {
            let i = 2;
            //console.log(`j ${i}`); 
            if(j == 1) {
                simple = 0;
            } else if(j == 2) {
                simple = 0;
            } else {                   
                while(i != (j - 1)) {
                    ostatok = j % i;
                    //console.log(`                    i ${i}`);
                    i++;
                    if (ostatok == 0) {
                        simple = 1;
                        break;
                    } 
                }
            }
            simple == 0 ? console.log(`${j} - is SIMPLE`) : console.log(`${j} - NOT a simple`);
            simple = 0;
        } 
    }
} else {
    console.log("Closed");
}