const mongoose=require('mongoose');
// coonection to mongodb atlas
mongoose.connect('mongodb+srv://thakur:thakur@cluster0.6w8cddm.mongodb.net/?retryWrites=true&w=majority'),
{ useNewUrlParser: true, useUnifiedTopology: true }
const db=mongoose.connection;
try{
    console.log("Connection to db");
}
catch(e)
{
    console.log("Error in connection");
}
module.exports=db;