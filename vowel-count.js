/**
 * Vowel Count
 * 
 * Return the number (count) of vowels in the given string.
 * We will consider a, e, i, o, and u as vowels for this Kata.
 * The input string will only consist of lower case letters and/or spaces.
 */

/**
 * Initial
 */
function getCount(str) {
  return str.match(/[aeiou]/g) ? str.match(/[aeiou]/g).length : 0;
}

/**
 * Optimised
 */
function getCount(str) {
    return (str.match(/[aeiou]/ig) || []).length;
}