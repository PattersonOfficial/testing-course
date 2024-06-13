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

  it('should return info for a valid string', () => {
    // arrange:

    // act:
    const actual = getStringInfo('My-String');

    // assert:
    // Expecting the string to be lowercased
    expect(actual.lowerCase).toBe('my-string');
    // Expecting the string to be uppercased
    expect(actual.upperCase).toBe('MY-STRING');
    // Expecting the string to be an array of characters
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
    // Expecting the string to have a length of 9
    expect(actual.length).toBe(9);
    // Expecting the string to have a length of 9 v2
    expect(actual.characters).toHaveLength(9);
    // Expecting the string to have no extra info e.g: an empty object
    expect(actual.extraInfo).toEqual({});
    // Expecting to retrieve data if the string is included in the characters array
    expect(actual.characters).toContain<string>('M');
    // Expecting to retrieve data if the string is included in the characters array
    expect(actual.characters).toEqual(
      expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y', '-'])
    );
    // Expecting data from the extraInfo data object definition
    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).not.toBe(undefined);
    expect(actual.extraInfo).toBeDefined();
    expect(actual.extraInfo).toBeTruthy();
  });
});
