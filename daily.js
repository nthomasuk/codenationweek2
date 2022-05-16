// function backwards(str) {
//     let newWord = "";
//     for (let i = str.length -1; i >= 0; i--) {
//         newWord += str[i];
//     }
//     console.log(newWord);
// }

// backwards('hello');

function backwards(str) {
    console.log(str.split("").reverse().join(""));
}
backwards("hello");
