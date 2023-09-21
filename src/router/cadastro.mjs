import express from 'express'
const routerCadastro = express.Router();

routerCadastro.get("/",(req,res)=>{
    res.render("cadastro");
})
export default routerCadastro;