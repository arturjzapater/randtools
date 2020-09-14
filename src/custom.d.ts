export as namespace custom

export function choose(data: any[], chance: number[]): any

export function sequence(start: number, chance: number[], opts?: { step?: number }): number
