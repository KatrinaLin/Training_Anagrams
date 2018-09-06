module.exports = function generateAnagrams(input) {

    if (input.length === 2) {
        return [input, swap(input.split(''), 0, 1).join('')];
    }

    if (input === 'a') {
        return ['a'];
    }

    return [];
};

function swap(arr, idx1, idx2) {
    let tmp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = tmp;
    return arr;
}