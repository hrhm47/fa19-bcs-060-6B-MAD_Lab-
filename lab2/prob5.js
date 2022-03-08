// averages and heighest number
my_avg=(...my_argus)=>{

    var total_num=my_argus.reduce((previous, current) => {
        return previous + current;
      });
    
    return [Math.max(...my_argus),total_num/(my_argus.length)];
    // return my_argus.length;
    

}
var return_arr=my_avg(1,2,3,4,5,5,4,2,2,100);
var heighest_number=return_arr[0];
var avg_num=return_arr[1];
console.log(heighest_number,avg_num);