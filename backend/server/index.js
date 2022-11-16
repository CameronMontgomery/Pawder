const app = require('./app')
require("dotenv").config();

const PORT = process.env.SERVER_PORT || 8000;

app.listen(PORT, () => {
  console.log(`Pawder is listening on ${PORT}`);
});