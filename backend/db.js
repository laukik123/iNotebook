const mongoose = require('mongoose');
const env = require('dotenv');
env.config({path: `${__dirname}/.env`});

mongoose.set("strictQuery", false);

const mongoURI = `mongodb+srv://raj24sahil:${process.env.MONGO_PASSWORD}@cluster0.j2ec5re.mongodb.net/inotebookdb`

const connectToMongo=()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to MongoDB successfully")
    });
}

module.exports = connectToMongo;
