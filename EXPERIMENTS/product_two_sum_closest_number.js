
// find the closest sum to the target
// executes in 0.059 seconds

const arrayA = [-1,3,8,2,9,5];
const arrayB = [4,1,2,10,5,20];
const target = 24;


// approach: sort both arrays
// start pointer at top right corner (first row, last col)
// if sum of both numbers is smaller than target, move down
// if sum of both numbers is larger than target, move left
// the path to the number normally takes a downward diagonal shape from top corner to bottom corner

function findTwoSum() {

    arrayA.sort((a,b) => a - b);
    arrayB.sort((a,b) => a - b);

    // start at top right corner of sorted matrix
    let i = 0;
    let j = arrayB.length - 1;

    // keep track of the difference between sum and target
    let smallestDiff = Math.abs(arrayA[0] + arrayB[0] - target);
    let closestPair = [arrayA[0], arrayB[0]];

    while(i < arrayA.length && j >= 0) {
        let v1 = arrayA[i];
        let v2 = arrayB[j];

        // recalculate the difference between target and current sum
        let currentDiff = v1 + v2 - target;

        if(Math.abs(currentDiff) < smallestDiff) {
            // update accordingly if a smaller difference has been found, meaning we are closer
            smallestDiff = Math.abs(currentDiff);
            closestPair[0] = v1;
            closestPair[1] = v2;
        }

        // if the difference is smaller than 0, move down
        // if the difference is larger than 0, move left
        if(currentDiff === 0) {
            return closestPair;
        } else if(currentDiff < 0) {
            i += 1;
        } else if(currentDiff > 0) {
            j -= 1;
        }
    }

    return closestPair;
}


console.log(findTwoSum()); // -> [ 3, 20]