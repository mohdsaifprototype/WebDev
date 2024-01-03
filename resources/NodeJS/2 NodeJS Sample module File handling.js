const fs = require("fs");
let text = fs.readFileSync("2 myFile.txt", "utf-8");
console.log(text);

text = text.replace("Hi!", "Greeting!");
console.log("\nAfter replacing Hi! with Greeting!\n");
console.log(text)
console.log("\nCreating a new file...\n");
fs.writeFileSync("2 myEditedFile.txt", text);