/**
 * Mexican Wave
 * 
 * In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
 *
 * Rules
 * 1. The input string will always be lower case but maybe empty.
 * 2. If the character in the string is whitespace then pass over it as if it was an empty seat.
 * 
 * Example
 * wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
 * 
*/

/**
 * Initial
 */
function wave(str){
    let o = []
  
    for(let i = 0; i < str.split("").length; i++){
        let s = str.split("");
        
        if(s[i] !== " ") {
            let l = s.splice(i, 1, s[i].toUpperCase()).join("");
            let w = s.join("");
            
            o.push(w);
        }
    }
  
    return o;
}

/**
 * Optimised
 */
function wave(str){
    let result = [];
    
    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    
    return result;
}