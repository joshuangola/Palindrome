// Write your code below


const hasUniqueChars = (word) => {
    let charMap = {};
    let isUnique = true;
    
    word.split('').forEach(char => {
      if(charMap[char]) {
        isUnique = false;
      } else {
        charMap[char] = true;
      }
    });
    
    return isUnique;
  }
  
  console.log(hasUniqueChars("Monday"));
  console.log(hasUniqueChars("Moonday"));
  console.log(hasUniqueChars("Bob"));
  