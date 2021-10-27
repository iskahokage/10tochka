require('dotenv').config();
const express = require('express');
const cors = require('cors');

const sequelize = require("./db.js");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json())

const run = async () =>{
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, ()=>{
        console.log(`server started ${PORT}`)
        })
    } catch (e) {
        console.error(e)
    }
}
run();