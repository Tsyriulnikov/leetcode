/*
Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/
var lengthOfLongestSubstring = function (s) {
    // Initialise a set to store the longest string in
    let longestStringLength = 0;

    // Loop through the provided string
    for (let i = 0; i < s.length; i++) {
        // Initialise a set to store the string created from the current point
        let currentStringSet = new Set();

        // Loop through the letters from the current point
        for (let x = i; x < s.length; x++) {
            // Check if the current letter exists in the current Set
            if (currentStringSet.has(s[x])) {
                // Move on from the current letter without adding it (as it already exists in the set)
                break;
            } else {
                // Character not found, add it to the set
                currentStringSet.add(s[x]);
            }
        }

        // Update the longest string length (if this one was bigger)
        longestStringLength = Math.max(
            longestStringLength,
            currentStringSet.size
        );
    }

    return longestStringLength;
};




/*Solution #2: Array*/
var lengthOfLongestSubstring = function (s) {
    // Initialise an array to store the running characters and a longest string length variable
    let currentString = [];
    let longestStringLength = 0;

    // Loop through the provided string
    for (let i = 0; i < s.length; i++) {
        // Attempt to get the current character's position in the current string
        const currentCharacterPosition = currentString.indexOf(s[i]);

        // Check if the current character exists in the current string
        if (currentCharacterPosition !== -1) {
            // Chop the array off after the occurence of the character
            currentString.splice(0, currentCharacterPosition + 1);
        }

        // Add the current character to the array
        currentString.push(s[i]);

        // Store the current string length if bigger than the existing record
        longestStringLength = Math.max(
            longestStringLength,
            currentString.length
        );
    }

    return longestStringLength;
};
