const express= require('express')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User= require('../models/User') ;
const jwt = require('jsonwebtoken');
const fetchuser=require('../middleware/fetchuser')

const jwtSecret= 'thisisthesecret';
// Route 1: create a User using: POST "api/auth/createuser". No login required
router.post('/createuser',[
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
],async (req, res)=>{
  //if there are errors, return bad requests and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check whether the user with this email exists already

    try{
      let user= await User.findOne({email: req.body.email});
      if(user){
        return  res.status(400).json({error: "sorry, an user with this email already exists"})
      }
      
      const salt= await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      //create a new user
      user = await User.create({
          name: req.body.name,
          password: secPass,
          email: req.body.email,
        })
        const data={
          user:{
            id:user.id
          }
        }
        const authtoken= jwt.sign(data, jwtSecret);
       
        res.json({authtoken});
        //catch errors
    }catch(error){
      console.log(error.message);
      res.status(500).send("Some error occured");
    }
    
});


// Route 2:authenticate a User using: POST "api/auth/login". No login required
router.post('/login',[
  body('email',"Enter a valid email").isEmail(),
  body('password',"Password cannot be blank").exists(),
],async (req, res)=>{
let success=false;

 //if there are errors, return bad requests and the errors
 const errors = validationResult(req);
 if (!errors.isEmpty()) {
   return res.status(400).json({ errors: errors.array() });
 }

 const {email,password}=req.body;

 try {
  let user=await User.findOne({email});
  if(!user){
    success=false;
    return res.status(400).json({ error:"Please enter valid credentials"})
  }
  const passcompare=await bcrypt.compare(password, user.password);
  if(!passcompare){
    success=false;
    return res.status(400).json({success, error:"Please enter valid credentials"})
  }

  const data={
    user:{
      id:user.id
    }
  }
  const authtoken= jwt.sign(data, jwtSecret);
  success=true;
  res.json({success, authtoken})

 } catch(error){
  console.log(error.message);
  res.status(500).send("Internal server error");
}

// Route 3:Get logged in user details using: POST "api/auth/getuser". Login required
router.post('/getuser',fetchuser, async (req, res)=>{
try {
  userId=req.user.id;
  const user= await User.findById(userId).select("-password");
  res.send(user);
} catch(error){
  console.log(error.message);
  res.status(500).send("Internal server error");
}
})
});

module.exports=router
