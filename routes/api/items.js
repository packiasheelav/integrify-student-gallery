const express = require('express');
const router = express.Router();


var multer = require("multer");
let upload = multer({ dest: '../public/uploads' });
const cloudinary = require("cloudinary");
var path = require('path');;
cloudinary.config({ 
    cloud_name: 'dletkhvs9', 
    api_key: '182934113221599', 
    api_secret: 'hF_yZkYyrPePFoue_hY0pNFFYtw' 
  });
  router.use(express.static(__dirname + "/public"));

//Item Model
const Student = require('../../models/Item');

//@route Get api/items
//@desc Get All Items
//@access Public

router.get('/',(req,res) => {
    Student.find({}).then(doc => {      
        res.json(doc);
      });
  })

// @route POST api/items
// @desc Create a post
// @access Public

router.post('/', upload.single('selectedFile'), function(req, res) {
    console.log('test',req.body)
    let src = '';
        cloudinary.v2.uploader.upload(req.file.path, {public_id:Math.random()},
         function(error, result) {
             console.log('error in function', error);
             src = result.secure_url;
             const newStudent = new Student({
                firstName:req.body.firstName, 
                 lastName:req.body.lastName,
                 title:req.body.title,
                 nationality :req.body.nationality,
                 skills:req.body.skills,
                 whySofterDeveloper:req.body.whySofterDeveloper,
                 longTermVision:req.body.longTermVision,
                 motivatesMe:req.body.motivatesMe,
                 favoriteQuote:req.body.favoriteQuote,
                 joinedOn:req.body.joinedOn,
                 src
                 });
                 console.log(newStudent);
  
                 newStudent.save()
                 .then((student)=>{
                     res.json(student)
                 })
                 .catch(err =>{
                   console.log('err o error ', err)
                     res.status(err.status >= 100 && err.status < 600 ? err.code : 500).send(err.message);
                 });
             });
  });

//@route Delete api/items
//@desc Create a Post
//@access Public

router.delete('/:id',(req,res)=>{
    Student.findById(req.params.id)
   .then(item => item.remove().then(() => res.json({success:true})))
   .catch ( err => res.status(404).json({success:false}))

})

module.exports = router;
