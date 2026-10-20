// const express = require('express');
// const app = express()
// const port = 3000
// let kidney=0
// let heart=0
// app.use(express.json())

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://puniasourabh8_db_user:Storm1view@cluster0.x5azpcu.mongodb.net/');

  const kittySchema= new mongoose.Schema({
    name: String
  })

//   const Kitten = mongoose.model('Kitten', kittySchema);

  const silence = new Kitten({ name: 'Silence' });
    console.log(silence.name); // 'Silence'

    await silence.save();
}
main()
console.log("db connected succesful")

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get("/health",(req,res)=>{
//     res.json({
//         health:"100%"
//     })
// })
// app.post("/appointment",(req,res)=>{
//     const name=req.body.name
//     const age=req.body.age
//     const problem=req.body.problem

//     if(!name && !age && !problem){
//         res.send('Enter your detail first')
//     }else{
//         res.json({
//         message:"your appointment is booked"
//         })
//     }
// })

// app.get("/kidney",(req,res)=>{
//     if(kidney>0){
//         kidney-=1
//          res.json({
//             message:"kidney is assigned to patient"
//         })
//     }
//     else{
//         res.send('No kidney is availabe')
//     }
// })

// app.get("/heart",(req,res)=>{
//     if(heart>0){
//         heart-=1
//         res.json({
//             message:"heart is assigned to patient"
//         })
//     }
//     else{
//         res.send('No heart is available')
//     }
// })


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })