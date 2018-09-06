const main = require('../main/main');

describe('generateAnagrams()', () => {

    it('should return [] when user inputs empty string', function() {
        let input = '';
        let result = main(input);
        let expected = [];
        expect(result).toEqual(expected)
    });


});

