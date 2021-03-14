// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].


const input = [1, 2, 3, 4, 5];
const input2 = [3, 2, 1];

function challengeDivision(array)
{
    const product = array.reduce((p, v) => p * v);
    return array.map(v => product / v);
}

// Follow-up: what if you can't use division?

function challenge(array)
{
    var newArray = [];
    for (let i = 0; i < array.length; i++){
        var product = null;
        for(let j = 0; j < array.length; j++){
            if (j != i){
                if(product == null)
                {
                    product = array[j];
                }
                else
                {
                    product = product * array[j];
                }
            }
        }
        newArray.push(product);
    }
    return newArray;
}

console.log(challenge(input));
console.log(challenge(input2));

console.log(challengeDivision(input));
console.log(challengeDivision(input2));