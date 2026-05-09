/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.
let name = "Ali";
let age = 21;
let studyField = "Math";

let participant = {

    name,
    age,
    studyField

};



/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.

participant.displayInfo = function(){

console.log(`Participant name:${this.name} Age:${this.age}  Study Field:${this.studyField}`);
};
 participant.displayInfo();

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.


participant.displayInfoArrow =()=>{

console.log(`Participant name:${this.name} Age:${this.age}  Study Field:${this.studyField}`);
};
 participant.displayInfoArrow();

 /* Observations:
 calling object property value  using this  return undefine 
 * TODO: Explain here.
  arrow function this refrences  global object this not it's object context this
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.

function updateParticipantInfo(object,name,value){

    return {
        ...object,
        [name]:value
    }
};

console.log(updateParticipantInfo(participant,"Hassan",31));