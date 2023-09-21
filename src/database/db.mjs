import mysql from 'mysql2'

const conexaoConfig = {
    host: "localhost",
    database: "marioDb",
    user: 'root',
    password: "thiagohalls"
}

const executar = (queryDigitada) => {
    return new Promise((resolve, reject) => {
        var conexao = mysql.createConnection(conexaoConfig);
        conexao.connect();
        conexao.query(queryDigitada, (erro, resultados) => {
            conexao.end();
            if (erro) {
                reject(erro);
            }
            console.log(resultados);
            resolve(resultados);
        });

        conexao.on('error', function (erro) {
            return ("ERRO NO MySQL WORKBENCH: ", erro.sqlMessage);
        });
    });
}

export default executar;