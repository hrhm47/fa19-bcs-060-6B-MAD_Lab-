// Probelm 2
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};

// before deleting a roll number 

console.log("\n\nBefore deleting \n",student);

// after deleting the roll no property
delete student.rollno;
// student.rollno=undefined;
console.log("\n\nAfter deleting \n",student);