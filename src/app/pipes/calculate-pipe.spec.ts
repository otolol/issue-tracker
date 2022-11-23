import { CalculatePipe } from './calculate.pipe';

describe('Calculate Pipe', () => {
  const pipe = new CalculatePipe();

  it('should return original text, if non evalutable string is passed', () => {
    expect(pipe.transform('Hello world')).toBe('Hello world');
  });

  it('should return original text, if ivalid operation is passed', () => {
    expect(pipe.transform('5-4+a')).toBe('5-4+a');
  });

  it('should return calculted result', () => {
    expect(pipe.transform('5-4+6')).toBe(7);
  });
});
