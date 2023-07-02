/*
Ques 1: Find Occurance of a target value in given array;
arr = [19, 22, 18, 19, 16, 18, 19, 21, 24];
target = 19;

Ans: 1. Using forEach
*/
            var arr = [19, 22, 18, 19, 16, 18, 19, 21, 24];
            var target = 19;
            function findCount(arr, target) {
              var c = 0;
              arr.forEach((n, i) => {
                if (n == target)
                  c++;
                if (i == arr.length - 1)
                  console.log(c);
              });
            }
            findCount(arr, target);

 //           2. Using Filter 
            
            var arr = [19, 22, 18, 19, 16, 18, 19, 21, 24];
            var target = 19;
             console.log(arr.filter(e=>e==target).length);
       

/* 
Ques 2 .Reverse a given string using reverse() method
input = "BrainMentors"
output = "srotnemniarB"

Ans : 
*/   
        var input = "BrainMentors";
       console.log(input.split("").reverse().join(""));


/* 
3. Write a function that takes a string as input and returns the number of vowels(a, e, i, o, u) in the string.
Count of vowels in string;
ex: - str = "brainmentors"
output: count = 4       

Ans:   
*/
var str = "brainmentors";
function countVowel(str){
     var count = str.split("").filter(e=> (e=='a' || e=='e' || e=='i' || e=='o' || e=='u')).length;
     console.log(`Count =`,count);
}
countVowel(str);

/* 
4. Write a function to find the sum of all elements in an array.
  ex: - arr =[1, 2, 3, 4, 5];

output = 15;

Ans : 
*/ 
      arr = [1, 2, 3, 4, 5];
      function sum(arr){
      console.log(arr.reduce((acc, e) => acc + e, 0));
      }
      sum(arr);

/* 
5.Write a function to reverse the order of elements in an array.
  don't Use reverse() Method
use Logic
ex: - var arr = ['a', 'b', 'c', 'd', 'e', 'f']

output = ['f', 'e', 'd', 'c', 'b', 'a']

Ans: 
*/
    arr.reduce((acc, e) => e + acc, []).split("");


/* 
6. Write a function to remove a specific element from an array.

  arr = [1, 2, 3, 4, 5];
remove = 3

output: -[1, 2, 4, 5]

Ans: 

    Two Methods
   1.Using Splice Method 
*/
var arr = [1, 2, 3, 4, 5];
remove = 3
arr.splice(arr.indexOf(3),1);
arr;

// 2. Using filter()

var arr = [1, 2, 3, 4, 5];
remove = 3
var ans= arr.filter(e=>e!=remove);
console.log(ans);

/* 
7. Write a function to find the second largest number in an array.

  ex: - var arr = [12, 4, 6, 9, 2, 15, 3, 9];
		
		output second largest: 12

Ans: 
*/

function findSecondLargest(arr) {
  var max = -Infinity;
  var secondMax = -Infinity;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }

  return secondMax;
}

var arr = [12, 4, 6, 9, 2, 15, 3, 9];
var secondLargest = findSecondLargest(arr);
console.log("Second largest:", secondLargest);


/* 
8.Write a function to rotate an array by a given number of steps to the right.

  ex: - arr =[1, 2, 3, 4, 5];
step = 2;

output = [4, 5, 1, 2, 3]
*/
// Ans:  Using pop and unshift: 
     function rotate(arr,step){
      for(var i=0;i<step;i++){
        arr.unshift(arr.pop());
      }
      return arr;
     }
      arr = [1, 2, 3, 4, 5];
      step = 2;
     rotate(arr,step);


    //  2nd Method
  arr = [1, 2, 3, 4, 5];
  var step = 2;
  arr.unshift(...arr.splice(arr.length - step, step));


/* 
9.Write a function to find the intersection of two arrays(common elements between the two arrays).

  ex: - arr1 =[2, 4, 1, 7, 4, 2], arr2 = [5, 1, 4, 7, 3, 1];

output = [1, 4, 7]

Ans: 
*/
var arr1 = [2, 4, 1, 7, 4, 2];
var arr2 = [5, 1, 4, 7, 3, 7, 7, 1];
var arr = [];
arr2.forEach(e => {
  if (arr1.indexOf(e) != -1)
    arr.push(e);
  arr1.splice(arr1.indexOf(e), 1);

});
arr;

/* 
10 . Write a function to remove duplicate elements from an array while preserving the original order.
  ex: - arr =[1, 2, 5, 2, 5, 1, 6, 7, 7]

output: -[1, 2, 5, 6, 7]
Ans:
*/
function removeDuplicates(arr) {
 var i, j;
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--; // Important line
      }
    }
  }
  return arr;
}

var arr = [1, 2, 5, 2, 5, 1, 6, 7, 7];
var result = removeDuplicates(arr);
result;