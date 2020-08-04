const clone = require('./clone');

module.exports = (toObj, ...fromObjs) => {
  let result = toObj;

  for (let i = 0; i < fromObjs.length; i++) {
    result = clone(toObj, fromObjs[i]);
  }

  return result;
};
