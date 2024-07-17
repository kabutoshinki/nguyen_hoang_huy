# Problem 4: Three Ways to Sum to n

## Overview

This repository contains three unique implementations of the `sum_to_n` function in TypeScript. Each implementation computes the summation of integers from 1 to `n` in a different way. Below, you'll find details on each implementation along with their respective complexities.

## Implementations

### Implementation A: Iterative Approach

#### Function:

```typescript
// Iterative approach using a for loop
// Time Complexity: O(n)
// Space Complexity: O(1)
function sum_to_n_a(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
```

##### Explanation:

This function uses a simple `for` loop to iterate from 1 to `n` and accumulates the sum. It has a time complexity of `O(n)` because it iterates `n` times, and a space complexity of `O(1)` since it only uses a constant amount of extra space (for the sum variable).

### Implementation B: Recursive Approach

#### Function:

```typescript
// Recursive approach
// Time Complexity: O(n)
// Space Complexity: O(n) due to recursion stack
function sum_to_n_b(n: number): number {
  if (n === 1) {
    return 1;
  }
  return n + sum_to_n_b(n - 1);
}
```

##### Explanation:

This function uses recursion to calculate the sum. It starts from `n` and recursively adds `n-1` until it reaches the base case (`n === 1`). It has a time complexity of `O(n)` and a space complexity of `O(n)` due to the recursion stack, which grows linearly with `n`.

### Implementation C: Formula-based Approach

#### Function:

```typescript
// Formula-based approach using arithmetic series sum formula
// Time Complexity: O(1)
// Space Complexity: O(1)
function sum_to_n_c(n: number): number {
  return (n * (n + 1)) / 2;
}
```

##### Explanation:

This function uses the arithmetic series sum formula to directly compute the sum. It has a time complexity of `O(1)` since the calculation is done in constant time regardless of the size of `n`. The space complexity is also `O(1)` as it only requires a constant amount of extra space.

## Usage

```typescript
tsc solution.ts
node solution.js
```

## Example Usage:

```typescript
console.log(sum_to_n_a(5)); // Output: 15
console.log(sum_to_n_b(5)); // Output: 15
console.log(sum_to_n_c(5)); // Output: 15
```

## Conclusion

Each implementation provides a different approach to solving the same problem, demonstrating varying levels of complexity and efficiency. Depending on your specific use case and constraints, you can choose the most suitable implementation.
