const express=require('express')
const app = express();
const serverless=require("serverless-http");
// const PORT=4000;
const router=express.Router();

var uid="aastle_stephno_09052003"
var roll="12017933"
var mail="stephno2003@gmail.com"

app.use(express.json())

app.post('/bfhl',(req,res)=>{
    console.log(req.body)
    reqArray=req.body.data
    var odd_arr=[]
    var even_arr=[]
    var alpha_arr=[]
    reqArray.forEach(ele => {
        if(ele>="A" && ele<="z"){
            alpha_arr.push(ele)
        }
        else{
            var num=Number(ele)
            if(num%2==0){
                even_arr.push(num.toString())
            }
            else{
                odd_arr.push(num.toString())
            }
        }
        
    });

    
    res.status(200).send({
        is_success: true,
        user_id: uid,
        email: mail,
        roll_number: roll,
        odd_numbers: odd_arr,
        even_numbers: even_arr,
        alphabets: alpha_arr
    })
})

app.use('/.netlify/functions/api',router);

// app.listen(PORT,()=>{
//     console.log("listening on "+PORT)
// })

modules.exports.handler=serverless(app);
