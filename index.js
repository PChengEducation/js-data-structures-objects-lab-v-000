// Write your solution in this file!
const driver ={};

function updateDriverWithKeyAndValue(driver, key, value){
  const newObj = {...obj};
  newObj[key] = value;
  return newObj;
 }

 function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
   driver[key] = value;
   return driver;
 }

function deleteFromDriverByKey(driver, key){
  const newDriver = object.assign({}, driver);
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}
//const new1 = updateDriverWithKeyAndValue(driver, name, "Sam");
