const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://0.0.0.0:27017/polling");


const db= mongoose.connection;
db.on("error", console.error.bind(console,"Error in connection to Mongodb"));


db.once("open", function(){
    console.log("Successfully connected to Database :: MongoDB");

    
});

module.exports =db;

