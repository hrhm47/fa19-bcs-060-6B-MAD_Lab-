
console.log("Problem 3");
let inp = '23617';
let arr1=[];
for (let i=0; i<inp.length; i++ ){
    arr1[i]=parseInt(inp[i]);
}

let even= arr1.filter(a=>a%2==0);
// let sum=arr1.filter().map(v=>v=+arr1.filter(a=>a%2==0));
let n= even.reduce((prv, crv)=>prv+crv);
console.log(n);

console.log(sum.map(getsum));
function getsum(num){
    let a=0;
    return a=a+num;
}