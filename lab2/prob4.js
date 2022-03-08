// sandwich calculator with only breds

// sandWich =(bread)=>{
//     if (bread <2){
//         return "sandWich needs atleast 2 breads";
//     }
//     let total_bread=parseInt(bread/2);
//     return "total sandWiches  "+total_bread+" from 10 bread";
// }

// console.log(sandWich(10));


// ==============================
// ======sandwich calculator with bread chesse=====
// ==============================

sandWich =(bread, cheese)=>{
    if (bread <2){
        return "sandWich needs atleast 2 breads";
    }
    let total_bread=parseInt(bread/2);
    if (total_bread==cheese){
        return "total sandWiches  "+total_bread+" from "+bread+" bread"; 
    }
    else if(total_bread>cheese)
    {
        return "according to available cheese "+cheese+" we have "+cheese+" sandWiches";
    }
    else
    {
        return "according to available bread "+total_bread+" we have "+total_bread+" sandWiches";
    }
    // return "total sandWiches  "+total_bread+" from 10 bread";
}


console.log(sandWich(10,0));