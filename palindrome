function palindrome(str) {
  //remove White space
  str = str.replace(/\s+/g, '');
  // remove all non-alphanumeric characters 
  str  = str.replace(/[^a-zA-Z0-9+]/g, "");
  // turn everything into the same case
  str = str.toLowerCase();
  // split, reverse, join and store into a variable 
  var str1 = str.split('').reverse().join('');
  // check the variable with the string and return true
  return str === str1
  
}
palindrome("eye");
