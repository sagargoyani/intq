function solution(obj) {
  let final = {};

  const flattenObj = (item, _key = "") => {
    if (typeof item === "object" && item !== null) {
      for (const key in item) {
        if (item.hasOwnProperty(key)) {
          const temp = _key ? _key + "." + key : "" + key;
          flattenObj(item[key], temp);
        }
      }
    } else {
      final[_key] = item;
    }
  };

  flattenObj(obj);

  return final;
}

const input = {
  l1: {
    l2: {
      l3: "n1",
      l4: "n2",
      l5: "n3",
    },
    l6: {
      l7: {
        l8: "n4",
      },
    },
    l9: "n5",
  },
};

console.log("Input  : ", input);
console.log("Output : ", solution(input));
