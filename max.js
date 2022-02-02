// find out who is bigger

const business = 450;
const minister = 750;
const army = 600;
/*
if(business > minister){
    console.log('business is bigger');
}
else{
    console.log('minister is bigger');
}
*/

if(business > minister && business > army){
    console.log('Business is bigger');
}
else if(minister > business && minister > army){
    console.log('Minister is bigger');
}
else{
    console.log('army is bigger');
}
