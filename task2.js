// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

var solutionArr = ['00', '00'];
var positionI = 0, positionJ = 0;

function solution(A, B, C, D) {
    // write your code in JavaScript (Node.js 6.4.0)

    solutionArr = ['00', '00'];
    positionI = 0, positionJ = 0;

    var arr = [A, B, C, D];

    helper(arr, 24, 0);

    if (positionI > positionJ) {
      arr.splice(positionI, 1);
      arr.splice(positionJ, 1);
    } else {
      arr.splice(positionJ, 1);
      arr.splice(positionI, 1);
    }

    helper(arr, 60, 1);

    if ((solutionArr[0] == 0 || solutionArr[1] == 0) && A != 0 && B != 0 && C != 0 && D !=0) {
      return 'NOT POSSIBLE';
    } else {
      return solutionArr.join(":");
    }
    
}

function helper(arr, number, position) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (i == j) {
        continue;
      }
      
      var temp = ''.concat(arr[i]).concat(arr[j]);
      if (temp < number && temp >= solutionArr[position]) {
        solutionArr[position] = temp;
        positionI = i;
        positionJ = j;
      }
    }
  }
}