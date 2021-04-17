function solution(num) {
  let results = [];
  let n = num.toString().length;
  let arr = num.toString().split("");

  function checkIsValid(a, b, c, d) {
    return arr[a] === arr[b] && arr[c] === arr[d] && +arr[b] + 1 === +arr[c];
  }

  function checkStable(a, b, c, d) {
    const sol = "" + a + b + c + d;
    if (checkIsValid(a, b, c, d) && !results.includes(sol)) {
      results.push(sol);
    }
  }

  for (let i = 0; i < n - 3; i++) {
    for (let j = i + 1; j < n - 2; j++) {
      for (let k = j + 1; k < n - 1; k++) {
        for (let l = k + 1; l < n; l++) {
          checkStable(i, j, k, l);
        }
      }
    }
  }

  return results.length;
}

// const num = 22233424;
const num = 101222;

console.log("Output : ", solution(num));
