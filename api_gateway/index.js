const PORT = 8000;
const express = require("express")
const cors = require("cors")
const axios = require("axios")
const { ReCaptcha } = require("./handlers/recaptcha")


require('dotenv').config()

const app = express();

app.get('/auth', ReCaptcha);

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}...`))