console.log("Probelm 5\n left-most vowel ");
function my_fucn(){
    let para="wrBTmshebaIAn";
    let vowel=['a','e','i','o','u'];
    let arr1=[];
    for (let i=0; i<para.length; i++ ){
        arr1[i]=para[i];
    }


    for (let i=0; i<=arr1.length; i++){

        for (let j=0; j<=vowel.length; j++){

            if (arr1[i]==vowel[j]){
                console.log(arr1[i],i);
                return;
            }
        }
    }
}

my_fucn()
console.log("Probelm 5\n reverse order ");
function reverse(num){
    let number=[];
    for (let i=num.length-1; i>=0; i--){
        number[i]=num[i];
    }
    return number;
}
let num=[1,2,3,4,5,6];
console.log(reverse(num));