import executar from "../database/db.mjs";

export const logar = (email,senha)=>{
    var queryNativa =`SELECT id,nome,email from usuarios where senha="${senha}" and "${email}"`
     return executarDb(queryNativa)
}

export const cadastrar = (nome,email,senha)=>{
    var queryNativa =`INSERT INTO usuarios(nome,email,senha) VALUES ("${nome}","${email}","${senha}")`
    return executar(queryNativa)
}

export default logar;