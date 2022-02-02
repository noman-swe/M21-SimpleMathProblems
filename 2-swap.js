var first = 5;
var second = 7;
console.log(first, second); //output: 5 7
//first approch of swap
var temp = first;///first er value temp e rakhlam
first = second; //second er value first e rakhlam
second = temp; //temp e thaka first er value second e nilam
console.log(first, second); // output: 7 5



//destructuring
var fifth = 3;
var sixth = 9;
console.log(fifth, sixth);

[fifth, sixth] = [sixth, fifth];
console.log(fifth, sixth);