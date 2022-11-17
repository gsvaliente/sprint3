const { readdir, readFile, writeFile } = require("fs");
const { join } = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = (str) => str.split("").reverse().join("");

// Read and reverse contents of text files in a directory
const writeRev = (file, data) => {
  writeFile(join(outbox, file), reverseText(data), (error) => {
    if (error) return console.log("Error: File could not be saved!");
    console.log(`${file} was successfully saved in the outbox!`);
  });
};

const readWrite = (file) => {
  readFile(join(inbox, file), "utf8", (err, data) => {
    if (err) return console.log("Error: File error");
    writeRev(file, data);
  });
};

readdir(inbox, (err, files) => {
  if (err) return console.log("Error: Folder inaccessible");
  files.forEach((file) => readWrite(file));
});
