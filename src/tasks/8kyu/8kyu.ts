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

/*?4 My head is at the wrong end!*/

export function fixTheMeerkat(arr: Array<string>) {
    return arr.reverse()
}

/*?5 Return the Nth Even Number*/

export function nthEven(n: number) {
    return 2 * n - 2
}

/*?6 A Needle in the Haystack*/

export function findNeedle(haystack: Array<any>) {
    let position = haystack.indexOf('needle', 0)
    return `found the needle at position ${position}`
}

/*?7 Beginner - Lost Without a Map*/

export function maps(x: Array<number>) {
    return x.map(item=>item*2)
}