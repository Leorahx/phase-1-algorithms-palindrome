function isPalindrome(word) {
  // Write your algorithm here
  word = word.toLowerCase();
  let wordArray = word.split("");
  let startIndex = 0;
  let endIndex = wordArray.length - 1;
  while (startIndex < endIndex) {
    if (wordArray[startIndex] !== wordArray[endIndex]) {
      return false;
    }
    startIndex++;
    endIndex--;
  }
  return true;
}

console.log(isPalindrome("ab"));

/* 
  Add your pseudocode here
  
  1. I need the function to iterate through all of the letters of the word
  2. Make it into an array 
  3. It then needs to compare the first letter with the last letter, the one after with the one after and etc.
  4. If all of them are equal, it will return true and say (word) is a Palindrome, if not, then it will say it's not a Palindrome.
*/

/*
  Add written explanation of your solution here
  1. Convert the word to lowercase using .toLowerCase() to handle case-insensitivity (in case the word is written like that)
  2. Convert the word into an array of characters using .split()
  3. Initialize variables for start index and end index
  4. Iterate through the word array
  5. Compare characters at startIndex and endIndex, if not equal returns false
  6. If they are equal, move to the next pair of characters, by incrementing and decrementing them, the while condition prevents them from overlapping
  7. If the loop completes without finding any mismatch, it's a palindrome


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
