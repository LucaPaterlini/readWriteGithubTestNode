const fs = require('fs');

const filePath = 'example.txt';
const content = 'Hello, World!';

// Write the file
fs.writeFile(filePath, content, (writeErr) => {
    if (writeErr) {
        console.error('Error writing file:', writeErr);
        process.exit(1);
    }

    console.log('File written successfully!');

    // Read the file
    fs.readFile(filePath, 'utf8', (readErr, data) => {
        if (readErr) {
            console.error('Error reading file:', readErr);
            process.exit(1);
        }

        console.log('File content:', data);
    });
});
