import express from 'express'
const router = express.Router()

router.get("/jogo",(req,res)=>{
    res.render("jogo");
})

export default router;