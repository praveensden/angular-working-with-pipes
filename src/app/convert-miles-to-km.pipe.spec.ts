import { ConvertMilesToKmPipe } from './convert-miles-to-km.pipe';

describe('ConvertMilesToKmPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertMilesToKmPipe();
    expect(pipe).toBeTruthy();
  });
});
