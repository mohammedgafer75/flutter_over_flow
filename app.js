const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const image_mod = require('./models/image');
app.use(express());
const upload = multer({dest:'uploads'});
app.use('/uploads',express.static('uploads'))


const { MONGODB } = require('./config');
const userRoutes = require('./routes/user');
const bodyparser = require('body-parser');
const postRoutes = require('./routes/post');
const courseRoutes = require('./routes/courses');
const appRoutes = require('./routes/app');
const SavedPostRoutes = require('./routes/saved_post');
const SavedRecoRoutes = require('./routes/saved_reco');
const errorRoutes = require('./routes/error');
const commentRoutes = require('./routes/postcomment');
const recommendRoutes = require('./routes/recommend');
const likerRouts = require('./routes/liker');
const imageR = require('./routes/image');
const auth = require('./middleware/auth');
const mission_image = require('./models/mission_image');


app.use(express());
app.use(bodyparser.json());
app.use('/api/protected',auth,(req,res)=>{
    res.end(`Hi ${req.user.firstName}, you are authenticated`);
});

app.use('/api/post', postRoutes);
app.use('/api/course',courseRoutes);
app.use('/api/app', appRoutes);
app.use('/api/error', errorRoutes);
app.use('/api/post/save', SavedPostRoutes);
app.use('/api/recommend/save', SavedRecoRoutes);
app.use('/api/recommend', recommendRoutes);
app.use('/api/post/comment', commentRoutes);
app.use('/api/users', userRoutes);
app.use('/api/liker',likerRouts);


app.patch('/api/image', upload.single('image'), async (req, res, next)  =>{
    const{any_id} = req.body;
   // const check = await image_mod.find({any_id});
   // console.log(check);
   // if(check != null){
    //  await image_mod.findOneAndDelete({any_id});
   // }
    const image = req.file.path;
    const feimage = new image_mod({any_id,image});
    try {
        const newImage =  feimage.save();
        res.status(201).json({check:1,massage:'image added'});
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'image does not add'})
    }
  });

  app.get('/api/images/:any_id', async (req, res, next)=>{
    const {any_id} = req.params; 
    const Image =  await image_mod.find({any_id});
      res.status(200).json(Image); 
  });
  app.get('/api/images', async (req, res, next)=>{
    const Image =  await image_mod.find({});

      res.status(200).json(Image); 
  });

  app.patch('/api/image2', upload.single('image'), function (req, res, next) {
    const{mission_id} = req.body;
    const image = req.file.path;
    const feimage = new mission_image({mission_id,image});
    try {
        const newImage =  feimage.save();
        res.status(201).json({check:1,massage:'image added'});
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'image does not add'})
    }
  });

  app.get('/api/images2/:mission_id', async (req, res, next)=>{
    const {mission_id} = req.params; 
    const Image =  await mission_image.findOne({mission_id});
      res.status(200).json(Image); 
  });
   app.get('/api/images2', async (req, res, next)=>{
    const {mission_id} = req.params; 
    const Image =  await mission_image.find({});
      res.status(200).json(Image); 
  });



app.use((req,res, next)=>{
 const err = new Error('not found');
 err.status = 404;
 next(err);
});

app.use((err,req,res,next)=>{
    const status = err.status || 500;
    res.status(status).json({ error: { message: err.message}});
});


mongoose.connect(MONGODB,{useNewUrlParser:true,useUnifiedTopology: true})
.then(()=>{
    console.log('connected to database');
    return app.listen(7000);
    //7000
    // process.env.PORT
})
.then(()=> console.log('server is running '))
.catch(err => console.log(err.message));
