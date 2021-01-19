/*Question 1
Define an array of numbers (use any random numbers). 
Write a program in Javascript to print only the even numbers of the array.
 Do not use any library functions, need to do via for loops only
*/
const calceven=function(){
    const array=[2,5,8,3,16,19,23,45,32];
    for(var i=0;i<array.length;i++){
        if(array[i] %2===0){
            console.log(array[i]);
        }
    }
}
calceven();