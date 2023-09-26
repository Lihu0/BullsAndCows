import { expect, test } from 'vitest'
import calculateBullsAndCows from '../scripts/calulateBullsAndCows'

test('same numbers give 4 bulls and 0 cows', () => {
    expect(calculateBullsAndCows(1234, 1234))
    .toEqual({ bulls: 4, cows: 0 })
})

test('same numbers in different order give 0 bulls and 4 cows', () => {
    expect(calculateBullsAndCows(1234, 4321))
    .toEqual({ bulls: 0, cows: 4 })
})

test('all diiferent numbers give 0 bulls and 0 cows', () => {
    expect(calculateBullsAndCows(1234, 5678))
    .toEqual({ bulls: 0, cows: 0 })
})

test('for strings the result is the same', () => {
    expect(calculateBullsAndCows('1234', '5678'))
    .toEqual(calculateBullsAndCows(1234, 5678))
})