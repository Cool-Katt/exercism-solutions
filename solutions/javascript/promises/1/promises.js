//
// This is only a SKELETON file for the 'Promises' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const promisify = (callbackPattern) => {
  return (...args) => new Promise((resolve, reject) => {
    const callback = (error, data) => {
      error ? reject(error) : resolve(data)
    }
    callbackPattern(...args, callback);
  });
};

export const all = (promises) => {
  if(!promises) return Promise.resolve();
  return promises.reduce((acc, currentPromise) => {
    return currentPromise.then(currentResult => {
      return acc.then(accResults => [...accResults, currentResult]);
    });
  }, Promise.resolve([]));
};

export const allSettled = (promises) => {
  if(!promises) return Promise.resolve();
  return promises.reduce((acc, currentPromise) => {
    return currentPromise.then(
      currentResult => {
        return acc.then(accResults => [...accResults, currentResult]);
      },
      currentReason => {
        return acc.then(accResults => [...accResults, currentReason])
      }
      );
  }, Promise.resolve([]));
};

export const race = (promises) => {
  if(!promises) return Promise.resolve();
  if(promises.length === 0) return Promise.resolve([]);
  return new Promise((resolve, reject) => promises.forEach(p => p.then(resolve, reject)));
};

export const any = (promises) => {
  if(!promises) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const rejectedPromises = promises.map(p => p.then(resolve));
    allSettled(rejectedPromises).then(reject);
  });
};