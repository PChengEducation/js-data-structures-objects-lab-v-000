// Write your solution in this file!
const driver ={};

function updateDriverWithKeyAndValue(obj, key, value){
  const newObj = {...obj};
  newObj[key] = value;
  return newObj;
 }

 function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
   return object.assign({}, driver, key, value);
 }

//const new1 = updateDriverWithKeyAndValue(driver, name, "Sam");
