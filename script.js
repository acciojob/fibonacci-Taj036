function fibonacci(n) {
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    let fibArray = [0, 1];
    for (let i = 2; i < n; i++) {
      fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
    return fibArray[n - 1];
  }
}
module.exports = fibonacci;
