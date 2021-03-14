
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  var n = 1, newArr = [];
  
   matrix.forEach((i) => {
     	if(n % 2 == 0 )
         newArr.push(i.reverse());
     	else
         newArr.push(i);
    n++;    
  })
  return newArr.flat(); 
}



