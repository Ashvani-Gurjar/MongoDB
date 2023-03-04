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

const read = async () => {
     try {
          //  const result = await Playerlist.find();
          //  console.log(result);

          //  const result = await Playerlist.find({name:"html"});
          //  console.log(result);

          //  const result = await Playerlist.find({active:true}).select({name:1});
          //  console.log(result);

          //  const result = await Playerlist.find({active:true},{name:1,_id:0});
          //  console.log(result);

          //  const result = await Playerlist.find({active:true}).select({name:1,_id:0});
          //  console.log(result);

          //  const result = await Playerlist.find({active:true})
          //  .select({name:1,_id:0}).limit(3);


          //  const result = await Playerlist.find({active:true})
          //  .select({name:1,_id:0}).limit(3).skip(2);
          //  console.log(result);


}catch (err) {
     console.log(err);
}
               }

read();