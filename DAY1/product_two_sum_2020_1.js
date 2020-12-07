
const report = [616, 2455, 777, 1404, 3000, 2020];

function twoSum2020(report) {
    let nums = [];

    for (const r of report) {
        if (report.indexOf(2020 - r) !== -1) {
            nums.push(r);
        }
    }

    return nums.reduce((a, b) => a * b);
}

