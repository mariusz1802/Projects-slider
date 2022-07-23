let element: number;

function func(one: number, two: number) {
  element = one + two;
  return Number(element);
}

const manio = func(1, 2);

document.write(Math.floor(manio));
