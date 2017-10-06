function stringify(list) {
  if (list !== null) {
    let node = list;
    let stringified = [node.data];
    while (node.next !== null) {
      node = node.next;
      stringified.push(node.data);
    }
    stringified.push('null');
    return stringified.join(' -> ');
  }
  else {
    return 'null';
  }
}
