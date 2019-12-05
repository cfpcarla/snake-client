const { connect } = require('./client');
console.log('Connecting ...');
connect();

const handleUserInput = function(data) {
  if (data === "\u0003") {
    console.log("Closing game");
    // ctrl-c ( end of text )
    process.exit();
  }
};


const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", (data) => {
    handleUserInput(data);
  });
  return stdin;
};
setupInput();

