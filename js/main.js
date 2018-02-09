     


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

output = "My name is"+ "\n" +  first_name + " " + last_name + "\n" + "You can contact me at your-" + email;
alert(output); 




var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100)
];
 var n1 = numbers[0];
 var n2 = numbers[(numbers.length - 1)];
 var sum = (n1 + n2);


if (sum % 2 === 0){
    alert (n1 +" + "+ n2+ " = " + sum +"\n"+ " This is  an even Number");
} else {
    alert(n1 +" + "+ n2 +" = " + sum +"\n" +" This is  an odd Number");
}

