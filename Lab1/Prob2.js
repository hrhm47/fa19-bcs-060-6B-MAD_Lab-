console.log("Problem 2 \n Sum of numbers");
let inp = '23617';

let arr=[2,3,6,1,7];
let arr1=[];
for (let i=0; i<inp.length; i++ ){
    arr1[i]=parseInt(inp[i]);
}
console.log(arr1);
console.log(arr);
const initialValue = 2;
const sumWithInitial = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  
  console.log(sumWithInitial);