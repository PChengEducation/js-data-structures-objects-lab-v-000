// Write your solution in this file!
const driver ={};

function updateDriverWithKeyAndValue(obj, key, value){
  const newObj = {...obj};
  newObj[key] = value;
  return newObj;
 }

 function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
   driver[key] = value;
   return driver;
 }

function deleteFromDriverByKey(obj, key){
  const newDriver = object.assign({}, driver);
  return newDriver;
}
//const new1 = updateDriverWithKeyAndValue(driver, name, "Sam");
