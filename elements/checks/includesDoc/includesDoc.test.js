import {includesDoc} from './includesDoc';

describe('includesDoc', () => {

    it("should return true if the value includes a document", () => {
        const value = `/**
        * @alias test doc
        * @param {string} test - test
        * @returns {string} test
        * @example
        */ `;
        expect(includesDoc(value)).toBe(true);
    });

    it("should return false if the value does not include a document", () => {
        const value = `const test = 1;`;
        expect(includesDoc(value)).toBe(false);
    });

    it("should error if the value is not a string", () => {
        const value = 1;
        expect(() => includesDoc(value)).toThrow();
    });


    it("should return false if strict is true and doc doesnt contain a tag", () => {    
        const value = `/**
        * test doc
        */ `;
        expect(includesDoc(value, true)).toBe(false);
    })

    it("should return true if strict is true and doc contains a tag", () => {    
        const value = `/**
        * @alias test doc
        */ `;
        expect(includesDoc(value, true)).toBe(true);
    })

    it("should return false if strict and string does not include doc", () => {
        const value = `const test = 1;`;
        expect(includesDoc(value, true)).toBe(false);
    });

});