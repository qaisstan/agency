const { exec } = require("child_process");
const chokidar = require("chokidar");
const fs = require("fs");

const outputFile = "filetree.txt"; // The file where the tree will be saved
const exclude = "node_modules"; // Directories to exclude

// Function to generate the file tree
const generateTree = () => {
  exec(`tree -I "${exclude}" -L 3`, (err, stdout, stderr) => {
    if (err) {
      console.error("Error generating file tree:", err);
      return;
    }
    if (stderr) {
      console.error("Error:", stderr);
      return;
    }
    fs.writeFileSync(outputFile, stdout, "utf-8");
    console.log(`File tree updated: ${outputFile}`);
  });
};

// Initial file tree generation
generateTree();

// Watch the project folder for changes
const watcher = chokidar.watch(".", {
  ignored: new RegExp(exclude), // Ignore node_modules
  persistent: true,
});

watcher.on("all", (event, path) => {
  console.log(`Change detected: ${event} -> ${path}`);
  generateTree(); // Regenerate file tree on change
});

console.log("Watching for file changes...");
