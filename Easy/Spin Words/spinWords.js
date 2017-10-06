function spinWords(string){
  spun = string.split(' ').map((word) => {
    if (word.length >= 5) word = word.split('').reverse().join('')
    return word
  }).join(' ');

  return spun;
}
