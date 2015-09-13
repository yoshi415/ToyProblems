// Character Frequency
// Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by 
// frequency and then by ascending order by character.

// Examples
// Input : Output
// "aaabbc" : [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
// "mississippi" : [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
// "" : [ ]

var characterFrequency = function(string) {
  var result = [], frequencies = {};
  // store unique characters and their frequencies
  for (var i = 0; i < string.length; i++) {
    var letter = string.charAt(i);
    frequencies[letter] = frequencies[letter] || 0;
    frequencies[letter]++;
  }
  // push pairs into final result array
  for (var letter in frequencies) {
    result.push([letter, frequencies[letter]])
  }
  result.sort(function(a, b) {
    // sort by letter frequency
    if (a[1] > b[1]) return -1;
    else if (a[1] < b[1]) return 1;
    // sort by letter alphabetically
    else if(a[0] < b[0]) return -1;
    else if(a[0] > b[0]) return 1;
  });
  return result;
};