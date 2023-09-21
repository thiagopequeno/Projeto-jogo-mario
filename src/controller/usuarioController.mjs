import * as usuarioModel from '../model/usuario.mjs'

export const autenticar=(req,res)=>{
    var email = req.body.email
    var senha = req.body.senha

    if(email==undefined){
        res.status(400).send("email undefined")
    }
    else if(senha==undefined){
        res.status(400).send("senha undefined")
    }
    else{
        usuarioModel.logar(email,senha)
        .then((resultado)=>{
            if(resultado.length==0){
                res.status(404).send("usuario não encontrado")
            }
            else{
                res.status(200).send(resultado)
                res.json({
                    id:resultado.id,
                    nome:resultado.nome,
                    email:resultado.email
                })
            }
        }).catch((erro)=>{
            console.log(erro);
            console.log("erro ao efetuar login");
            res.status(400).json(erro)
        })
    }
}

export const cadastrar =(req,res)=>{
    var nome = req.body.nome
    var email = req.body.email
    var senha = req.body.senha

    if(nome==undefined){
        res.status(400).send("nome undefined")
    }
    else if(email==undefined){
        res.status(400).send("email undefined")
    }
    else if(senha==undefined){
        res.status(400).send("senha undefined")
    }
    else{
        usuarioModel.cadastrar(nome,email,senha)
        .then((resultado)=>{
            res.status(200).json({
                status: "ok",
                message: "Cadastrado com sucesso",
                data: resultado
            });
        }).catch((erro)=>{
            console.log(erro);
            console.log("erro ao cadastrar");
            res.status(400).json({
                status: "error",
                message: "Erro ao cadastrar",
                error: erro
            });
        })
    }
}
