// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!



//My Solution
function betterThanAverage(classPoints, yourPoints) {
    let Average = classPoints.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0)
      Average = Average / classPoints.length
    
      if(Average < yourPoints){
        return true
      }else {
        return false
      }
    }


    //Best pratice

    function betterThanAverage(classPoints, yourPoints) {
        return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
      }
    