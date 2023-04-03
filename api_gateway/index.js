const PORT = 8000;
const express = require("express")
const cors = require("cors")
const axios = require("axios")
const routing = require("./routing")

require('dotenv').config()

const app = express();
app.use(cors())
app.use(express.json())

routing.forEach(({route, handler}) => {
    app.post(route, handler);
});

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}...`))