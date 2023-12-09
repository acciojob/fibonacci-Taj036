function fibonacci(num, memo = {}) {
  if (num === 0 || num === 1) {
    return num;
  }

  if (memo[num]) {
    return memo[num];
  }

  memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  return memo[num];
}
module.exports = fibonacci;
