import { ContaCorrente } from './src/model/ContaCorrente'
import { colors } from './src/util/Colors'
import { Conta } from './src/model/Conta'
import recebe = require('readline-sync')
import { ContaPoupanca } from './src/model/ContaPoupanca'

export function main() { //criando a função main. Função principal do projeto. Export torna a função acessível fora da classe menu


    let escolha: number

    //Objeto da classe conta (testando)
    const conta: Conta = new Conta(1, 123, 1, 'Renata', 10000)
    conta.visualizar()
    conta.sacar(10500)
    conta.visualizar()
    conta.depositar(5000)
    conta.visualizar()

    //Objeto da classe conta corrente (testando)
    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, 'Marina', 15000, 1000)
    contacorrente.visualizar()
    contacorrente.sacar(2000)
    contacorrente.visualizar()
    contacorrente.depositar(1000)
    contacorrente.visualizar()

    //Objeto da classe conta poupança (testando)
    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, 'Vilmo', 1000, 10)
    contapoupanca.visualizar()
    contapoupanca.sacar(200)
    contapoupanca.visualizar()
    contapoupanca.depositar(1000)
    contapoupanca.visualizar()

    while (true) {

        console.log(colors.fg.cyan + //aplicando cor ao menu
            `
        =====================================================                                                    
                       BANCO DO BRAZIL COM Z                                                                     
        =====================================================                                              
                    1 - Criar Conta                          
                    2 - Listar todas as Contas               
                    3 - Buscar Conta por Número              
                    4 - Atualizar Dados da Conta             
                    5 - Apagar Conta                         
                    6 - Sacar                                
                    7 - Depositar                            
                    8 - Transferir valores entre Contas      
                    9 - Sair                                                                                     
        =====================================================  
        `                                                     
        + colors.reset) // retira a cor


        console.log('Digite a opção desejada: ')
        escolha = recebe.questionInt("")


        if (escolha === 9) { //finaliza o loop
            console.log(colors.fg.magenta + '\nBanco do Brazil com Z - O seu Futuro começa aqui!')
            sobre()
            process.exit(0)
        }

        
        switch (escolha) {
            case 1:
                console.log(colors.fg.magenta + '\nCriar Conta\n')
                keyPress()
                break;
            case 2:
                console.log(colors.fg.magenta + '\nListar todas as Contas\n')
                keyPress()
                break;
            case 3:
                console.log(colors.fg.magenta + '\nConsultar dados da Conta - por número\n')
                keyPress()
                break;
            case 4:
                console.log(colors.fg.magenta + '\nAtualizar dados da Conta\n')
                keyPress()
                break;
            case 5:
                console.log(colors.fg.magenta + '\nApagar uma Conta\n')
                keyPress()
                break;
            case 6:
                console.log(colors.fg.magenta + '\nSaque\n')
                keyPress()
                break;
            case 7:
                console.log(colors.fg.magenta + '\nDepósito\n')
                keyPress()
                break;
            case 8:
                console.log(colors.fg.magenta + '\nTransferência entre Contas\n')
                keyPress()
                break
            default:
                console.log(colors.fg.magenta + '\nOpção Inválida!\n')
                keyPress()
                break
        }
    }
}

// Implementação da função sobre, com os dados da pessoa desenvolvedora 
export function sobre(): void {
    console.log('=====================================================')
    console.log('Projeto Desenvolvido por - Laish Rodrigues')
    console.log('Generation Brasil - laishr@genstudents.org')
    console.log('Portfolio - github.com/L4ish/bank.git')
    console.log('=====================================================')
}

// Implementando o método keyPress
function keyPress(): void {
    console.log(colors.reset)
    console.log('\nPressione entrer para continuar...')
    recebe.prompt()
}

main() //chama a função main, sem essa linha a aplicação não será inicializada.