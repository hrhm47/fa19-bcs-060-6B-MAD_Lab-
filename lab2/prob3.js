var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
];
 
for (i in library){
   console.log("book name "+library[i].title,"\nauthor name "+library[i].author,"\n book reading status "+library[i].readingStatus);

   console.log("\n");
}

