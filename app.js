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





