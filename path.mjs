import path from "path";

const file = "/Users/Dummy/Node.js";

console.info(path.sep)
console.info(path.dirname(file));
console.info(path.basename(file));
console.info(path.extname(file));
console.info(path.parse(file));