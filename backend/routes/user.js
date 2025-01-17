const express=require("express");
const zod=require("zod");
const {User, Account}=require("../db");
const jwt=require("jsonwebtoken");
const {JWT_SECRET}=require("../config");
const { authMiddleware } = require("../middleware");
const userRouter=express.Router();

const SignupBody=zod.object({
    username:zod.string().email(),
    password:zod.string(),
    firstName:zod.string(),
    lastName:zod.string()
})

const SigninBody=zod.object({
    username:zod.string().email(),
    password:zod.string()
})

const UpdateBody=zod.object({
    username:zod.string().email(),
    firstName:zod.string(),
    lastName:zod.string()
})

userRouter.post("/signup",async(req,res)=>{
    const check=SignupBody.safeParse(req.body);
    if(!check.success)
        {
            return res.status(411).json({
                message:"Email already taken /Incorrect inputs"
            })
        }
    const existingUser=await User.findOne({
        username:req.body.username
    })
    if(existingUser)
        {
            return res.status(411).json({
                message:"Email is already taken"
            })
        }

    const user=await User.create({
        username:req.body.username,
        password:req.body.password,
        firstName:req.body.firstName,
        lastName:req.body.lastName
    })

    const userId=user._id;
    await Account.create({
        userId,
        balance: 1+Math.random() *10000
    })

    const token=jwt.sign({
        userId
    },JWT_SECRET)
     res.json({
        message:"User created successfully",
        token:token
     })
})

userRouter.post("/signin",async(req,res)=>{
    const check=SigninBody.safeParse(req.body);
    if(!check.success)
    {
        return res.status(411).json({
            message:"Wrong inputs"
        })
    }
    const user=await User.findOne({
        username:req.body.username,
        password: req.body.password
    })
     if(!user){
        return res.status(411).json({
            message:"Error while logging in"
        })
     }
     const token=jwt.sign({
        userId:user._id
     },JWT_SECRET);
     res.json({
        token:token
     })
     return;
})

userRouter.post("/",authMiddleware,async(req,res)=>{
    const check=UpdateBody.safeParse(req.body)
    if(!check.success)
    {
        return res.status(411).json({
            message:"Unexpected error occurs"
        })
    }    
    await User.updateOne({_id:req.userId},req.body)
    res.json({
        message:"User details updated Successully"
    })
})

userRouter.get("/bulk",authMiddleware, async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})
    

module.exports=userRouter;