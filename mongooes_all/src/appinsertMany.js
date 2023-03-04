//     insertMany
const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/Ashvani').then(()=>{
     console.log("Connected to MongoDB");
}).catch(()=>{
     console.log("Error");
});


const playlistschema = mongoose.Schema({
     name:{
          type:String,
          required:true
     },
     city:String,
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
     const html = new Playerlist({
          name:"html",
          city:"Pune",
          video:1,
          author:"Ashvani",
          active:false,
     })
     const css = new Playerlist({
          name:"css",
          city:"Pune",
          video:1,
          author:"Ashvani",
          active:true,
     })
     const javascript = new Playerlist({
          name:"javascript",
          city:"Pune",
          video:1,
          author:"Ashvani",
          active:true,
     })
     const nodejs = new Playerlist({
          name:"nodejs",
          city:"Pune",
          video:1,
          author:"Ashvani",
          active:true,
     })
     const express = new Playerlist({
          name:"express",
          city:"Pune",
          video:1,
          author:"Ashvani",
          active:true,
     })
        const result = await Playerlist.insertMany([html,css,javascript,nodejs,express]);
        console.log(result);
  }catch(err){
     console.log(err);
}
}
pass();