function simple_assembler(program) {
  let output = {};
  for (let i = 0; i < program.length; i++) {
    const instruction = program[i].match(/(mov|inc|dec|jnz)/g).toString();
    const args = program[i].replace(instruction, '').trim().split(' ');
    if (instruction === 'mov') {
      if (output[args[1]] === undefined) {
        output[args[0]] = parseInt(args[1]);
      }
      else {
        output[args[0]] = output[args[1]]
      }
    }
    else if (instruction === 'inc') {
      output[args[0]]++;
    }
    else if (instruction == 'dec') {
      output[args[0]]--;
    }
    else if (instruction == 'jnz') {
      if (output[args[0]] !== 0) {
        i += parseInt(args[1]) - 1;
      }
    }
  }
  return output;
}
