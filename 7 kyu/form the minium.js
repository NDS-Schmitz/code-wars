// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

function minValue(values){
    values = [...new Set(values)];
    values = values.sort((a,b) => (a-b)).join('')
    return Number(values)
    }

    //other solution

    function minValue(values){
        let arr = Array.from(new Set(values))
        return parseInt(arr.sort().join(''))
      }