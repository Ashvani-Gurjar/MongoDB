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

const update = async (_id) => {
     try {
          // const result = await Playerlist.updateOne({_id},{
          //      $set:{
          //           name:"JavaScript_tutorial"   //that give store data in database
          //      }
          // });
          const result = await Playerlist.findByIdAndUpdate({_id},{
               $set:{
                    name:"JavaScript"
               }
          },{
               new : true   // used to give updated_date as result;
          });
          console.log(result);
     } 
     catch (err) {
          console.log(err);
     }
}
update('63fec067517ec130f55f79d1');

