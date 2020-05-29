export const closestToZero = (inputs: number[] = []): number => {
    if (!inputs || inputs.length == 0) {
        return 0
    }

    const sorted_list = inputs.map(e => Math.abs(e)).sort((a, b) => a < b ? -1 : 1)
    const first = sorted_list[0]
    return inputs.indexOf(first) !== -1 ? first : -first
};

export const minDistance = (inputs: number[] = []): number => {
    if (!inputs || inputs.length == 0) {
        return 0
    }

    var distances_list = [];
    var value = 0;
    var substract = 0;

    inputs.map(function (element) {
        for (value of inputs) {
            substract = element - value;
            if (substract > 0) {
                distances_list.push(element - value)
            }
        }
    })

    const result = Math.min(...distances_list);
    return result;
};

const a = [9, 5, 15, 9, 3];

console.log(a);
console.log(minDistance(a));

export const minDistanceProf = (inputs: number[] = []): number => {
    const sorted = inputs.map(e => Math.abs(e)).sort((a, b) => a < b ? -1 : 1)
    var min = sorted[sorted.length - 1] - sorted[0];
    for (let i = 0; i < sorted.length; i++) {
        const newMin = sorted[i] - sorted[i + 1];
        min = newMin < min && newMin > 0 ? newMin : min;
    }
    return min;
}
