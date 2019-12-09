//FCC: convert string to pig latin:
function translatePigLatin(s) {
  let v = str.match(/[aeiou]/);                 //v holds vowels
  let p = str.indexOf(v);                       //p holds index where vowel is found
   
   if (p > 0) {                                 //if vowel isn't at the beginning of string
     return s.slice(p) + s.slice(0, p) + "ay";  //move all letters before vowel to the end and add ay
   } else if (s.match(v)===null) {              //if no vowels found
     return s + "ay";                           //return string + ay  
   } else {
   return s + "way";                            //case left is vowel at the beginning, simply add way to end of string
  } 
}
