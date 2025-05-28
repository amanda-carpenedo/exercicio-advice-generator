document.getElementById('botao').addEventListener('click', apertarBotao)
const titulo = document.getElementById('titulo')

function apertarBotao() {
    async function gerarConselho() {
        try {
            const resposta = await fetch('https://api.adviceslip.com/advice')

            if (!resposta.ok) {
                throw new Error(`Erro na requisição ${resposta.status}`)
            }

            const dados = await resposta.json()
            console.log('Dados recebidos:', dados)

            const id = dados.slip.id
            const mensagem = dados.slip.advice
            document.getElementById('titulo').innerText = `ADVICE #${id}`
            document.getElementById('conselho').innerText = `"${mensagem}"`


        } catch (erro) {
            console.log('Ocorreu um erro ao buscar os dados:', erro.message)
        }
    }
    gerarConselho()
}

