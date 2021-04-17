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

function solution(startStake, endStake, n, deadLock) {
  const stakeLength = startStake.length;

  let countOfSteps = 0;
  let newLock = startStake;

  if (
    +newLock > +endStake ||
    deadLock.includes(newLock) ||
    deadLock.includes(endStake)
  )
    return -1;

  for (let i = 0; i < stakeLength; i++) {
    while (newLock[i] !== endStake[i]) {
      if (deadLock.includes(newLock)) {
        return -1;
      }
      if (newLock === endStake) {
        return countOfSteps;
      }
      countOfSteps++;
      console.log("newLock : ", newLock);
      if (+newLock[i] < +endStake[i]) {
        newLock = newLock.replaceAt(i, `${+newLock[i] + 1}`);
      } else {
        newLock = newLock.replaceAt(i, `${+newLock[i] - 1}`);
      }
    }
  }

  if (newLock === endStake) {
    return countOfSteps;
  }

  return -1;
}

const startStake = "123";
const endStake = "313";
const n = 3;
const deadLock = ["113", "213", "413"];

console.log("Output : ", solution(startStake, endStake, n, deadLock));
