const express = require('express');
const app = express();
const PORT = 9998;

require("./server/routes/routes")(app);

app.listen(PORT, () => console.log(`Application running hot on port ${PORT}, Happy Hacking!`))