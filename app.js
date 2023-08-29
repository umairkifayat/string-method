

// let myName = 'MuHAmmAd ABduLlah KhAn';
// let myName = prompt('enter your sentence');
// console.log(myName.slice(0 , 1))
// let nameArr = myName.split(' ');
// console.log(nameArr);
// console.log(nameArr[1]);
// let result = [];
// for (let i = 0; i < nameArr.length; i++) {
    // console.log(nameArr[i].slice(0 , 1));
//     let firstLetter = nameArr[i].slice(0 , 1).toUpperCase();
//     let lastLetter = nameArr[i].slice(1).toLowerCase();
//     let completeLetter = firstLetter + lastLetter;
//     result.push(completeLetter);
// }

// console.log(result.join(' '));
let nameArr = prompt("Enter Your name here")
let myname = "umair kifayat thakur";
// console.log(myname.slice(0 ,5 ));
// console.log(myname.split(' '));
// console.log(nameArr);
// console.log(nameArr[4]);
let result = []
for (let i = 0; i < nameArr.length; i++) {
    //    console.log(nameArr[i].slice());
    let firstLetter = nameArr[i].slice(0 , 1).toUpperCase();
    let lastLetter = nameArr[i].slice(1).toLowerCase();
    let completeLetter = firstLetter + lastLetter;
    result.push(completeLetter);
    console.log(result.join(" "));

}
let completeLetter = result.join(' ');

    alert("processed name " + completeLetter)









// let nameArr = prompt("Enter Your name here");
// let myname = "umair kifayat thakur";
// console.log(myname.slice(0, 5));
// console.log(myname.split(' '));
// console.log(nameArr);
// console.log(nameArr[3]); // Access the 4th element (index 3)

// let result = [];

// // Split the input sentence into words and process each word
// let words = nameArr.split(' ');

// for (let i = 0; i < words.length; i++) {
//     let firstLetter = words[i][0].toUpperCase();
//     let restOfLetters = words[i].slice(1).toLowerCase();
//     let completeWord = firstLetter + restOfLetters;
//     result.push(completeWord);
// }

// // Join the processed words with a space
// let processedName = result.join(' ');

// console.log(processedName);
// alert("Processed name: " + processedName);


