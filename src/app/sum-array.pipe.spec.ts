import { SumArrayPipe } from './sum-array.pipe';

describe('SumArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new SumArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
