let abrigos = []

function cadastrarAbrigo() {
    let abrigo = {
        nome: prompt("Nome do abrigo:"),
        endereco: prompt("Endereço do abrigo:"),
        cidade: prompt("Cidade do abrigo:"),
        telefone : prompt("Telefone do abrigo:"),
        capacidade : prompt("Capacidade do abrigo:"),
    };
    abrigos.push(abrigo);
}
 function listarAbrigos() {
    console.log("--------------------\nLISTAGEM DE ABRIGOS:\n--------------------");
    console.log("CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE");
    console.log("---------------------------------------------------------------------------------------------------------"); 
    for (let i = 0; i < abrigos.length; i++) {
        console.log(`${i + 1} | ${abrigos[i].nome} | ${ abrigos[i].endereco} | ${abrigos[i].telefone} | ${ abrigos[i].capacidade} | ${abrigos[i].cidade}`);
    };
    console.log("---------------------------------------------------------------------------------------------------------");
}

function procurarAbrigo() {
    let cidadeProcurada = prompt ("Qual cidade você está?");
    let abrigoEncontrado = abrigos.filter(abrigo => abrigo.cidade.toLowerCase() === cidadeProcurada.toLowerCase());
    console.log("--------------------\nLISTAGEM DE ABRIGOS:\n--------------------");
    console.log("CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE");
    console.log("---------------------------------------------------------------------------------------------------------");
    if (abrigoEncontrado.length > 0) {
        for (let i = 0; i < abrigoEncontrado.length;  i++) {
            console.log(`${i + 1} | ${abrigoEncontrado[i].nome} | ${abrigoEncontrado[i].endereco} | ${abrigoEncontrado[i].telefone} | ${abrigoEncontrado[i].capacidade} | ${abrigoEncontrado[i].cidade}` );
        };
        console.log("---------------------------------------------------------------------------------------------------------");
    }
}


function menu() { 
    let opcao;
    while (true) {
        opcao = prompt("===== ABRIGOS TEMPORÁRIOS ===== \n1. Cadastrar abrigo\n2. Listar abrigos\n3. Procurar abrigo\n4. Sair\nEscolha uma opção:");
        if (opcao === '1') {
            cadastrarAbrigo();
        } else if (opcao === '2') {
            listarAbrigos();
        } else if (opcao === '3') {
            procurarAbrigo();
        } else if (opcao === '4') {
            console.log("Programa encerrado");
            break;
        } 
    }
}

menu();






    




    


        


    
