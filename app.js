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
const missionRoutes = require('./routes/mission');
const catRoutes = require('./routes/category');
const likerRouts = require('./routes/liker');
const imageR = require('./routes/image');
const auth = require('./middleware/auth');
app.use(express());
app.use(bodyparser.json());
app.use('/api/protected',auth,(req,res)=>{
    res.end(`Hi ${req.user.firstName}, you are authenticated`);
});

app.use('/api/category',catRoutes);
app.use('/api/mission',auth, missionRoutes);
app.use('/api/users', userRoutes);
app.use('/api/liker',likerRouts);
app.post('/api/image', upload.single('image'), function (req, res, next) {
    const{user_id} = req.body;
    console.log(req.file.path);
    const image = req.file.path;
    const feimage = new image_mod({user_id,image});
    try {
        const newImage =  feimage.save();
        res.status(201).json({check:1,massage:'image added'});
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'image does not add'})
    }


  });
  app.get('/api/images', async (req, res, next)=>{
    const Image =  await image_mod.find({});
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
    return app.listen(process.env.PORT);
    
})
.then(()=> console.log('server is running '))
.catch(err => console.log(err.message));
