String.prototype.replaceAt = function (index, replacement) {
  if (index >= this.length) {
    return this.valueOf();
  }

  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};

function solution(n, on, o, l, r) {
  let bin = "0".repeat(+n);
  let count = 0;
  var temp = "";
  for (var i = 0; i < +on; i++) {
    temp = bin.substring(+l[i], 1 + +r[i]);
    if (o[i] === "0") {
      temp = [...temp].map((item) => (item === "1" ? "0" : "1")).join("");
      bin = bin.replaceAt(+l[i], temp);
    } else {
      count += (temp.match(/1/g) || []).length;
    }
  }

  return count;
}

const _n = "5";
const _on = "6";
const _o = ["0", "1", "0", "1", "0", "1"]; // 0 = invert 1 = count
const _l = ["0", "2", "4", "1", "0", "0"];
const _r = ["2", "4", "4", "2", "4", "4"];

console.log("Output : ", solution(_n, _on, _o, _l, _r));
