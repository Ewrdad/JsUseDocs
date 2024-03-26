import { isDoc } from './isDoc.js';


describe("isDoc", () => {

    it("should return true if the value is a document", () => {
        const value = `/**
        * @alias test doc
        * @param {string} test - test
        * @returns {string} test
        * @example
        */ `;
        expect(isDoc(value)).toBe(true);
    });

    it("should return false if the value is not just a document", () => {
        const value = `/**
        * @alias test doc
        * @param {string} test - test
        * @returns {string} test
        * @example
        */ 
        const test = 1;`;
        expect(isDoc(value)).toBe(false);
    });

    it("should return false if the value is not a document", () => {
        const value = `const test = 1;`;
        expect(isDoc(value)).toBe(false);
    });

    it("should error if the value is not a string", () => {
        const value = 1;
        expect(() => isDoc(value)).toThrow();
    });


})
