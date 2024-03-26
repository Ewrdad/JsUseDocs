import {parseFlatSummary} from './parseFlatSummary.js';


/**
 * @alias ManTest
 * @description Tests the parseFlatSummary function mannually
 */
export function ManTest() {
    const result = parseFlatSummary(`../../../test_mocks/testsome_2func.js`,true)
    console.log(result);
}

ManTest();