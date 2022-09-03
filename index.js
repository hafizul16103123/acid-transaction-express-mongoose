import express from'express'
import {createUserAndAddress} from './users/user.controller.js'
const app = new express()
app.get('/create/user',(req,res)=>{
    const result = createUserAndAddress()
    return result
    
})
app.listen(3000,()=>console.log("http://localhost:3000"))