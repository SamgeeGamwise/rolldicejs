export default class Dice {
    public static roll(max: number): number
    public static roll(count: number, max: number): number
    public static roll(count: number, max: number, details: boolean): number[]
    public static roll(first: number, second?: number, details: boolean = false): number | number[] {
        if (typeof second === "undefined") {
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