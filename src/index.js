module.exports = function getZerosCount(number, base) {
  // your implementation

  const primeFactorizationsBase = (num) => {
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

  const primeFactorizationsCount = (num, key) => {
    let count = 0;
    let i = 1;
    let n = 0;
    do {
      n = Math.floor(num / Math.pow(key, i));
      count += n;
      i++;
    } while (n > 0)

    return count;
  }

  const pfBase = primeFactorizationsBase(base);
  //console.log(pfBase);
  let pfNumber = new Map();

  for(let key of pfBase.keys()) {
    const count = primeFactorizationsCount(number, key);
    const value = pfNumber.get(key) || 0;
    pfNumber.set(key, value + count); 
  }

  let values = [];
  pfBase.forEach( (value, key) => {
    if (pfNumber.has(key)) {
      values.push(Math.floor(pfNumber.get(key) / value));
    }
  });
  return Math.min(...values);

/*
  const primeFactorizationsCount = (num, key) => {
    let count = 0;
    while (num % key == 0) {
      count++;
      num = num / key;
    }
    return count;
  }

  const pfBase = primeFactorizationsBase(base);
  let pfNumber = new Map();
  //console.log(pfBase);
  for (let n = 1; n <= number; n++) {
    for(let key of pfBase.keys()) {
      const count = primeFactorizationsCount(n, key);
      const value = pfNumber.get(key) || 0;
      pfNumber.set(key, value + count); 
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