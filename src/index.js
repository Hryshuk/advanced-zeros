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

  let key = Math.max(...pfBase.keys());
  let pfNumber = 0;

  for (let n = 1; n <= number; n++) {
    
    
    //for(let key of pfBase.keys()) {
      //let value = getPrimeFactorizationsNumber(n, key);

      /* let num = n;
      let value = 0;
      while (num % key == 0) {
        pfNumber++;
        num = num / key;
      } */

      pfNumber = pfNumber + getPrimeFactorizationsNumber(n, key);
    //}
  }

  /* let values = [];
  pfBase.forEach( (value, key) => {
    if (pfNumber.has(key)) {
      values.push(Math.floor(pfNumber.get(key) / value));
    }
  }); */

  return Math.floor(pfNumber / pfBase.get(key));

  //return Math.min(...values);

}