'use strict'

function search(input, target) {
  for( let i =0; i < input.lenght; i ++)
  {
    if( input[i] == target){
     return i;
  }
}
return -1;
}

module.exports = search
