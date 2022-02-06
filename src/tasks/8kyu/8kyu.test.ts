import {solution, sum} from './8kyu';

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
