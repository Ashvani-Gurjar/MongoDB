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
          // greater_then
          // const result = await Playerlist.find({video:{$gt:10}},{video:1,_id:0})
          // greater_then_equal
          // const result = await Playerlist.find({video:{$gte:10}},{video:1,_id:0})
          //  equal
          // const result = await Playerlist.find({video:{$eq:10}},{video:1,_id:0})
          // less _then
          // const result = await Playerlist.find({video:{$lt:10}},{video:1,_id:0})
          // less_then_equal
          // const result = await Playerlist.find({video:{$lte:10}},{video:1,_id:0})
          // name present in databalse
          // const result = await Playerlist.find({name:{$in:["Ashvani",'html',"css"]}},{name:1,_id:0})
          // name not present in databalse
          const result = await Playerlist.find({ name: { $nin: ["Ashvani", 'html', "css"] } }, { name: 1, _id: 0 })
          console.log(result);
     } catch (err) {
          console.log(err);
     }
}
pass();

