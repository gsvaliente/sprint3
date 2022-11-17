const { readdir, readFile, writeFile } = require("fs");
const { join } = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");
const util = require("util");

const readdirPromise = util.promisify(readdir);
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const reverseText = (str) => str.split("").reverse().join("");

// Read and reverse contents of text files in a directory
readdir(inbox, (error, files) => {
  if (error) return console.log("Error: Folder inaccessible");
  files.forEach((file) => {
    readFile(join(inbox, file), "utf8", (error, data) => {
      if (error) return console.log("Error: File error");
      writeFile(join(outbox, file), reverseText(data), (error) => {
        if (error) return console.log("Error: File could not be saved!");
        console.log(`${file} was successfully saved in the outbox!`);
      });
    });
  });
});

const start = async () => {
  try {
    const first = await readdirPromise(inbox);
    const second = await first.forEach(file);
    const third = await readFilePromise(join((inbox, second), "utf-8"));
    await writeFilePromise(join(outbox, third), reverseText(data));
    console.log(`${third} was successfully saved in the outbox!`);
  } catch (error) {
    console.log(error);
  }
};

start();
