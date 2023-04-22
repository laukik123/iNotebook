const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const connectToMongo=()=>{
    mongoose.connect('mongodb+srv://admin:admin@inotebook.5n4nora.mongodb.net/test',()=>{
        console.log("Connected to MongoDB successfully")
    });
}



module.exports=connectToMongo;
