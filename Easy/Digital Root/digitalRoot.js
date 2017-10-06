function digital_root(n) {
  do {
    n = n.toString().split("").map((v, i)=>parseInt(v)).reduce((a,b)=> a+b);
  }
  while (n.toString().length != 1);
  return n
}
