function nextBigger(n){
  var first = n.toString().split("")
  var second = []
  for(i=first.length-1;i>-1;i--){
  second.unshift(first[i])
    if(Number(first[i]) <= Number(first[i-1]) == false) {
      break;
    }
  }
  first=first.join("").substr(0, first.length-second.length).split("");
  var lastChar = Number(first[first.length-1]);
  var lowest = 10;
  var lowestIndex;
  for(i=0;i<second.length;i++){
     if(second[i] > lastChar && second[i] < lowest) {
     lowest = second[i];
     lowestIndex=i;
     }
  }
  first[first.length-1]=lowest;
  second[lowestIndex]=lastChar;
  if (Number(first.concat(second).join("")) == n) return -1;
  second.sort( (a,b) => a-b)
  return Number(first.concat(second).join(""));
}
