import { toUpperCase } from '../app/Utils';

describe('Utils test suite', () => {
  test('should return uppercase', () => {
    const results = toUpperCase('hello');
    expect(results).toBe('HELLO');
  });
});
