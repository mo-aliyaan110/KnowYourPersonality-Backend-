const Express = require('express');
const app = new Express();
const DB_Url = `mongodb+srv://admin:password123321@expressrest.oy7hyam.mongodb.net/?retryWrites=true&w=majority`
const getRouter = require('./routes/getRouter');
const postRouter = require('./routes/postRouter');
const patchRouter = require('./routes/patchRouter');
const deleteRouter = require('./routes/deleteRouter');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');

app.use(cors());


app.use(bodyParser.json());

mongoose.connect(DB_Url, () => {
    console.log("Successfully connected the database..");
})
"<div>Hello World</div>";
app.use('/users', getRouter);
app.use('/addData', postRouter);
app.use('/updateUser', patchRouter);
app.use('/remove', deleteRouter);


app.listen(PORT, () => {
    console.log("Server is running at port 4000");
})