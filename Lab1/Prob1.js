// Problem 1
console.log("Probelm 1:");

let number= "67830934";
let kth_num=5;
console.log("your Kth last digit is: ");
let a=0;
for( let i=number.length; i>=0; i--){
    
    if (a==5){
        console.log(number[i]);
        break;
    }
    else{
        a=a+1;
        continue;

    }
}
