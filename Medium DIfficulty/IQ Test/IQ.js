function iqTest(numbers){
  var numArr = numbers.split(" ");
  var even = 0;
  var odd = 0;
  var answer;
  for (i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 0) {
      even++;
    }
    else if (numArr[i] % 2 == 1) {
      odd++;
    }
  }
  var test = odd > even ? "even" : "odd";
  if (test == "odd") {
    for (i = 0; i < numArr.length; i++) {
      if (numArr[i] % 2 == 1) {
        answer = i+1;
      }
    }
  }
  else if (test == "even") {
    for (i = 0; i < numArr.length; i++) {
      if (numArr[i] % 2 === 0) {
        answer = i+1;
      }
    }
  }
  return answer;
}
