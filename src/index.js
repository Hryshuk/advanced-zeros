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

  function getPrimeFactorizationsNumber(num, key) {
    let pf = 0;
    while (num % key == 0) {
      pf++;
      num = num / key;
    }
    return pf;
  }

  let pfBase = getPrimeFactorizationsBase(base);
  

  console.log(pfBase);

  let key1 = Math.max(...pfBase.keys());
  let value1 = pfBase.get(key1);
  let pfNumber1 = 0;

  let key2 = null;
  let value2 = null;
  let pfNumber2 = 0;

  pfBase.delete(key1);
  if (pfBase.size) {
    key2 = Math.max(...pfBase.keys());
    value2 = pfBase.get(key2);
  }

  //let pfNumber = new Map();

  for (let n = 1; n <= number; n++) {
    let num = n;

    //for(let key of pfBase.keys()) {
      //let value = getPrimeFactorizationsNumber(n, key);

      if (key1) {
        let value = 0;
        while (num % key1 == 0) {
          value++;
          num = num / key1;
        }
        pfNumber1 = pfNumber1 + value;
      }
      /* let v = pfNumber.get(key) || 0;
      pfNumber.set(key, v + value); */

      if (key2) {
        let value = 0;
        while (num % key2 == 0) {
          value++;
          num = num / key2;
        }
        pfNumber2 = pfNumber2 + value;
      }

      //pfNumber = pfNumber + getPrimeFactorizationsNumber(n, key);
    //}
  }

  /* let values = [];
  pfBase.forEach( (value, key) => {
    if (pfNumber.has(key)) {
      values.push(Math.floor(pfNumber.get(key) / value));
    }
  }); */

  if (pfNumber1 && pfNumber2 && value1 && value2) {
    return Math.min(Math.floor(pfNumber1 / value1), Math.floor(pfNumber2 / value2));
  } else if (pfNumber1 && value1){
    return Math.floor(pfNumber1 / value1);
  }

  //return Math.min(...values);

}