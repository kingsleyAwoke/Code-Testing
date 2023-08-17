const assert = require('assert');

describe('Testing', function() {

    describe('Multiplication', function() {

        it('should equal 15 when 5 is multiplied by 3', function() {

            let result = 5 * 3;

            assert.equal(result, 15);
        });
    });

    describe('Addition', () => {
        it('If added the both numbers, is it equal to 89?', () => {
             let num1 = 23;
             let num2 = 66;

             const result = num1 + num2;

             assert.equal(result, 89);
        });
    });
});