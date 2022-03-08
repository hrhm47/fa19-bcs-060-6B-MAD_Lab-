// averages and heighest number
my_avg=(...my_argus)=>{

    var total_num=my_argus.reduce((previous, current) => {
        return previous + current;
      });
    
    return[Math.max(...my_argus),total_num/(my_argus.length)];
    // return my_argus.length;
    

}

console.log(my_avg(1,2,3,4,5,5,4,2,2,100));