const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//Create Schema

const Student= new Schema({
    firstName:
    {
        type:String,
        required:true
    },
    lastName:
    {
        type:String
    },    
    title:{
        type:String
    },
    nationality:{
        type:String
    },
    src:{
        type:String
    },
    alt:{
        type:String
    },
    skills:{
        type:[String]
    },
    whySofterDeveloper:{
        type:String
    },
    longTermVision:{
        type:String
    },
    motivatesMe:{
        type:String
    },
    favoriteQuote:{
        type:String
    },
     joinedOn:{
        type:String
    },
    selectedFile:{
        type:String
      },
      src: {
    type: String,
    //   required:true,
    minlength: 1,
  }
});

module.exports = Students = mongoose.model('student', Student);