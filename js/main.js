     


var output, a, b, c;
a = 3;
b = 5;

output = "var a = 3;" + "\n" +
         "var b = 5;" + "\n" +
         "var c;" + "\n" + 
         "-----------" + "\n" +
         "a + b = " + (a + b) + "\n" +
         "a - b = " + (a - b) + "\n" +
         "a * b = " + (a * b) + "\n" +
         "a / b :" + (a / b) + "\n" +
         "a % b :" + (a % b )+"\n" +
         "a % b :" + (a % b )+"\n" +
          "a += b:" + (a += b) + "\n" +
          "a -= b:" + (a -= b) + "\n" +
          "a *= b :" + (a *= b) + "\n"+ 
          "a /= b :"+ (a /= b) + "\n" +
          "a %= b :"+ (a %= b) +"\n"+
          "a == b:" + (a == b) +"\n" +
          "a != b :"+ (a != b) +"\n"+
          "a > b :" + (a > b) +"\n" +
          "a < b: " + (a < b) +"\n"+
          "!a && !c:" + (!a && !c) + "\n" + 
          "!a || !c:" + (!a || !c) + "\n" ;

alert(output);      


var first_name = "JOHN";
var last_name = "JAMES";
var email = "john.jamesmenachery@gmail.com";
var output;

output = "My name is"+ "\n" +  first_name + last_name + "\n" + "You can contact me at your-" + email;
alert(output); 



var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100)
];

var sum;

sum = numbers[0] + numbers.length - 1 ;

if (sum % 2 == 0) {
    alert( sum + "is an even number.") 
} else {
    alert( sum + "is an odd number.") ;
}



