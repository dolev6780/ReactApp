const mongoose = require('mongoose');
const express = require("express");
const userInfo = require('./models/User');


const app = express();

const PORT = 3000 || 5000;


const newUser = new userInfo({
   Fname:"Dolev",
   Lname:"Cohen",
  });

//newUser.save()
userInfo
  .findOne({ Fname: "Dolev" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });


mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://dolevcohen747:dolev123@tirgul.ebx86m6.mongodb.net/",{
}).then(()=>{
    app.listen(PORT, ()=>{console.log("server port", PORT)});
}).catch((err)=>{console.log(err,"err something gone wrong")});