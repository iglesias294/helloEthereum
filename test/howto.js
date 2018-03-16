const assert = require('assert');

class Car {
  park() {
    return 'stopped';
  }

  drive() {
    return 'vroom';
  }
}
let car
beforeEach(()=> {
  car = new Car();
})
//describe is used for organizing
//second argument is a function, list of its
describe('Car', () => {

  it('should stop when parked', () => {
    assert.equal(car.park(), 'stopped');
  });

  it('can drive', () => {
    assert.equal(car.drive(), 'vroom');
  })

});
