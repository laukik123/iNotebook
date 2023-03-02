const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const connectToMongo=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/inotebook',()=>{
        console.log("Connected to MongoDB successfully")
    });
}



module.exports=connectToMongo;
