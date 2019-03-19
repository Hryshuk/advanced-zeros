module.exports = function getZerosCount(number, base) {
  // your implementation

  const PrimeFactorizationsBase = (num) => {
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

  const pfBase = PrimeFactorizationsBase(base);
  //console.log(pfBase);

  const key1 = Math.max(...pfBase.keys());
  const value1 = pfBase.get(key1);
  let pfNumber1 = 0;

  let key2 = null;
  let value2 = null;
  let pfNumber2 = 0;

  pfBase.delete(key1);
  if (pfBase.size) {
    key2 = Math.max(...pfBase.keys());
    value2 = pfBase.get(key2);
  }

  for (let n = 1; n <= number; n++) {
    let num = n;

    if (key1) {
      let value = 0;
      while (num % key1 == 0) {
        value++;
        num = num / key1;
      }
      pfNumber1 += value;
    }

    if (key2 && value2 > 4) {
      let value = 0;
      while (num % key2 == 0) {
        value++;
        num = num / key2;
      }
      pfNumber2 += value;
    }
  }

  if (pfNumber1 && pfNumber2 && value1 && value2) {
    return Math.min(Math.floor(pfNumber1 / value1), Math.floor(pfNumber2 / value2));
  } else if (pfNumber1 && value1){
    return Math.floor(pfNumber1 / value1);
  }


/*
  const PrimeFactorizationsNumber = (num, key) => {
    let pf = 0;
    while (num % key == 0) {
      pf++;
      num = num / key;
    }
    return pf;
  }

  const pfBase = PrimeFactorizationsBase(base);
  let pfNumber = new Map();
  //console.log(pfBase);
  for (let n = 1; n <= number; n++) {
    for(let key of pfBase.keys()) {
      const value = getPrimeFactorizationsNumber(n, key);
      const v = pfNumber.get(key) || 0;
      pfNumber.set(key, v + value); 
    }
  }

  let values = [];
  pfBase.forEach( (value, key) => {
    if (pfNumber.has(key)) {
      values.push(Math.floor(pfNumber.get(key) / value));
    }
  });
  return Math.min(...values);
*/
  
}