const dadosPessoa = {
    "nome": "GUSTAVO SILVEIRA SILVA",
    "email": "contato@email.com.br",
    "telefone": "46987987965",
    "cpf": "14785236989",
    "endereco": "Rua XPTO",
    "numero": 0,
    "complemento": "N/A",
    "cep": 85964809,
    "bairro": "Centro",
    "cidade": "Pato Branco",
    "estado": "Paraná",
    "sexo": "Masculino",
    "estadoCivil": "Solteiro",
    "profissao": "Controle de Qualidade III",
    "dataNascimento": "01/01/1980"
}

const divTitle = document.getElementById("title")

const h1Nome = document.createElement("h1")
h1Nome.textContent = dadosPessoa.nome

divTitle.appendChild(h1Nome)

const spanProfissao = document.createElement("span")
spanProfissao.textContent = dadosPessoa.profissao

divTitle.appendChild(spanProfissao)