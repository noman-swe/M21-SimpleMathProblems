//0, 1, 1, 2, 3, 4, 5, 8, 13, 21, 34, 55;
/* 
nth = (n-1)th + (n-2)th
*/

/*
const fibo = [0, 1];
for(let i = 2; i <= 10; i++){

fibo[i] = fibo[i - 1] + fibo[i - 2];

}
console.log(fibo); 
*/
/*
function fibonacchiSeries(num){
    const fibo = [0, 1];
    for(let i = 2; i <= 10; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];    
    }
    return fibo;
}

const fibonacchi = fibonacchiSeries(10);
console.log(fibonacchi);
*/
function fibonacchiSeries(num){
    if(typeof num != 'number'){
        return 'Please Give a number';
    }
    if(num < 2){
        console.log('please enter a positive number greater than 1');
    }
    const fibo = [0, 1];
    for(let i = 2; i <= num; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];    
    }
    return fibo;
}

const fibonacchi = fibonacchiSeries(10);
console.log(fibonacchi);

var a = 5; var b= 8; c = 4; var d = 6;
var highest = max.Math(a, b, c, d);
console.log(highest);