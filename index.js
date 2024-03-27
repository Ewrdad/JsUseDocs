import { isDoc } from "./elements/checks/isDoc/isDoc";
import { includesDoc } from "./elements/checks/includesDoc/includesDoc";
import { parseDocString } from "./elements/parse/parseDocString/parseDocString";

/**
 * @title JsUseDocs-Core
 * @version 1.0.0
 * @description JsUseDocs-Core is a core library for JsUseDocs in js
 * @returns JsUseDocsCore functions
 */
const JsUseDocsCore = {
  parseFlat: "Not implemented yet",
  parseFlatSummary: "Not implemented yet",
  parseTags: "Not implemented yet",
  isDoc ,
  includesDoc,
  addTag: "Not implemented yet",
  removeTag: "Not implemented yet",
  setTags: "Not implemented yet",
  parseNested: "Not implemented yet",
  parseNestedSummary: "Not implemented yet",
  parseDocString,
};
export { isDoc, includesDoc, parseDocString };
export default JsUseDocsCore;
