/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  let set = new Set<string>(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);

  let str = '';

  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      str += s[i].toLowerCase();
    }
  }

  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    if (str[left++] !== str[right--]) {
      return false;
    }
  }

  return true;
};
// @lc code=end

export const valid_palindrome = isPalindrome;
