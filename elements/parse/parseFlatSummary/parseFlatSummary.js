import fse from "fs-extra";
/**
 * @alias parseFlatSummary
 * @description Parses a flat summary from a js file to a doc
 * @param {string} filePath A path to a js file to scan for docs
 * @param {boolean} returnFunc If it should return the function name/definition
 * @returns {Array} An array of docs in the file
 * 
 */
export const parseFlatSummary = (filePath, returnFunc) => {
    try {
        // Read the file
        const file = fse.readFileSync(filePath, 'utf8');
        const lines = file.split('\n');
        const docs = [];
        let doc = '';

        //Itterate over the file
        //Check if line stats with /**
        //If it does, its a new doc
        //is line */ if it isnt add line to string
        //if it is end doc and add to array
        let inDoc = false;
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (line.trim().startsWith("/**")) {
                doc = line + '\n';
                inDoc = true;
            } else if (line.includes("*/")) {
                if(inDoc){
                doc += line;
                if(returnFunc){
                    const func = lines[i+1];
                    doc += '\n' + func;
                }
                docs.push(doc);
                doc = '';
                inDoc = false;
                }
            } else if (inDoc){
                doc += line;
                //add new line
                doc += '\n';
            }
        }

        //Return array
        return docs;
    
    } catch (unexpectedError) {
        throw unexpectedError;
    }
}