/*
Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"

solution
https://dev.to/alisabaj/the-longest-palindromic-substring-solving-the-problem-using-constant-space-1bch

*/

function longestPalindrome(s) {
    if (s.length < 1) return "";
    let maxSubStart = 0;
    let maxSubLength = 0;
    for (let i = 0; i < s.length; i++) {
      const lengthCenteredAtChar = expandAroundCenter(s, i, i);
      const lengthCenteredAtSpace = expandAroundCenter(s, i, i + 1);
      const longestSubAtChar = Math.max(lengthCenteredAtChar, lengthCenteredAtSpace)
      if (longestSubAtChar > maxSubLength) {
        maxSubLength = longestSubAtChar;
        maxSubStart = i - Math.floor((maxSubLength - 1) / 2);
      }
    }
    return s.substr(maxSubStart, maxSubLength);
  }
  
  function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

