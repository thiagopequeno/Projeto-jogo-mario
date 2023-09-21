import express from 'express';
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import router from './src/router/index.mjs';
import routerCadastro from './src/router/cadastro.mjs';
import routeruser from './src/router/usuario.mjs';



const app = express();
const path1 = path;
const PORTA = 3000; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path1.join(__dirname,'public')))
app.use(cors())


app.use("/jogo",router);
app.use("/",routerCadastro)
app.use("/usuario", routeruser);


app.listen(PORTA,()=>{
    console.log(`Server rodando na porta http://localhost:${PORTA}`);
})

