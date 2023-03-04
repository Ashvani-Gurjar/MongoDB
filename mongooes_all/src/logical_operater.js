//  insertone
const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/Ashvani').then(() => {
     console.log("Connected to MongoDB");
}).catch(() => {
     console.log("Error");
});


const playlistschema = mongoose.Schema({
     name: {
          type: String,
          required: true
     },
     city: String,
     video: Number,
     author: String,
     active: Boolean,
     date: {
          type: Date,
          default: Date.now()
     }
})

const Playerlist = mongoose.model("Playerlist", playlistschema);

const pass = async () => {
     try {
          //    or_operater
          // const result = await Playerlist.find({$or:[{name:"Ashvani"},{active:false}]},{name:1,_id:0})
          //    and_operater
          // const result = await Playerlist.find({$and:[{name:"Ashvani"},{active:true}]},{name:1,_id:0})
          //      nor_operater
          // const result = await Playerlist.find({$nor:[{name:"Ashvani"},{active:true}]},{name:1,_id:0})
          //      not_operater
          const result = await Playerlist.find({$not:{name:"Ashvani"}},{name:1,_id:0})
          console.log(result);
     } catch (err) {
          console.log(err);
     }
}
pass();

