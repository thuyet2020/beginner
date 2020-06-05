const mongoose=require('mongoose');
const BootcampSchema= new mongoose.Schema({
name: {
    type:String,
    required:[true,'Please add a name'],
    unique:true,
    trim:true,
    maxlength:[50,'name can not be more than 50 character']
},
slug:String,
description: {
    
      type:String,
        required:[true,'Please add a description'],
        maxlength:[500,'name can not be more than 500 characters']
},
website:{
    type:String,
    match: [
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-A-Za-z0-9()@:%_+.~#?&//=]*)/,
        'pLEASE use a valid URL with HTTP or HTTPS'
    ]

},

});