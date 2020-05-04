//this is a single line of code

/* this contains multiple
lines of code */


var myName;


var a;
var b = 2;
a = 7;
b = a;


var a = 9;


var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";


var studlyCapVar;
var properCamelCase;
var titleCaseOver;
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;


var difference = 45 - 33;


var product = 8 * 10;


var quotient = 66 / 33;


var myVar = 87;
myVar++;


var myVar = 11;
myVar--;


var ourDecimal = 5.7;
var myDecimal = 5.7;


var product = 2.0 * 2.5;


var quotient = 4.4 / 2.0;


remainder = 11 % 3;
var remainder;


var a = 3;
var b = 17;
var c = 12;
a += 12;
b += 9;
c += 7;


var a = 11;
var b = 9;
var c = 3;
a -= 6;
b -= 15;
c -= 1;


var a = 5;
var b = 12;
var c = 4.6;
a *= 5;
b *= 3;
c *= 10;


var a = 48;
var b = 108;
var c = 33;
a /= 12;
b /= 4;
c /= 11;


var myFirstName = "Marieke";
var myLastName = "de Hoop";


var myStr = "I am a \"double quoted\" string inside \"double quotes\".";


var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';


var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";


var myStr = "This is the start. " + "This is the end.";


var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";


var myName = "Marieke";
var myStr = "My name is " + myName + " and I am well!";


var someAdjective = "easy!";
var myStr = "Learning to code is ";
myStr += someAdjective;


var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];


var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];


var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];


var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";
var wordBlanks = "The " + myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb + ".";


var myArray = ["This is a string", 2];


var myArray = [["Bulls", 23], ["White Sox", 45]];


var myArray = [50,60,70];
var myData = myArray[0];


var myArray = [18,64,99];
myArray[0] = 45;


var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];


var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);


var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]


var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].


var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);


var myList = [["Milk", 30],
              ["Eggs", 10],
              ["Flour", 25],
              ["Sugar", 12]
];


function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();


function functionWithArgs(arg1, arg2) {
  console.log(arg1 + arg2);
}
functionWithArgs(1, 2);
