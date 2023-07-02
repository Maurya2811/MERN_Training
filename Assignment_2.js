// 1. Write a JavaScript function that Print Sum of Even Place and Odd Place Digit

// E.g num = 2914
// O/p Even Place (9+4)
// Odd Place 2+1

var num = 834168;
function countDigit(num) {
    num = parseInt(num);
    var count = 0;
    var temp = num;
    while (temp != 0) {
        count++;
    
        temp = parseInt(temp / 10);
        
    }
    return count;
}

var count = countDigit(num);
var evenSum = 0;
var oddSum = 0;

if (count % 2 == 0) {
    while (num) {
        evenSum += num % 10;
        num = parseInt(num / 10);
        oddSum += num % 10;
        if (!num) {
            break;
        }
        num = parseInt(num / 10);
    }
}
else {
    while (num) {
        oddSum += num % 10;
        num = parseInt(num / 10);
        evenSum += num % 10;
        if (!num) {
            break;
        }
        num = parseInt(num / 10);
    }
}
console.log(`Even sum is ${evenSum} and Odd sum is ${oddSum}`);

/* ====================================================================================== */
// 2. Write a JavaScript function that accepts a string as a parameter 
// and converts the first letter of each word into upper case.
// Example string : ‘learn javascript from brain mentors’
// Expected Output : ‘Learn Javascript From Brain Mentors

var str = 'learn javascript from brain mentors';
var ans = '';
var space = true;
str.toLowerCase();
for (var i = 0; i < str.length; i++) {
    if (space) {
        ans = ans + str.charAt(i).toUpperCase();
        space = false;
    } else {
        ans = ans + str.charAt(i);
    }
    if (str[i] == ' ') {
        space = true;
    }
}
console.log(ans);
/* ====================================================================================== */

// 3. Write a JS Function to validate Phone Number
// Only number and must be 10 digit long

var s = "maurya2811@gmial.com";
function isValid(s) {
    var flag1 = false;
    for (var i = 0; i < s.length - 4; i++) {
        if (s[i] == '@') {
            flag1 = true;
        }
    }
    if (!flag1)
        return console.log("Invalid Mail");

    var substr = s.substring(s.length - 4);
    var flag2 = false;
    var w = [".com", ".org", ".edu"];
    for (var i = 0; i < w.length; i++) {
        if (w[i] == substr) {
            flag2 = true;
        }
    }
    if (!flag2)
        return console.log("Invalid Mail");

    return console.log("Valid Mail");

}
isValid(s);

/* ====================================================================================== */


// 4. Write a JS Function to validate Email Address
// Must contains @
// Must ends with .com/.org/.edu
var num = prompt("Enter num");
if (num.length < 10 || num.length > 10) {
    console.log("Invalid Number");
}
else {
    for (var i = 0; i < 10; i++) {
        var e = parseInt(num[i]);
        if (isNaN(e)) {
            console.log("Invalid Number");
        }
    }
    console.log("Valid Number");
}

/* ====================================================================================== */

// 5. Write a JS Function to find the occurrence of each character in JS
// Input : “brain mentors”
// O/P : b 1
// r 2
// A 1
// I 1
// N 2
// M 1
// E 1
// T 1
// O 1
// S 1


function frequency(s) {
    var obj = { };
    for (var x = 0; x < s.length; x++) {
        if (s[x] != ' ') {
            if(obj[s[x]])
                obj[s[x]]++;
                else{
                obj[s[x]]=1;
                }
        }
    }
    //console.log(obj);
    for (const property in obj) {
            console.log(`${property}: ${obj[property]}`);
    }

}
frequency("brains mentors");