module.exports = function generateAnagrams(input) {
    if (input.length === 2) {
        return [input, swap(input.split(''), 0, 1).join('')];
    }

    if (input === 'a') {
        return ['a'];
    }

    if (input.length === 0) {
        return [];
    }

    return permutation(input.split(''), 0, []);
};

function permutation(arr, index, result) {
    if (index === arr.length) {
        result.push(arr.join(''));
        console.log(result);
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