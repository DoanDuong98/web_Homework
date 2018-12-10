'use strict'

function sort(input) {
  let index;
  for(let i =0; i< input.length -1; i++)
  {
    for(let j =i+1;j < input.length; j++){
      if(input[i] > input[j]){
        input[i] = index;
        input[j] = input[i];
        index = input[j];
      }
    }
  }
  return input;
 // return input.sort((a,b) => a-b); // Remove this line and change to your own algorithm
}

module.exports = sort
