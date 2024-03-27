import { parseDocString } from "./parseDocString";

describe("parseDocString", () => {
  it("should return an object with the correct properties", () => {
    const DocString = `/**
    * @alias testAlias
    * @description testDescription of some kind
    * @param {string} testParam testParam description
    * @param {string} testParam2 testParam2 description
    * @returns {Object} testReturn testReturn description
    */`;

    const result = parseDocString(DocString);

    const expectedResult = {
      alias: [
        {
          fullValue: "testAlias",
          arg1: "testAlias",
          arg2: undefined,
          arg3: undefined,
        },
      ],
      description: [
        {
          fullValue: "testDescription of some kind",
          arg1: "testDescription",
          arg2: "of",
          arg3: "some kind",
        },
      ],
      param: [
        {
          fullValue: "{string} testParam testParam description",
          arg1: "{string}",
          arg2: "testParam",
          arg3: "testParam description",
        },
        {
          fullValue: "{string} testParam2 testParam2 description",
          arg1: "{string}",
          arg2: "testParam2",
          arg3: "testParam2 description",
        },
      ],
      returns: [
        {
          fullValue: "{Object} testReturn testReturn description",
          arg1: "{Object}",
          arg2: "testReturn",
          arg3: "testReturn description",
        },
      ],
    };

    expect(result).toEqual(expectedResult);
  });

  it("should handle multiline tags", () => {
    const DocString = `/**
    * @alias testAlias
    * @description testDescription of some kind
    * @param {string} testParam testParam description
multiple lines
and stuff
    * @param {string} testParam2 testParam2 description
    * @returns {Object} testReturn testReturn description
    * @example
    * @example
    * @example
    */`;

    const result = parseDocString(DocString);

    const expectedResult = {
      alias: [
        {
          fullValue: "testAlias",
          arg1: "testAlias",
          arg2: undefined,
          arg3: undefined,
        },
      ],
      description: [
        {
          fullValue: "testDescription of some kind",
          arg1: "testDescription",
          arg2: "of",
          arg3: "some kind",
        },
      ],
      param: [
        {
          fullValue:
            "{string} testParam testParam description\nmultiple lines\nand stuff",
          arg1: "{string}",
          arg2: "testParam",
          arg3: "testParam description\nmultiple lines\nand stuff",
        },
        {
          fullValue: "{string} testParam2 testParam2 description",
          arg1: "{string}",
          arg2: "testParam2",
          arg3: "testParam2 description",
        },
      ],
      returns: [
        {
          fullValue: "{Object} testReturn testReturn description",
          arg1: "{Object}",
          arg2: "testReturn",
          arg3: "testReturn description",
        },
      ],
      example: [
        { fullValue: "", arg1: undefined, arg2: undefined, arg3: undefined },
        { fullValue: "", arg1: undefined, arg2: undefined, arg3: undefined },
        { fullValue: "", arg1: undefined, arg2: undefined, arg3: undefined },
      ],
    };
    expect(result).toEqual(expectedResult);
  });

  it("should handle tags with no arguments", () => {
    const DocString = `/**
    * @alias
    * @description
    * @param
    * @returns
    */`;

    const result = parseDocString(DocString);

    const expectedResult = {
      alias: [
        { fullValue: "", arg1: undefined, arg2: undefined, arg3: undefined },
      ],
      description: [
        { fullValue: "", arg1: undefined, arg2: undefined, arg3: undefined },
      ],
      param: [
        { fullValue: "", arg1: undefined, arg2: undefined, arg3: undefined },
      ],
      returns: [
        { fullValue: "", arg1: undefined, arg2: undefined, arg3: undefined },
      ],
    };

    expect(result).toEqual(expectedResult);
  });

  it("It should error if the docstring is not a string", () => {
    const DocString = 1;
    expect(() => parseDocString(DocString)).toThrow();
  });
});
