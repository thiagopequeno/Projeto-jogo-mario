import * as usuarioController from "../controller/usuarioController.mjs";
import express from 'express'

const routeruser = express.Router();


routeruser.post('/cadastrar',(req,res)=>{
    usuarioController.cadastrar(req,res);
});

export default routeruser;