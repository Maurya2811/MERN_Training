/*
1.Write a JavaScript program to display the current day and time in the following format.
Today is: wednesday.
Current time is: 10 PM: 30 : 38
*/

function dayAndTime() {
    var date = new Date();
    var day = date.getDay();
    var weekdays = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'];
    console.log("Today is", weekdays[day]);
    var hour = parseInt(date.getHours());
    var format = 'AM';
    if (hour > 12) {
        format = 'PM'
        hour = hour - 12;
    }
    hour = addZero(hour);
    var min = addZero(date.getMinutes());
    var sec = addZero(date.getSeconds());
    function addZero(x){
      return x<10 ? '0'+x : x;
    }
    console.log("current time is " + hour + ""+ ":" + min + ":" + sec +" ",format);

}
dayAndTime();

/* ================================================================================================= */

/*
2.Write a JavaScript program to get the current date.
Expected Output:
mm - dd - yyyy, mm / dd / yyyy or dd - mm - yyyy, dd / mm / yyyy
*/


function date() {
    var date1 = new Date();
    var currentDate = date1.getDate();
    var month = date1.getMonth();
    var year = date1.getYear();
    console.log(currentDate + "-" + month + "-" + year);
}
date();

/* ================================================================================================= */

// 3.WAP to print area and perimeter of rectangle, taking input from the user, using prompt

function rectangle() {
    var length = parseInt(prompt('Enter length'));
    var breadth = parseInt(prompt('Enter Breadth'));
    var area = length * breadth;
    var perimeter = 2 * (length + breadth);
    console.log(`Area is ${area} and Perimeter is ${perimeter}`);
}
rectangle();

/* ================================================================================================= */

/*4.WAP to rotate the string ‘brainmentors in the right direction.
This is done by periodically removing one letter from the string end and attaching it to the front.
    input = brainmentors
output = sbrainmentor,...., brainmentors
*/

function calculate() {
    let word = "brainmentors";

    function rotate() {
        word = word[word.length - 1] + word.substring(0, word.length - 1);
        console.log(word);
    }

    for (let i = 0; i < word.length; i++) {
        setTimeout(rotate, i * 200);
    }
}
calculate();

/* ================================================================================================= */

// 5.WAP to find out if 1st January will be a Sunday between 2000 and 2030

function findSunday() {
    const currY = new Date();

    let y = 2000;
    currY.setFullYear(y);
    currY.setDate(1);
    currY.setMonth(0);

    while (y <= 2030) {
        console.log();
        let currD = currY.getDay();
        if (currD === 0) {
            console.log("Year :", y, "having the Sunday on 1st January");
        }
        y = y + 1;
        currY.setFullYear(y);
    }
}
findSunday();