module.exports = function generateAnagrams(input) {
    return input.length === 0 ? [] : permutation(input.split(''), 0, []);
};

function permutation(arr, index, result) {
    if (index === arr.length) {
        result.push(arr.join(''));
        return result;
    }

    for (let i = index; i < arr.length; i++) {
        swap(arr, i, index);
        permutation(arr, index + 1, result);
        swap(arr, i, index);
    }
    return result;
}

function swap(arr, idx1, idx2) {
    let tmp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = tmp;
    return arr;
}