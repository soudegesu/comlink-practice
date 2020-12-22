export class Sample {
  constructor() {
    console.log('instantinate');
  }

  init(data: any) {
    console.log(data);
    console.log(`init:`);
  }

  update() {
    console.log('update');
  }
}

typeof Sample;
