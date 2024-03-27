import { isDoc } from "./elements/checks/isDoc/isDoc";
import { includesDoc } from "./elements/checks/includesDoc/includesDoc";
import { parseDocString } from "./elements/parse/parseDocString/parseDocString";
import { parseFlat } from "./elements/parse/parseFlat/parseFlat";
import { parseFlatSummary } from "./elements/parse/parseFlatSummary/parseFlatSummary";

/**
 * @title JsUseDocs-Core
 * @version 1.0.0
 * @description JsUseDocs-Core is a core library for JsUseDocs in js
 * @returns JsUseDocsCore functions
 */
const JsUseDocsCore = {
  parseFlat,
  parseFlatSummary,
  isDoc ,
  includesDoc,
  addTag: "Not implemented yet",
  removeTag: "Not implemented yet",
  setTags: "Not implemented yet",
  parseNested: "Not implemented yet",
  parseNestedSummary: "Not implemented yet",
  parseDocString,
};
export { isDoc, includesDoc, parseDocString, parseFlat, parseFlatSummary};
export default JsUseDocsCore;
