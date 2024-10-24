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
    console.log("CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE");                       for (let i = 0; i < abrigos.length; i++) {
        console.log(`${i + 1} | ${abrigos[i].nome} | ${ abrigos[i].endereco} | ${abrigos[i].telefone} | ${ abrigos[i].capacidade} | ${abrigos[i].Cidade}`);
    };
    console.log("---------------------------------------------------------------------------------------------------------");
}

function procurarAbrigo() {
    let cidadeProcurada = prompt ("Qual cidade você está?");
    let abrigoEncontrado = abrigos.find(abrigo => abrigo.Cidade.toLowerCase() === cidadeProcurada.toLowerCase());
    console.log("--------------------\nLISTAGEM DE ABRIGOS:\n--------------------");
    console.log("CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE");
    if (abrigoEncontrado) {
        console.log(`Abrigo encontrado: ${abrigoEncontrado.nome}  ${abrigoEncontrado.endereco}  ${abrigoEncontrado.telefone}  ${abrigoEncontrado.capacidade}  ${abrigoEncontrado.Cidade}` );
    } 

}


function menu() { 
    let opcao;
    while (opcao !== '4') {
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
        } else {
            console.log("Opção inválida. Tente novamente.\n");
        }
    }
}

menu();






    




    


        


    
