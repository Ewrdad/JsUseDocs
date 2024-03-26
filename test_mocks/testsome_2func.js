

/**
 * @alias testDoc
 * @description Checks if a given string includes a valid doc
 * @param {string} possibleDocString A string to check if it includes a doc somewhere in it
 * @param {boolean} strict If it should check for a doc stricter
 * @returns {boolean} If it includes a doc
 */
export const testsome = (possibleDocString, strict) => {
    try {
        if(strict){

            const hasDocStart = possibleDocString.includes("/**")
            const hasDocTag = possibleDocString.includes("@")
            const hasDocEnd = possibleDocString.includes("*/")
            return hasDocEnd && hasDocStart && hasDocTag
        }

        const hasDocStart = possibleDocString.includes("/**")
        return hasDocStart
    } catch (unexpectedError) {
        throw new Error(unexpectedError)
    }
}



/**
 * @alias testDoc
 * @description Checks if a given string includes a valid doc
 * @param {string} possibleDocString A string to check if it includes a doc somewhere in it
 * @param {boolean} strict If it should check for a doc stricter
 * @returns {boolean} If it includes a doc
 */
export const sometest = (possibleDocString, strict) => {
    try {
        if(strict){

            const hasDocStart = possibleDocString.includes("/**")
            const hasDocTag = possibleDocString.includes("@")
            const hasDocEnd = possibleDocString.includes("*/")
            return hasDocEnd && hasDocStart && hasDocTag
        }

        const hasDocStart = possibleDocString.includes("/**")
        return hasDocStart
    } catch (unexpectedError) {
        throw new Error(unexpectedError)
    }
}



