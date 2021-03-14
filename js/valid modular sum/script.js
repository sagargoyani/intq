const maxLength = 10;

function solution(n, arr) {
  let temp = [];
  let tempCheck;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      temp = new Array(maxLength).fill(0);
      tempCheck = true;
      const sb = arr.slice(i, j + 1);
      const newArr = sb.map((item) => [...(+item).toString(2)].reverse());

      console.log("newArr : ", newArr);

      for (let k = 0; k < newArr.length; k++) {
        for (let l = 0; l < newArr[k].length; l++) {
          if (!(l < maxLength)) {
            break;
          }

          temp[l] += +newArr[k][l];
        }
      }

      temp = temp.map((item) => item % 3);

      if (new Set(temp).size === 1) {
        return "Yes";
      }
    }
  }

  return "No";
}

function runScript() {
  // let n = "5"; // numbers of nodes
  // let arr = ["5", "2", "3", "1", "3"]; // list

  let n = "4"; // numbers of nodes
  let arr = ["8", "6", "1", "3"]; // list

  console.log("solution : ", solution(n, arr));
}

runScript();
