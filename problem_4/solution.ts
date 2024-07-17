// Iterative approach using a for loop
// Time Complexity: O(n)
// Space Complexity: O(1)
function sum_to_n_a(n: number): number {
  let sum = 0;
  // Start loop from 1 instead of 0 for clarity
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Recursive approach
// Time Complexity: O(n)
// Space Complexity: O(n) due to recursion stack
function sum_to_n_b(n: number): number {
  // Use strict equality check for clarity
  if (n == 1) {
    return 1;
  }

  return n + sum_to_n_b(n - 1);
}

// Formula-based approach using arithmetic series sum formula
// Time Complexity: O(1)
// Space Complexity: O(1)
function sum_to_n_c(n: number): number {
  return (n * (n + 1)) / 2;
}

console.log(sum_to_n_a(5));
console.log(sum_to_n_b(5));
console.log(sum_to_n_c(5));
