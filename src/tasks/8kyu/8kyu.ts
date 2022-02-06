/*? test */

export function sum(a: number, b: number) {
    return a + b
}


/*?1. Short Long Short*/

export function solution(a: string, b: string) {
    return a.length > b.length ? b + a + b : a + b + a
}

/*?2 Volume of a Cuboid*/

export function getVolumeOfCuboid(length: number, width: number, height: number) {
    return length * width * height
}


/*?3 Find numbers which are divisible by given number*/
export function divisibleBy(numbers: Array<number>, divisor: number) {
    return numbers.filter(item => item % divisor === 0)
}

