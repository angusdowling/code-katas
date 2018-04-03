/**
 * Sum of Odd Numbers
 * 
 * Given the triangle of consecutive odd numbers:
 * 
 *            1
 *         3     5
 *       7    9    11
 *    13    15   17    19
 * 21   23    25    27    29
 * ...
 * 
 * Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:
 * 
 * rowSumOddNumbers(1); // 1
 * rowSumOddNumbers(2); // 3 + 5 = 8
*/

/**
 * Initial, uses Gauss’ Formula for the Sum Of The Numbers From 1 To n
 */
function rowSumOddNumbers(n) {
  return (n) * (((n - 1) * (n) + 1) - 1) + (n) * (n + 1) / 2 + (n - 1) * (n) / 2;
}

/**
 * Optimised
 * Proof: http://web.cs.ucla.edu/~klinger/cubvis_6_15_01.htm
 */
function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
}