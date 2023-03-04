               //  insertone
const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/Ashvani').then(()=>{
     console.log("Connected to MongoDB");
}).catch(()=>{
     console.log("Error");
});


const playlistschema = mongoose.Schema({
     name:{
          type:String,
          required:true, // compalsory to fill
          unique:true,  // playlist much be unique
          lowercase:true, // if write name capital letters then that convert it lowerletters
          // uppercase:true  // if write name lower letters then that convert it upperleters
          // trim:true,  // its remove all spaces in starting and ending of string
          minlength:2,
          maxlength:10
     },
     city:{
          type:String,
          require:true,
          lowercase:true,
          enum:["kanpur","lucknow","Delhi"]
        },
     video:Number,
     author:String,
     active:Boolean,
     date:{
          type:Date,
          default:Date.now()
     }
})

const Playerlist = mongoose.model("Playerlist",playlistschema);

const  pass = async()=>{
     try{
     const resultPlayer = new Playerlist({
          name:"Asdfsdf",
          city:"nagpur",
          video:1,
          author:"Ashvani",
          active:true,
     })
        const result = await resultPlayer.save();
        console.log(result);
  }catch(err){
     console.log(err);
}
}
pass();