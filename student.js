const mongoose=require('mongoose');
const schema=mongoose.Schema;
const studentSchema=new schema({
    firstName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
      },
      lastName: {
        type: String,
        minlength: 1,
        trim: true
      },
      nationality: {
        type: String,
        minlength: 1,
        trim: true
      },
      src: {
        type: String,
        minlength: 1,
        trim: true
      },
      alt: {
        type: String,
        minlength: 1,
        trim: true
      },
      skills: {
        type: [String]
      },
      whySofterDeveloper: {
        type: String,
        minlength: 1,
        trim: true
      },
      longTermVision: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
      },
      motivatesMe: {
        type: String,
        minlength: 1,
        trim: true
      },
    
      favoriteQuote: {
        type: String,
        minlength: 1,
        trim: true
      },
      joinedOn: {
        type: String,
        minlength: 1,
        trim: true
      },
      selectedFile:{
        type:String
      },
      src:{
        type:String
      }
})

module.exports = Students = mongoose.model('student', studentSchema);
