const clone = require('./clone');

module.exports = (toObj, ...fromObjs) => {
  const newObj = JSON.parse(JSON.stringify(toObj));

  let result = newObj;

  for (let i = 0; i < fromObjs.length; i++) {
    result = clone(newObj, fromObjs[i]);
  }

  return result;
};
