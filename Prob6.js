console.log("Problem 6");
let user_num=8;
let rand=Math.floor(Math.random()*10);
if (user_num==rand)
{
    console.log("You Win");
    console.log(rand,user_num);
}
else{
    console.log("Not Matched");
    console.log(rand,user_num);
}