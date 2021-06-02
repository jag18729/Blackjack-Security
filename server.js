const express = require('express');
const cors = require('cors');
const app = express();
let PORT = 8000;

require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
require('./server/routes/quote.routes')(app);
app.listen(PORT, () => {
  console.log(`Comm is up. Server running hot on port ${PORT}`)
}) 