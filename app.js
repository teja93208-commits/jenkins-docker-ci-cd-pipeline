const http = require('http');

const server = http.createServer((req, res) => {
  res.write("🚀 Jenkins CI/CD Pipeline Running Successfully!");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
