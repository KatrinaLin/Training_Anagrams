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


});

