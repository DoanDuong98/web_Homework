'use strict'

function generate(testLengthArray){
  let resultList = [];
  for (let i = 0; i < testLengthArray.length - 4; i++){
    var array = generateArray(testLengthArray[i]);
    var random = Math.floor(Math.random()*100);
    var obj = {
      input: array,
      target: random,
      output: search(array, random)
    };
    resultList.push(obj);
  }

  //middle index
  var array =  generateArray(testLengthArray[testLengthArray.length - 4]);
  let randomInMiddle =  Math.floor(Math.random()*(array[array.length-1] - array[1])) + array[1];
  let objMI = {
    input: array,
    target: randomInMiddle,
    output: search(array, randomInMiddle)
  }
  resultList.push(objMI);
  //not found
  array = generateArray(testLengthArray[testLengthArray.length-3]);
  let randomExclusive = Math.floor(Math.random()*100) + array[array.length-1];
  let objNF = {
    input: array,
    target: randomExclusive,
    output:  search(array, randomExclusive)
  }
  resultList.push(objNF);
  //last index
  array = generateArray(testLengthArray[testLengthArray.length - 2]);
  let objLI = {
    input: array,
    target: array[array.length-1],
    output: search(array,array[array.length-1])
  }
  resultList.push(objLI);
  //first index
  array = generateArray(testLengthArray[testLengthArray.length - 1]);
  let objFI = {
    input: array,
    target: array[0],
    output: 0
  }
  resultList.push(objFI);

  return resultList;
}

function generateArray(number){
  let array = [];
  for(let i = 0; i < number;i++){
    array[i] = Math.floor(Math.random() * number);
  }
  sort(array);
  return array;
}

function search(input, target) {
  return  input.indexOf(target);
}

function sort(input) {
  return input.sort((a,b) =>{a-b});
}
module.exports = generate