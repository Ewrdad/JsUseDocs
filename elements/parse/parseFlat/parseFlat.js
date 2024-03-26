import fse from "fs-extra";

/**
 * @alias findRelatedFunc
 * @description Finds the related function to a doc by taking the line number of the doc and the lines of the file
 * @param {number} i The line number of the end of the doc
 * @param {Array} lines The lines of the file
 * @return {string} The related function
 *
 */
const findRelatedFunc = (i, lines) => {
  //itterate over lines
  //if line contains { incriment counter if it contains } decriment counter
  //if counter is 0 return the function string
  let counter = 0;
  let func = "dummy";
  for (let j = i + 1; j < lines.length; j++) {
    const line = lines[j];
    func += line + "\n";
    if (line.includes("{")) {
      counter++;
    }
    if (line.includes("}")) {
      counter--;
      if (counter == 0) {
        return func;
      }
    }
    console.log(counter);
  }
};

/**
 * @alias parseFlatS
 * @description Parses a js doc to extract the docs and related functions
 * @param {string} filePath A path to a js file to scan for docs
 * @returns {Array} An array of docs in the file
 *
 */
export const parseFlat = (filePath) => {
  try {
    // Read the file
    const file = fse.readFileSync(filePath, "utf8");
    const lines = file.split("\n");
    const docs = [];
    let doc = "";

    //Itterate over the file
    //Check if line stats with /**
    //If it does, its a new doc
    //is line */ if it isnt add line to string
    //if it is end doc and add to array
    let inDoc = false;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.trim().startsWith("/**")) {
        doc = line + "\n";
        inDoc = true;
      } else if (line.includes("*/")) {
        if (inDoc) {
          doc += line;
          doc += findRelatedFunc(i, lines, doc);
          docs.push(doc);
          doc = "";
          inDoc = false;
        }
      } else if (inDoc) {
        doc += line;
        //add new line
        doc += "\n";
      }
    }

    //Return array
    return docs;
  } catch (unexpectedError) {
    throw unexpectedError;
  }
};
