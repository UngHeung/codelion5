let answer = Math.floor(Math.random() * 100);
// ~~(Math.random()*100)
let count = 0;

for (;;) {
    let userInput = parseInt(window.prompt("값을 입력해주세요!"));
    if (answer > userInput) {
        window.alert("UP!");
    } else if (answer < userInput) {
        window.alert("DOWN!");
    } else {
        window.alert("Correct!");
        break;
    }
    count += 1;
}

console.log(`${count}번째 맞추셨습니다!`);

let user = [
    {
        _id: "642e3071c61a23c70ae6076b",
        index: 0,
        age: 31,
        name: "Hicks Garza",
        gender: "male",
    },
    {
        _id: "642e3071ecd6f90a87d64731",
        index: 1,
        age: 32,
        name: "Ayers Harrington",
        gender: "male",
    },
    {
        _id: "642e3071cef9ddc131f047fb",
        index: 2,
        age: 39,
        name: "Lamb Adams",
        gender: "male",
    },
];

let total = 0;
for (let i = 0; i < user.length; i++) {
    total += user[i].age;
}
console.log(total / user.length);
