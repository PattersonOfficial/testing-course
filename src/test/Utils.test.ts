import { getStringInfo, toUpperCase } from '../app/Utils';

describe('Utils test suite', () => {
  it('should return uppercase of valid string ', () => {
    // arrange:
    const sut = toUpperCase;
    const expected = 'HELLO';

    //act:
    const actual = sut('hello');

    //assert:
    expect(actual).toBe(expected);
  });

  // parameterized tests
  describe('ToUpperCase examples', () => {
    it.each([
      { input: 'abc', expected: 'ABC' },
      { input: 'My-String', expected: 'MY-STRING' },
      { input: 'def', expected: 'DEF' },
    ])('$input toUpperCase should be $expected', ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
  });

  describe('getStringInfo for args: My-String should', () => {
    it('return right length', () => {
      const actual = getStringInfo('My-String');
      // Expecting the string to have a length of 9
      expect(actual.length).toBe(9);
      // Expecting the string to have a length of 9 v2
      expect(actual.characters).toHaveLength(9);
    });

    it('return right lowercase', () => {
      const actual = getStringInfo('My-String');
      // Expecting the string to be lowercased
      expect(actual.lowerCase).toBe('my-string');
    });

    it('return right uppercase', () => {
      const actual = getStringInfo('My-String');
      // Expecting the string to be uppercased
      expect(actual.upperCase).toBe('MY-STRING');
    });

    it('return right characters', () => {
      const actual = getStringInfo('My-String');
      expect(actual.characters).toEqual([
        'M',
        'y',
        '-',
        'S',
        't',
        'r',
        'i',
        'n',
        'g',
      ]);
      // Expecting the string to have no extra info e.g: an empty object
      expect(actual.extraInfo).toEqual({});
      // Expecting to retrieve data if the string is included in the characters array
      expect(actual.characters).toContain<string>('M');
      // Expecting to retrieve data if the string is included in the characters array
      expect(actual.characters).toEqual(
        expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y', '-'])
      );
    });

    it('return defined extraInfo', () => {
      const actual = getStringInfo('My-String');
      expect(actual.extraInfo).toBeDefined();
    });

    it('return defined extra info', () => {
      const actual = getStringInfo('My-String');
      expect(actual.extraInfo).toBeDefined();
    });

    it('return right extra info', () => {
      const actual = getStringInfo('My-String');
      expect(actual.extraInfo).toEqual({});
    });
  });
});
