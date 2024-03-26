/**
 * @alias isDoc
 * @description Checks if a given string is a valid doc
 * @param {string} possibleDocString A string to check if it is a doc. It must only include the doc otherwise use includesDoc
 * @returns {boolean} If it is a doc
 *
 */
export const isDoc = (possibleDocString) => {
  try {
    const trimmedPossibleDocString = possibleDocString.trim();
    /**
     * Check if it starts with /** and ends with (see line below)
     */
    const simpleDocRegex = /^\/\*\*[\s\S]*\*\/$/gm;

    const returnResult = simpleDocRegex.test(trimmedPossibleDocString);

    return returnResult;
  } catch (unexpectedError) {
    throw new Error(unexpectedError);
  }
};
