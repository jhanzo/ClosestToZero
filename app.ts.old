export const closestToZero = (inputs: number[] = []): number => {
    if (!inputs || inputs.length == 0) {
        return 0
    }

    const sorted_list = inputs.map(e => Math.abs(e)).sort((a,b) => a < b ? -1 : 1)
    const first = sorted_list[0]
    return inputs.includes(first) ? first : -first
};