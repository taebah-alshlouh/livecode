"use strict"
////////////////////string methods //////////////////
let student_firt_name="reema";
let student_last_name="salem";
let full_name= student_firt_name.concat(" ",student_last_name);
///using the +/////
let text1 = "Hello" + " " + "World!";
//////using the concat method/////
let text2 = "Hello".concat(" ", "World!");
console.log(full_name);
console.log(text1);
console.log(text2);
////////upper and lower/////////
console.log(text1.toUpperCase());
console.log(text2.toLowerCase());
//////////////replace method/////////////////
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "Orange Academy");
//////////toString method/////////
let num1=13;
console.log(typeof num1);
let num1_string=toString(num1);
console.log(typeof num1_string);
////////parseInt method////////
let n1="4305taebah";
console.log(parseInt(n1) );
//////number method/////////
let n2="2334";
console.log(Number(n2));
let con_n2=Number(n2);
console.log(typeof con_n2);

////////object method////////
let student = {
    firstName: "reema",
    lastName: "salem",
    Id: 6848937,
    fullStudentName: function() {
      return this.firstName + " " + this.lastName;
    },
    showtheId: function(){
        return "student Id: " + this.Id; 
    }
  };
  console.log(student);
 
let arr1=[92,73,54,75,63,47,33,24,45];
console.log(arr1.sort());
console.log(arr1.shift());
console.log(arr1.pop());