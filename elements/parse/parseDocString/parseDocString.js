/**
 * @alias parseDocString
 * @description Parses a string containing a jsdoc to get tags and their values
 * @param {string} docString A string containing a jsdoc to parse
 * @returns {Object} An object containing the tags as keys and an array of values
 *
 * @example parseDocString("(Doc start) (at)alias testAlias (at)param {string} ExampleParam Param example (Doc End)") => 
 {alias : [{fullValue : "testAlias" , arg1: "testAlias", arg2: undefined, arg3: undefined}],
 param : [{fullValue : "{string} ExampleParam Param example", arg1: "{string}", arg2: "ExampleParam", arg3: "Param example"}]}
 */
export const parseDocString = (docString) => {
  try {
    // Split things by @ symbol
    const tags = docString.split("@");
    const parsedTags = {};
    // Loop through tags if @ something then add to object with the format
    //Remove new line and * symbols
    // @key arg1 arg2 arg3 => {fullValue : "arg1 arg2 arg3", arg1 : "arg1", arg2 : "arg2", arg3 : "arg3"}
    tags.forEach((tag) => {
      if (
        tag.trim() !== "" &&
        tag.trim() !== "*/" &&
        !tag.trim().startsWith("/**")
      ) {
        const tagParts = tag.split(" ");
        let key = tagParts[0].trim();
        //If key has */ or /** remove it
        key = key.replace("*/", "").replace("/**", "").trim();

        let value = tagParts.slice(1).join(" ");

        const valueParts = value.split(" ");
        const arg1 = valueParts[0].trim() || undefined;
        const arg2 = valueParts[1].trim() || undefined;
        let arg3 = valueParts.slice(2).join(" ");

        //Remove */ and * from the value and arg3 then trim
        value = value.replace("*/", "").replace("*", "").trim();
        if (arg3) {
          arg3 = arg3.replace("*/", "").replace("*", "").trim();
        }
        arg3 = arg3.trim() !== "" ? arg3 : undefined;

        //if key exists add to array else create array
        if (parsedTags[key]) {
          parsedTags[key].push({ fullValue: value, arg1, arg2, arg3 });
        } else {
          parsedTags[key] = [{ fullValue: value, arg1, arg2, arg3 }];
        }
      }
    });
    return parsedTags;
  } catch (unexpectedError) {
    throw unexpectedError;
  }
};
