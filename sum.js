const numbers = [44, 23, 34, 32, 54, 5, 78];
/*
for (let i = 0; i < numbers.length; i++ ){
    //console.log(i);
    const element = numbers[i];
    //console.log(element);
    sum = sum + element;
    return sum;
}
console.log(sum);
*/
function arrTotal(numbers){
    let sum = 0;
    for(let i =0; i < numbers.length; i++){
     const element = numbers[i];
     sum = sum + element;
    }
    return sum;
}
const total = arrTotal(32, 45, 12);
console.log(total);