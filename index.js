const server = require("./api/server.js");

const PORT =  5000;
// process.env.PORT ||
server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
