const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim : true
    },
    
    slug:{
        type:String,
        required:true,
        unique:true,
        lowercase : true
    },
    descriptionShort:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    priceSale:{
        type:Number,
        default:0,
    },
    category:{
        type:String,
        required : true
    },
    type:{
        type:String,
        required : true,
        enum:["Mới","Như mới","Tốt","Trung bình","Kém"],
    },
    brand :{
        type : String,
        required : true
    },
    countBy:{
        type : Number,
        default : 0,
    },
    images :[{
        public_id:String,
        url:String
    }],
    ratings: [
        {
            star: Number,
            comment: String,
            postedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        },
    ],
    totalrating: {
        type: String,
        default: 0,
    },
},{timestamps:true});

//Export the model
module.exports = mongoose.model('Product', productSchema);