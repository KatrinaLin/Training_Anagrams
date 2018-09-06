const main = require('../main/main');

describe('generateAnagrams()', () => {

    it('should return [] when user inputs empty string', function() {
        let input = '';
        let result = main(input);
        let expected = [];
        expect(result).toEqual(expected)
    });

    it('should return [a] when user inputs a', function() {
        let input = 'a';
        let result = main(input);
        let expected = ['a'];
        expect(result).toEqual(expected)
    });

    it('should return array of length 2 when user inputs string with length 2', function() {
        let input = 'ab';
        let result = main(input);
        let expected = ['ab', 'ba'];
        expect(result).toEqual(expected)
    });

    it('should return array of length 6 when user inputs string with length 3 with no duplicate letters', function() {
        let input = 'abc';
        let result = main(input).length;
        let expected = 6;
        expect(result).toEqual(expected)
    });

});

