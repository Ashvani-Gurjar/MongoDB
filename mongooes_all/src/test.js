const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/Ashvani').then(()=>{
     console.log("Connected.....");
}).catch(()=>{
     console.log("Error");
});

const structure = mongoose.Schema({
       name: {
          type:String,
          require:true
       },
       score: Number,
       city: String
})

const GurjarData = mongoose.model('GurjarData',structure);

(async()=>{
     try {
          const result = await GurjarData.updateOne({name:{$set:{name:"Ashvani"}}});
          console.log(result);

     } catch (err) {
          console.log(err)
          
     }
})();
