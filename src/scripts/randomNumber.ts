function hasTowIdenticalDigits(number: number): boolean {
    const digits: number[] = number.toString().split('').map(Number)
    const digitsSet: Set<number> = new Set(digits)

    return digits.length !== digitsSet.size
}

function randomNumber(): number {
    const min: number = 10 ** (4 - 1)
    const max: number = (10 ** 4) - 1
    let rnd: number

    do {
        rnd = Math.floor(Math.random() * (max - min + 1)) + min;
    }while (hasTowIdenticalDigits(rnd))

    return rnd
}

export default randomNumber;