import { parseFlatSummary } from "./parseFlatSummary.js";

describe("parseFlatSummary", () => {
  it("should return an object with the correct properties", () => {
    const summary = "../../../test_mocks/testsome_2func.js";
    const result = parseFlatSummary(summary);
    console.log(result);

    expect(result);
  });
});
