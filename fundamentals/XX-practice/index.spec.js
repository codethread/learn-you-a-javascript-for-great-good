import * as q from '.';

describe.skip('fundamentals practice', () => {
  it('double', () => {
    expect(q.double()).toEqual([8, 2, 6, 6, 6, 18, 10, 12, 14, 16, 18, 18]);
  });

  it.skip('squared', () => {
    expect(q.squared()).toEqual([16, 1, 9, 9, 9, 81, 25, 36, 49, 64, 81, 81]);
  });

  it.skip('minus2', () => {
    expect(q.minus2()).toEqual([2, -1, 1, 1, 1, 7, 3, 4, 5, 6, 7, 7]);
  });

  it.skip('turnedNegative', () => {
    expect(q.turnedNegative()).toEqual([-4, -1, -3, -3, -3, -9, -5, -6, -7, -8, -9, -9]);
  });

  it.skip('helloNumber', () => {
    expect(q.helloNumber()).toEqual(['hello 4', 'hello 1', 'hello 3', 'hello 3', 'hello 3', 'hello 9', 'hello 5', 'hello 6', 'hello 7', 'hello 8', 'hello 9', 'hello 9']);
  });

  it.skip('asString', () => {
    expect(q.asString()).toEqual(['4', '1', '3', '3', '3', '9', '5', '6', '7', '8', '9', '9']);
  });

  it.skip('youngOrOld', () => {
    expect(q.youngOrOld()).toEqual([
      '4 is young!',
      '1 is young!',
      '3 is young!',
      '3 is young!',
      '3 is young!',
      '9 is old!',
      '5 is just right',
      '6 is old!',
      '7 is old!',
      '8 is old!',
      '9 is old!',
      '9 is old!',
    ]);
  });

  it.skip('is3', () => {
    expect(q.is3()).toEqual([3, 3, 3]);
  });

  it.skip('isNot9', () => {
    expect(q.isNot9()).toEqual([4, 1, 3, 3, 3, 5, 6, 7, 8]);
  });
  it.skip('lessThan5', () => {
    expect(q.lessThan5()).toEqual([4, 1, 3, 3, 3]);
  });
  it.skip('moreThan4', () => {
    expect(q.moreThan4()).toEqual([9, 5, 6, 7, 8, 9, 9]);
  });
  it.skip('between3And8', () => {
    expect(q.between3And8()).toEqual([4, 5, 6, 7]);
  });
  it.skip('only3sAnd9s', () => {
    expect(q.only3sAnd9s()).toEqual([3, 3, 3, 9, 9, 9]);
  });
  it.skip('whenDoubledStillLessThan6', () => {
    expect(q.whenDoubledStillLessThan6()).toEqual([1]);
  });
  it.skip('onlyEven', () => {
    expect(q.onlyEven()).toEqual([4, 6, 8]);
  });
  it.skip('onlyOddOr4', () => {
    expect(q.onlyOddOr4()).toEqual([1, 3, 3, 3, 9, 5, 7, 9, 9]);
  });

  it.skip('sortedAccending', () => {
    expect(q.sortedAccending()).toEqual([1, 3, 3, 3, 4, 5, 6, 7, 8, 9, 9, 9]);
  });
  it.skip('sortedDescending', () => {
    expect(q.sortedDescending()).toEqual([9, 9, 9, 8, 7, 6, 5, 4, 3, 3, 3, 1]);
  });
});
