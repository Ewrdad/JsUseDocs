import { parseFlat } from "./parseFlat.js";

/**
 * @alias ManTest
 * @description Tests the parseFlatSummary function mannually
 */
export function ManTest() {
  const result = parseFlat(`../../../test_mocks/testsome_2func.js`);
  console.log(result);
}

ManTest();
