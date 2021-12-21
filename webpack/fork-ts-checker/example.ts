export interface Example {
  item: string;
}

export class SuperExample implements Example {
  item: string = 'Fake';
}

const example = new SuperExample();
console.log(example.item);
