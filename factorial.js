// This function returns the factorial of a number 

var factorial = function(num){
  var n = num;
  var p = 1;

  if(n === 0 || n === 1){
    return p
  }
  for(var i = 2; i <= num; i++){
    p = p * i
  }
  return p
}

