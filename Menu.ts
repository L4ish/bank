import { ContaCorrente } from './src/model/ContaCorrente'
import { ContaPoupanca } from './src/model/ContaPoupanca'
import { colors } from './src/util/Colors'
import recebe = require('readline-sync')
import { ContaController } from './src/controller/ContaController'

export function main() { //criando a função main. Função principal do projeto. Export torna a função acessível fora da classe menu

    //Instância da classe ContaController
    let contas: ContaController = new ContaController()

    let escolha: number, numero: number, agencia: number, tipo: number, saldo: number, aniversario: number, limite: number
    let titular: string
    const tiposContas = ['Conta Corrente', 'Conta Poupanca']

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
        escolha = recebe.questionInt('')


        if (escolha === 9) { //finaliza o loop
            console.log(colors.fg.magenta + '\nBanco do Brazil com Z - O seu Futuro começa aqui!')
            sobre()
            process.exit(0)
        }

        
        switch (escolha) {
            case 1:
                console.log(colors.fg.magenta + '\nCriar Conta\n', colors.reset)

                console.log('Digite o número da agência: ')
                agencia = recebe.questionInt('')

                console.log('Digite o nome do Titular da conta: ')
                titular = recebe.question('')

                console.log('Digite o tipo da conta: ')
                tipo = recebe.keyInSelect(tiposContas,'', {cancel: false}) + 1

                console.log('Saldo da conta (R$): ')
                saldo = recebe.questionFloat('')

                switch(tipo) {
                    case 1:
                        console.log('Digite o limite da conta (R$): ')
                        limite = recebe.questionFloat('')
                        contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite))
                        break
                    case 2:
                        console.log('Digite o dia do aniversário da Conta Poupança: ')
                        aniversario = recebe.questionInt('')
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario))
                        break
                    }

                keyPress()
                break;

            case 2:
                console.log(colors.fg.magenta + '\nListar todas as Contas\n', colors.reset)
                contas.listarTodas()
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