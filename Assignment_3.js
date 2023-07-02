/*
Ques 1.Write a function calculate that takes three arugments from the user, say num1, num2, and operation(1 == add, 2 == subtract,
    3 == multiply, 4 == divide).Don`t use switch statement or if else statements
1.add,
2.subtract,
3.multiply,
4.divide 
write the calc function for all the operations

Ans:
*/
function cal() {
    function add(a, b) {
        return a + b;
    }
    function sub(a, b) {
        return a - b;
    }
    function mul(a, b) {
        return a * b;
    }
    function div(a, b) {
        return a / b;
    }
    return { add, sub, mul, div };
}
function calculate(cal) {
    var num1 = parseInt(prompt("Enter first num "));
    var num2 = parseInt(prompt("Enter second num "));
    var opr = parseInt(prompt("Enter operation"));
    var obj = {
        1: cal().add(num1, num2),
        2: cal().sub(num1, num2),
        3: cal().mul(num1, num2),
        4: cal().div(num1, num2)
    };
    return obj[opr];
}
calculate(cal);

//===========================================================

/*
Ques2.Create a function Named Triangle which takes 3 parameters, say A, B and C denoting the 3 sides of a triangle.
Use Callback function, create a method to check if the triangle is Equilateral or not.
    Output:
"true" if the triangle is equilateral and "false" if its not.

ans: 
*/
function isEqui(ans) {
    if (ans) {
        console.log("The triangle is equilateral.");
    } else {
        console.log("The triangle is not equilateral.");
    }
}
function Triangle() {
    var a = prompt("Enter a:");
    var b = prompt("Enter b:");
    var c = prompt("Enter c:");

    function checkEqui(a, b, c, callback) {
        if (a == b && b == c)
            return callback(true);
        else
            return callback(false);
    }

    checkEqui(a, b, c, isEqui);

}
Triangle();

//=================================================================================

/* 
Ques   3.Given two strings, return true if they are anagrams of one another
    For example: Mary is an anagram of Army
    var str1 ="Mary";
    var str2 = "Army";
ans:
*/
function anagram(str1, str2) {
    if (str1.length != str2.length) {
        return console.log("Not anagram");

    }
    var obj1 = {};
    var obj2 = {};

    for (var i = 0; i < str1.length; i++) {
        if (obj1[str1[i]]) {
            obj1[str1[i]]++;
        }
        else {
            obj1[str1[i]] = 1;
        }
    }
    for (var i = 0; i < str2.length; i++) {
        if (obj2[str2[i]]) {
            obj2[str2[i]]++;
        }
        else {
            obj2[str2[i]] = 1;
        }
    }

    for (var i = 0; i < str1.length; i++) {
        if (obj1[str1[i]] != obj2[str2[i]]) return console.log("Not anagram");
    }
    return console.log("Yes they are Aagram");
}

//==================================================================================
/*
4. Create a function Employee, having id, name, basic_Salary as arguments.

Compute HRA, DA, TA, GS, NS.

HRA is 30% of Basic Salary.
DA is 10% of Basic Salary.
TA is 20% of Basic Salary.

GS = Basic Salary + HRA + DA + TA;

TAX DEDUCTION is 10% of GS.

NS = GS - TAX DEDUCTION.

NOte : Use Basic Salary in Lexical Scope 
Print salary slip of the employee.


*/

function salaryslip(id, name, basic_salary) {
    function hra() {

        return .30 * basic_salary;
    }
    function da() {

        return .10 * basic_salary;
    }
    function ta() {

        return .02 * basic_salary;
    }
    function gs() {

        return basic_salary + hra() + da() + ta();
    }
    function taxdeduction() {

        return (0.10 * gs());
    }

    function ns() {

        return gs() - taxdeduction();
    }

    console.log("hra is:" + hra());
    console.log("da is:" + da());
    console.log("Ta is:" + ta());
    console.log("gs is:" + gs());
    console.log("taxdeduction is:" + taxdeduction());
    console.log("ns is:" + ns());

}
var id = parseInt(prompt("enter the id"));
var name = prompt("enter name");
var basic_salary = parseInt(prompt("enter the basic salary"));

console.log("name and id is:" + name + " " + id);
salaryslip(id, name, basic_salary);
//==================================================================================

/*
Ques 5 Write a function to find the maximum and minimum elements in an array.
arr = [10,3,15,-1,9,6]
output = maxno. : 15
        minno. : -1
Ans:

*/
function findMaxMin() {

    var max = () => Math.max(...arr);
    var min = () => Math.min(...arr);

    let arr = [10, 3, 15, -1, 9, 6];
    console.log("maxNo :", max(), "minNo :", min());
}

findMaxMin();