import {describe, expect, test ,it} from '@jest/globals';
import {sum, multiply} from '../index';


// testing the sum function
describe(' testing for sum function', () => {
    it('should return sum of two numbers', () => {
        const finalAnswer = sum(1,2);
        expect(finalAnswer).toBe(3);
    });

    it( 'should return the sum of negative numbers  ', () => {
        const finalAnswer = sum(-1,-2);
        expect(finalAnswer).toBe(-3);
    })
});

// testing the multiply function

describe(' testing for multiply function', () => {
    it('should return the multiplication of two numbers', () => {
        const finalAnswer = multiply(5,2);
        expect(finalAnswer).toBe(10);
    });
});


