const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({
dog_color: String,
dog_breed: {
    type: String,
    required: true, 
    minlength: 3,
    maxlength: 20
},
dog_price:{
    type:Number,
    min:10,
    max:1000,
    required:true
}
})
module.exports = mongoose.model("dog",
dogSchema)