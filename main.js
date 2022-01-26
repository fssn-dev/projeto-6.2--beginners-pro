const BODY = document.querySelector('body')
const QUESTOES = [
    {
        questao: `1- Fale com suas palavras a teoria por trás da "Identificação Sequencial"`,
        resposta: `Identificação sequencial consiste em atrelar cada atualização (versão) a um identificador único que 
        possibilita o rastreamento das alterações e uma maior facilidade em desfazer alguma alteração caso 
        necessário.`
    }, {
        questao: `2- Como o versionamento de códigos ajuda o trabalho em equipe?`,
        resposta: `No mundo moderno onde times são formados por pessoas ao redor do mundo ligados pela internet e trabalhando em 
        home office, o versionamento de código auxilia muito na administração de todas as alterações realizadas, 
        permite desfazer alguma alteração mal sucedida.`
    }, {
        questao: `3- Como funcionam as branches no Git?`,
        resposta: `Branches são locais diferentes do repositório principal onde está alocado o código real da aplicação, onde 
        cada colaborador pode trabalhar à vontade sem comprometer o código real. Após a conclusão do trabalho 
        as alterações em cada branch são revisadas e fundidas ao código no repositório principal.`
    }, {
        questao: `4- Qual a diferença entre repositórios locais e repositórios em nuvem?`,
        resposta: `repositório local    
            vantagens
                armazenamento local
                menos risco de ser acessado por terceiros
                funciona sem internet
    
            desvantagens
                espaço de armazenamento
                manutenção local
                backup local
    
        repositório cloud
            vantagens
                armazenamento em nuvem
                não precisa se preocupar com manutenção
                várias pessoas podem acessar ao mesmo tempo
    
        desvantagens
            seus dados ficam nas mãos de outros
            existe a chance se ser hackeado
            não funciona sem internet
    `
    }, {
        questao: `5- Explique o "fluxo de trabalho comum com GitHub" com suas palavras.
        <br>PS.: Utilize os códigos para te ajudar nesta tarefa.`,
        resposta: `git pull origin master (ou main)

        copia os dados correntes do repositório na sua pasta local de trabalho
        --
        
        git status
        
        mostra em qual branch você está conectado no momento
        --
        
        git checkout nomeDaBranch
        
        verifica se a branch pesquisada existe
        --
        
        git branch nomeNovaBranch
        
        cria uma nova branch
        --
        
        git switch nomeNovaBranch
        
        move para a branch criada
        --
        
        trabalho no projeto
        --
        
        git add .
        
        adiciona a pasta corrente no índice do repositório em preparação ao commit
        --
        
        git commit -m "mensagem"
        
        salva as alterações no repositório junto com uma mensagem
        --
        
        git push origin
        
        envia a branch corrente ao repositório remoto (salva no github)`
    }, {
        questao: `6- Explique com suas palavras a funcionalidade do GitHub.`,
        resposta: `GitHub é um hospedeiro de repositórios compatível com git que permite a utilização de ferramentas administrativas
        para controle de fluxo de trabalho nos projetos e auxilia no compartilhamento de código de aplicativos.
        Hoje em dia a cópia de código do GitHub para construção local do arquivo executável é quase tão comum quanto
        fazer o download de um programa pronto na internet.`
    }, {
        questao: `7- Como funciona a linguagem Markdown.`,
        resposta: `Markdown (*.md) é uma linguagem (de marcação) leve que converte texto em HTMl. Sua sintaxe é mais simples e
        de fácil leitura para nós humanos. Um programa capaz de ler markdown lê o arquivo gera uma estrutura em HTML
        como saída.`
    }, {
        questao: `8- Como normalmente utilizamos Markdown, de exemplos.`,
        resposta: `# CABEÇALHO

        um # no início converte o restante da linha em um texto grande com tamanho adequado para cabeçalhos
        --
        
        - vários
        - items
        - em 
        - uma 
        - lista
        
        um - no início converte o restante da linha em um item não ordenado de lista
        
        | uma | tabela |
        | --- | ------ |
        | com | dados |
        | simples | |
        
        a estrutura acima converte o conjunto em uma tabela simples onde "uma" e "tabela" fazem parte do cabeçalho`
    }, {
        questao: `9- Faça um texto falando sobre Front-end.`,
        resposta: `em SoC ("separação de preocupações" em ciências da computação) o front-end é responsável pelos processos
        relacionados à Camada de Apresentação, que é a camada de uma aplicação responsável por enviar dados legíveis
        à Camada de Aplicação de outro sistema; ou seja, é a parte do programa responsável por exibir na tela coisas
        que conseguimos ler e recebe os dados que nós inserimos para serem processados pelo restante da aplicação.`
    }, {
        questao: `10- Faça um texto falando sobre Back-end.`,
        resposta: `em SoC ("separação de preocupações" em ciências da computação) o back-end é responsável pela 
        Camada de Acesso de Dados que fornece acesso simplificado aos dados armazenados em algum local.
        back-end em si é responsável pela funcionalidade interna, escalabilidade, e utilização de dados de uma aplicação,
        sua conexão com o banco de dados e o desenvolvimento e manutenção de banco de dados.`
    }
]

BODY.appendChild(document.createElement('div'))

QUESTOES.forEach(elemento => {

    document.querySelector('div').innerHTML += templateAccordionQuestaoResposta(elemento.questao, elemento.resposta)

})

function templateAccordionQuestaoResposta(questao, resposta) {
    return `
    <details>
        <p></p>
        <pre>
        ${resposta}
        </pre>
        <summary>
            ${questao}
        </summary>
    </details>
    `
}
