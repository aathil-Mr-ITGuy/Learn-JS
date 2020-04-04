// in Array order is important thing but not in the object
const [first, second] = [true,false];
let [first,second] = [false,true];
var [first,second] = [true,false];

//const is using for constant values

const j = {x:1,y:2};
/* j.x or j.y could e changeable 
but we can't change the object 'j'
j = {}
//it will throw the error
*/

Object.freeze(j);
/* Object.freeze comment freeze the object, we can assign new values for their
    elements but the values don't change
    j.x = 4;
    //but the value of x "1" remains;
    */