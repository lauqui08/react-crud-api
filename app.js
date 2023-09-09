require('dotenv').config();
const express = require('express');
const app = express();
const apiRouter = require('./routes/apiRoutes');
const dbConnection = require('./db/connection');
const cors = require('cors');

app.use(
    cors({
        origin:"*",
        methods:["GET","POST","DELETE","PATCH"],
    })
);

// app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req, res) => {
    res.send('Good day developer');
});

app.use('/api/persons',apiRouter);


const startConnection = async() => {
    try {
        await dbConnection(process.env.ATLAS_URI);
        app.listen(process.env.PORT,() => {
            console.log(`Server is running on port ${process.env.PORT}...`);
        });
    } catch (error) {
        console.log(error);
    }
};

startConnection();


module.exports = app;
