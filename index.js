import express from 'express';
import mongoose from 'mongoose';
import studentRouter from './Routes/students.js';
const app =  express();

//mongodb connection code
const url = "mongodb+srv://student-MB:<password>@student.szweiib.mongodb.net/";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
app.use(express.json());
try {
    connection.on('open', () => {
        console.log("MongoDB database connection established successfully");
});
} catch (error) {
    console.log("MongoDB connection error: ", error);
}

//port definiation
const port = 9000;

app.listen(port, () => {
    console.log(` Server started on port ${port}`);
});



app.use('/students', studentRouter);

export default app;