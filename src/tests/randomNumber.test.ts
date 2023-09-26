import { expect, test } from 'vitest'
import randomNumber from '../scripts/randomNumber'

test('random number is less than 9876', () => {
    expect(randomNumber())
    .toBeLessThanOrEqual(9876)
})

test('random number is greater than 1234', () => {
    expect(randomNumber())
    .toBeGreaterThanOrEqual(1234)
})

test('random number has no multipule digits', () => {
    function hasTowIdenticalDigits(number: number): boolean {
        const digits: number[] = number.toString().split('').map(Number)
        const digitsSet: Set<number> = new Set(digits)
    
        return digits.length !== digitsSet.size
    }
    
    expect(randomNumber())
    .not.toSatisfy(hasTowIdenticalDigits)
})