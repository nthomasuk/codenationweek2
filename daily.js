// function backwards(str) {
//     let newWord = "";
//     for (let i = str.length -1; i >= 0; i--) {
//         newWord += str[i];
//     }
//     console.log(newWord);
// }

// backwards('hello');

// function backwards(str) {
//     console.log(str.split("").reverse().join(""));
// }
// backwards("hello");

const stringArr = [
    "a",
    "aa",
    "aaa",
    "aaaaa",
    "aaaa"
]

longestString = stringArr.reduce((a, b) => a.length > b.length ? a : b, "");
console.log(longestString); 



