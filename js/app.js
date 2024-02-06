const arr = [];
let length;

while (true) {
    length = parseInt(prompt("Enter array length"));

    if (isNaN(length)) {
        alert('Wrong input! The length must be an integer. Try again!');
    } else {
        break;
    }
}

for (let i = 0; i < length; i++) {
    let value = prompt(`Enter value ${i + 1}`);
    arr.push(value);
}

alert('Your array: ' + arr.join(', '));

alert('Your array is sorted in ascending order: ' + arr.sort((a, b) => a-b));

if (length < 5) {
    alert('Game over! You can start again!');
} else {
    arr.splice(2, 3);
    alert("Guess what's missing!: " + arr);
}
