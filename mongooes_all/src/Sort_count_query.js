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
          //    count
          // const result = await Playerlist.find({active:true},{name:1,_id:0}).count()
          //    sort_accending
          // const result = await Playerlist.find({active:true},{name:1,_id:0}).sort({name:1})
          //    sort_decending
          const result = await Playerlist.find({active:true},{name:1,_id:0}).sort({name:-1})
          console.log(result);
     } catch (err) {
          console.log(err);
     }
}
pass();

