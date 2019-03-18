module.exports = function getZerosCount(number, base) {
  // your implementation

  function getPrimeFactorizationsBase(num) {
    let k= 2;
    let n = num;
    let pfs = new Map();
    while (n > 1) {
      if (n % k == 0) {
        let pf = pfs.get(k) || 0;
        pf++;
        pfs.set(k, pf);

        n = n / k;
      } else {
        k++;
      }
    } 
    return pfs;
  }

  function getPrimeFactorizationsNumber(num, pfBase) {
    let pfs = new Map();

    for(let key of pfBase.keys()) {
      while (num % key == 0) {
        let pf = pfs.get(key) || 0;
        pf++;
        pfs.set(key, pf);
        num = num / key;
      }
    }
    return pfs;
  }

  let pfBase = getPrimeFactorizationsBase(base);
  let pfNumber = new Map();

  for (let n = 1; n <= number; n++) {
    let pfNum = getPrimeFactorizationsNumber(n, pfBase);
    for(let key of pfBase.keys()) {
      if (pfNum.has(key)) {
        let v = pfNumber.get(key) || 0;
        let value = pfNum.get(key);
        pfNumber.set(key, v + value);
      }
    }
  }

  let values = [];
  pfBase.forEach( (value, key) => {
    if (pfNumber.has(key)) {
      values.push(Math.floor(pfNumber.get(key) / value));
    }
  });

  return Math.min(...values);

}