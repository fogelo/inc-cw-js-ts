import {divisibleBy, fixTheMeerkat, getVolumeOfCuboid, solution, sum, nthEven, findNeedle} from './8kyu';

/*? test */
test('sum should be correct', () => {
    const result = sum(1, 2)
    expect(result).toBe(3)
})


/*?1 Short Long Short*/
test('string should be correct', () => {
    expect(solution('45', '1')).toBe('1451');
    expect(solution('13', '200')).toBe('1320013');
    expect(solution('Soon', 'Me')).toBe('MeSoonMe');
    expect(solution('U', 'False')).toBe('UFalseU');
})

/*?2 Volume of a Cuboid*/
test('volume of a cuboid should be correct', () => {
    expect(getVolumeOfCuboid(1, 2, 2)).toBe(4);
    expect(getVolumeOfCuboid(6.3, 2, 5)).toBe(63);
})

/*?3 Find numbers which are divisible by given number*/
test('found numbers should be correct', () => {
    expect(divisibleBy([1, 2, 3, 4, 5, 6], 2)).toStrictEqual([2, 4, 6])
    expect(divisibleBy([1, 2, 3, 4, 5, 6], 3)).toStrictEqual([3, 6])
    expect(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4)).toStrictEqual([0, 4])
    expect(divisibleBy([0], 4)).toStrictEqual([0])
    expect(divisibleBy([1, 3, 5], 2)).toStrictEqual([])
})

/*?4 My head is at the wrong end!*/
test('the order of item should be correct', () => {
    expect(fixTheMeerkat(['tail', 'body', 'head'])).toStrictEqual(['head', 'body', 'tail']);
    expect(fixTheMeerkat(['tails', 'body', 'heads'])).toStrictEqual(['heads', 'body', 'tails']);
    expect(fixTheMeerkat(['bottom', 'middle', 'top'])).toStrictEqual(['top', 'middle', 'bottom']);
    expect(fixTheMeerkat(['lower legs', 'torso', 'upper legs'])).toStrictEqual(['upper legs', 'torso', 'lower legs']);
    expect(fixTheMeerkat(['ground', 'rainbow', 'sky'])).toStrictEqual(['sky', 'rainbow', 'ground']);
})

/*?5 Return the Nth Even Number*/

test('number should be even', () => {
    expect(nthEven(1)).toBe(0)
    expect(nthEven(2)).toBe(2)
    expect(nthEven(3)).toBe(4)
    expect(nthEven(100)).toBe(198)
    expect(nthEven(1298734)).toBe(2597466)
})

/*?6 A Needle in the Haystack*/

test('needle position should be correct', () => {
    expect(findNeedle(['3', '123124234', undefined, 'needle', 'world'])).toBe('found the needle at position 3')
})

