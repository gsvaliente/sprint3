const fsp = require("fs/promises"); // to return promises directly
const { readdir, readFile, writeFile } = require("fs");
const { join } = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = (str) => str.split("").reverse().join("");

// Read and reverse contents of text files in a directory
// readdir(inbox, (error, files) => {
//   if (error) return console.log("Error: Folder inaccessible");
//   files.forEach((file) => {
//     readFile(join(inbox, file), "utf8", (error, data) => {
//       if (error) return console.log("Error: File error");
//       writeFile(join(outbox, file), reverseText(data), (error) => {
//         if (error) return console.log("Error: File could not be saved!");
//         console.log(`${file} was successfully saved in the outbox!`);
//       });
//     });
//   });
// });

const callbackHell = async () => {
  try {
    const firstFile = await fsp.readdir(inbox);
    for (const file of firstFile) {
      const secondFile = await fsp.readFile(join(inbox, file), "utf8");
      await fsp.writeFile(join(outbox, file), reverseText(secondFile));
      console.log(`${file} saved`);
    }
  } catch (err) {
    console.log(err);
  }
};

callbackHell();
