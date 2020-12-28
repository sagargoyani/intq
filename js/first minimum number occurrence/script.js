function solution(arr) {
  let res = 0;
  for (var i = 1; i <= arr.length; i++) {
    if (!arr.includes(i)) {
      res = i;
      break;
    }
  }

  return res;
}

const input = [1, 2, 3, 4, 6, 7, 8];

console.log("Input  : ", input);
console.log("Output : ", solution(input));
