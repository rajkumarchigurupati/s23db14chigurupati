const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({
dog_color: String,
dog_breed: String,
dog_price:{
    type:Number,
    min:10,
    max:1000,
    required:true
}
})
module.exports = mongoose.model("dog",
dogSchema)