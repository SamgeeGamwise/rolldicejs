export default class Dice {
    public static roll(dnd: string): number
    public static roll(numOfSides: number): number
    public static roll(diceCount: number, numOfSides: number): number
    public static roll(diceCount: number, numOfSides: number, details: boolean): number[]
    public static roll(first: number | string, second?: number, details: boolean = false): number | number[] {
        if (typeof first !== 'number') {
            const amounts: number[] = first
                .toLowerCase()
                .split('d')
                .map((stringVal: string) => Number(stringVal))

            if (amounts.length === 2) {
                if (details) {
                    const rollList: number[] = []
                    for (let i = 0; i < amounts[0]; i++) {
                        rollList.push(Dice.random(1, amounts[1]))
                    }
                    return rollList
                } else {
                    let sum: number = 0
                    for (let i = 0; i < amounts[0]; i++) {
                        sum += Dice.random(1, amounts[1])
                    }
                    return sum
                }
            } else {
                return 0
            }
        } else if (typeof second === 'undefined') {
            return Dice.random(1, first)
        } else if (details) {
            const rollList: number[] = []
            for (let i = 0; i < first; i++) {
                rollList.push(Dice.random(1, second))
            }
            return rollList
        } else {
            let sum: number = 0
            for (let i = 0; i < first; i++) {
                sum += Dice.random(1, second)
            }
            return sum
        }
    }

    private static random(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
}
