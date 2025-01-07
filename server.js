const { spawn } = require('child_process');
const child = spawn('php', ['esc2html.php', 'output.txt', '> output.html']);

// use child.stdout.setEncoding('utf8'); if you want text chunks
child.stdout.on('data', (chunk) => {
    console.log(chunk);
});

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
