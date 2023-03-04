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

const deletet = async (_id) => {
     try {
          const result = await Playerlist.deleteOne({_id});
          console.log(result);
     } 
     catch (err) {
          console.log(err);
     }
}
deletet('63fec067517ec130f55f79d1');

