function largestElement(numbers){
let largest = numbers[0];
for (let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    //console.log(element);
    if(element > largest){
        largest = element;
    }
}
return largest;
}
const ages = [12, 54, 3, 34, 75, 32, 12];
const oldest = largestElement(ages);
console.log(oldest);

const oldest2 = largestElement([-2, -9, -11]);
console.log(oldest2);