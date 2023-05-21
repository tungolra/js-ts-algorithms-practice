const util = require("util");

/*

Considerations: 
- case insensitive 
- remove punctuation
- return array of array container word + count of number of times word is found as string
- sorted by highest integer; then by order in sentence

Pseudocode: 
// split method to put words into array; also remove the punctuation
// initialize a hash
// loop through the var
  - set the key to the word and value as 1 
  - if word is already in hash, add 1 to value
  
// sort by count of occurrences ?

// {{word: "practice", freq: "3", firstOcc: 0}, ...}

*/
/**
 * Pramp Solution
 * 
 * The first solution takes a more manual approach, iterating through the 
 * characters and building words without relying on regular expressions. 
 * It uses a Map and an additional array to organize the word counts. 
 * This approach may be more flexible if you need to perform additional 
 * operations on the word counts or modify the logic further.
 * 
Time Complexity: let N be the number of words in document and M the number 
of unique words in it (M ≤ N). Iterating over all words, cleaning them and
inserting them into a map takes O(N). The sorting step takes O(M) since
notice that in the second loop, every word gets visited only once. The 
total time complexity is therefore O(N + M), which is O(N).

Space Complexity: wordMap takes O(M) space and the array of strings array,
counterList, takes another O(M). So, in total, the space complexity is O(M).
 
 * function wordCountEngine(document) {
  const wordMap = new Map();
  const wordList = document.split(' ');
  let largestCount = 0;

  for (let i = 0; i < wordList.length; i++) {
    const word = wordList[i].toLowerCase();
    const charArray = [];

    for (let j = 0; j < word.length; j++) {
      const ch = word[j];
      if (ch >= 'a' && ch <= 'z') {
        charArray.push(ch);
      }
    }

    const cleanWord = charArray.join('');

    if (cleanWord.length < 1) {
      continue;
    }

    let count = 0;
    if (wordMap.has(cleanWord)) {
      count = wordMap.get(cleanWord);
      count++;
    } else {
      count = 1;
    }

    if (count > largestCount) {
      largestCount = count;
    }

    wordMap.set(cleanWord, count);
  }

  const counterList = new Array(largestCount + 1);
  for (let i = 0; i <= largestCount; i++) {
    counterList[i] = null;
  }

  for (const [word, count] of wordMap) {
    const wordCounterList = counterList[count] || [];
    wordCounterList.push(word);
    counterList[count] = wordCounterList;
  }

  const result = [];
  for (let i = counterList.length - 1; i >= 0; i--) {
    const wordCounterList = counterList[i];
    if (!wordCounterList) {
      continue;
    }

    const stringifiedOccurrenceVal = i.toString();
    for (let j = 0; j < wordCounterList.length; j++) {
      result.push([wordCounterList[j], stringifiedOccurrenceVal]);
    }
  }

  return result;
}
 */

/**
 * This solution has a simpler implementation compared to the first solution.
 *  It uses regex to handle the preprocessing step, which can be more concise
 *  and easier to understand. However, it does introduce a dependency on 
 * regular expressions, and regex operations can sometimes have performance
 *  implications.
 * 
 Time complexity of O(n + m log m) 
 
 Space complexity of O(n + m), where n is the length of the document 
 and m is the number of distinct words.
 */
function wordCountEngine(document) {
  document = document.toLowerCase().replace(/[^\w\s]/g, "");
  const words = document.split(" ");

  // Count the occurrences of each word
  const wordCounts = {};
  for (const word of words) {
    if (word in wordCounts) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  }

  // Convert word frequencies to word-count pairs
  const wordCountPairs = [];
  for (const word in wordCounts) {
    if (word === "" || word === " ") {
      continue;
    } else {
      wordCountPairs.push([word, wordCounts[word]]);
    }
  }

  // Sort the word-count pairs
  wordCountPairs.sort((a, b) => {
    if (a[1] === b[1]) {
      // If counts are equal, maintain the original order
      return words.indexOf(a[0]) - words.indexOf(b[0]);
    }
    // Sort by count in descending order
    return b[1] - a[1];
  });

  // Convert counts to strings
  for (const pair of wordCountPairs) {
    pair[1] = String(pair[1]);
  }

  return wordCountPairs;
}

/* Tests */
let test1 =
  "Practice makes perfect, you'll get perfecT by practice. just practice! just just just!!";
let test2 = "To be, or not to be, that is the question:";
let test3 =
  "Every book is a quotation; and every house is a quotation out of all forests, and mines, and stone quarries; and every man is a quotation from all his ancestors. ";

let answer1 = [
  ["just", "4"],
  ["practice", "3"],
  ["perfect", "2"],
  ["makes", "1"],
  ["youll", "1"],
  ["get", "1"],
  ["by", "1"],
];
let answer2 = [
  ["to", "2"],
  ["be", "2"],
  ["or", "1"],
  ["not", "1"],
  ["that", "1"],
  ["is", "1"],
  ["the", "1"],
  ["question", "1"],
];
let answer3 = [
  ["and", "4"],
  ["every", "3"],
  ["is", "3"],
  ["a", "3"],
  ["quotation", "3"],
  ["all", "2"],
  ["book", "1"],
  ["house", "1"],
  ["out", "1"],
  ["of", "1"],
  ["forests", "1"],
  ["mines", "1"],
  ["stone", "1"],
  ["quarries", "1"],
  ["man", "1"],
  ["from", "1"],
  ["his", "1"],
  ["ancestors", "1"],
];
console.log(
  `_Test 1_ \nExpected: ${util.inspect(answer1)} \n Actual: ${util.inspect(
    wordCountEngine(test1)
  )} \n Pass?: ${
    util.inspect(wordCountEngine(test1)) === util.inspect(answer1)
  }`
);
console.log(
  `_Test 2_ \nExpected: ${util.inspect(answer2)} \n Actual: ${util.inspect(
    wordCountEngine(test2)
  )} \n Pass?: ${
    util.inspect(wordCountEngine(test2)) === util.inspect(answer2)
  }`
);
console.log(
  `_Test 3_ \nExpected: ${util.inspect(answer3)} \n Actual: ${util.inspect(
    wordCountEngine(test3)
  )} \n Pass?: ${
    util.inspect(wordCountEngine(test3)) === util.inspect(answer3)
  }`
);
