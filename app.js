//OBJECTS 

//SHORT DEFINITION: SIMILAR TO ARRAY - BUT CAN HOLD MORE DETAILED INFORMATION. 

//SYNTAX FOR OBJECTS 
let favoriteCharacter = {
    fName: "Bob", 
    lName: "Ross",
    hobbies: ["paint", "animal care"],
    occupations: ["drill sargent", "TV personality"], 
    age: 52, 
    currentHealth: "Dead"
}//END favoriteCharacter

//LOGS ENTIRE OBJECT WITH ALL ITS PROPERTIES
console.log(favoriteCharacter); 

//CALLS AND LOGS A SPECIFIC PROPERTY 
console.log(`My character's first name is: ${favoriteCharacter.fName}`); 

//CALLING A PROPERTY WITH AN ARRAY AS DATATYPE
console.log(`One of ${favoriteCharacter.fName}'s hobbies is ${favoriteCharacter.hobbies[1]}`);

//UPDATING A PROPERTY VALUE 
favoriteCharacter.currentHealth = "Alive and well in spirit!"; 
console.log(favoriteCharacter.currentHealth);

//ADDING A NEW PROPERTY TO THE VARIABLE'S OBJECT 
favoriteCharacter.paintingSkills= "HE WAS SO GOOOOD!"; 
console.log(favoriteCharacter); 

//ARRAYS OF OBJECTS
let listOfMusic=[
    {
        title: "never gonna give you up",
        artist: "Rick Astley",
        year: 1987
    },
    {
        title: "Black Magic Woman",
        artist: "Santana",
        year: 1970
    }
]//END listOfMusic ARRAY

//TAGETS ONLY ONE PROPERTY OF OBJECT ("TITLE PROPERTY")
console.log(listOfMusic[0].title);

//GIVES NUMBER OF PROPERTIES IN AN OBJECT
let currentObjectLength = Object.keys(listOfMusic[0]).length;
console.log(currentObjectLength);

//THIS WILL RETURN ALL PROPERTIES(KEYS) OF THE TARGET OBJECT
console.log(listOfMusic[1]);

function consoleHeader(text){
    console.log()
    console.log("--------------------------");
    console.log(text);
    console.log("--------------------------");
    console.log()
}//END FUNCTION consoleHeader


//! Personal Contact Book
consoleHeader("Personal Contact Book")
//? Create a simple contact book where you can add, view, and search for contacts by name.
 
//TODO Define a Contact Object: Each contact should be represented as an object with properties like name, phone number, and email.
//TODO Store Contacts in an Array: Use an array to store multiple contact objects.
//TODO Create Functions: Craeate functions to add a contact, view all contacts, and search for a contact by name.
//* Output Results: Use console.log to display the contacts and search results.
 

let contacts_arr =[
    {
        name: "John Doe",
        phoneNumber: 2281231234,
        email: "johnDoe@email.com"
    }
]

addContact("sara", 12453658, "email");
searchContact("SARA");
viewAllContacts();


function addContact(nameVar, numberVar,emailVar){
    contacts_arr.push({name:nameVar, phoneNumber: numberVar, email:emailVar}); 

}//END FUNCTION addContact

function searchContact(contactNameVar){
    
    let contactFound;
    for(let i=0; i<contacts_arr.length; i++){
        if (contacts_arr[i].name.toUpperCase() == contactNameVar.toUpperCase()){
            contactFound=contacts_arr[i]
            break;
        }else {
            contactFound="contact not found"
        }//END IF/ELSE
    }//END FOR LOOP
    
    console.log("SEARCH CONTACT: ")
    console.log(contactFound);
}//END FUNCTION searchContact

function viewAllContacts(){
    console.log("View All Contacts: ")
    for(let i=0; i<contacts_arr.length; i++){
        console.log(contacts_arr[i]);

    }//END FOR LOOP
}//END FUNCTION viewAllContacts



//! Student Grade Management
consoleHeader("Student Grade Management");
//? Create a program to manage student grades, where you can calculate the average grade for the class and identify students who need to improve.
 
//TODO Predefine Student Objects: Each student should be an object with properties like name and grade, stored inside an array.
let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 76 },
    { name: "Charlie", grade: 92 },
    { name: "David", grade: 63 },
    { name: "Eve", grade: 78 }
  ];

  let classAverage=calcClassAve();
  findBelowAve(classAverage);
 
//TODO Calculate Average Grade: Write a function to calculate the average grade of the class.
//TODO Identify Students Below Average: Write a function to find and list students with grades below the class average.

function calcClassAve(){
    let gradeSum=0;
    let classAve;
    for(let i=0; i<students.length; i++){
        gradeSum+= students[i].grade;
    }//END FOR LOOP

    classAve=gradeSum/students.length; 
    console.log(`Class average: ${classAve}`);
    return classAve
    
}//END FUNCTION calcClassAve

function findBelowAve(classAveVar){
    console.log("Students below class average: ")

    for(let i=0; i<students.length; i++){
        if(students[i].grade<classAveVar){
            console.log(students[i].name + " - Grade: " + students[i].grade); 
        }//END IF
    }//END FOR LOOP
}//END FUNCTION findBelowAve
 
 
 
//! Movie Collection Tracker
consoleHeader("Movie Collection Tracker");
//? Create a program that allows you to manage a collection of movies, including adding movies, rating them, and viewing your collection.
 
//TODO Define a Movie Object: Each movie should be represented as an object with properties like title, genre, and rating.
//TODO Store Movies in an Array: Use an array to store multiple movie objects.
//TODO Create Functions: Create functions to add a movie, rate a movie, and view your entire collection.
//* Output Results: Use console.log to display the movie collection and ratings.

let movies_arr=[
    { title: "Movie One", genre: "action", rating: "10/10"}
]

addMovie("movie two", "comedy","8/10");
viewMovieCollection();
rateMovie("MOVIE ONE", "2/10");
rateMovie("MOVIE three","2/10");
viewMovieCollection();

function addMovie(titleVar, genreVar, ratingVar){
    movies_arr.push({title:titleVar, genre:genreVar, rating:ratingVar}); 
}//END FUNCTION addMovie
 
function viewMovieCollection(){
    console.log("VIEW MOVIE COLLECTION: ")
    for(let i=0; i<movies_arr.length; i++){
        console.log(movies_arr[i])
    }//END FOR LOOP
}//END FUNCTION viewMovieCollection

function rateMovie(nameVar, ratingVar){
    
    console.log(`Rate Movie - ${nameVar}`);
    let movieFound=false; 

    for(let i=0; i<movies_arr.length; i++){

        
        if(nameVar.toUpperCase()== movies_arr[i].title.toUpperCase()){
            movieFound=true;
            movies_arr[i].rating= ratingVar;
            break; 

        }//END IF 
        
    }//END FOR LOOP 

    if(movieFound==false){
        console.log("ERROR: Movie was not found");
    }//END IF
    
}//END FUNCTION  rateMovie


 
//! Library Book Tracker
consoleHeader("Library Book Tracker");
//? Create a program to manage a small library, where you can check which books are available or borrowed, and filter the books by their status.
 
 
//TODO Predefine Book Objects: Each book should be an object with properties like title and status (available or borrowed), stored inside an array.
let books = [
    { title: "The Great Gatsby", status: "available" },
    { title: "1984", status: "borrowed" },
    { title: "To Kill a Mockingbird", status: "available" },
    { title: "The Catcher in the Rye", status: "borrowed" },
    { title: "Moby-Dick", status: "available" }
  ];

  findBooksAvailable();
  findBooksBorrowed();
//TODO Filter Available Books: Write a function to list all available books.
//TODO Filter Borrowed Books: Write a function to list all borrowed books.

function findBooksAvailable(){
    console.log("AVAILABLE BOOKS: ")
    for(let i=0; i<books.length; i++){
        if(books[i].status=="available"){
            console.log(books[i].title)
        }//END IF

    }//END FOR LOOP
}//END FUNCTION findBooksAvailable

function findBooksBorrowed(){
    console.log("BORROWED BOOKS: ")
    for(let i=0; i<books.length; i++){
        if(books[i].status=="borrowed"){
            console.log(books[i].title)
        }//END IF

    }//END FOR LOOP

}//END FUNCTION findBooksBorrowed