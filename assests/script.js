const dadosPessoa = {
    "nome": "GUSTAVO SILVEIRA SILVA",
    "profissao": "Controle de Qualidade III",
    "cpf": "14785236989",
    "endereco": "Rua XPTO",
    "numero": 100,
    "complemento": "N/A",
    "cep": 85964809,
    "bairro": "Centro",
    "cidade": "Pato Branco",
    "estado": "Paraná",
    "sexo": "Masculino",
    "estadoCivil": "Solteiro",
    "dataNascimento": "01/01/1980",
    "email": "contato@email.com.br",
    "telefone": "+5546987987965",
    "urls": [
        {
            "titulo": "LinkedIn",
            "url": "https://www.linkedin.com/in/gtosilva/"
        },
        {
            "titulo": "Git",
            "url": "https://github.com/gtosilva89"
        },
    ]

}

// Montagem nome na div title 
const divTitle = document.getElementById("title")
const h1Nome = document.createElement("h1")
h1Nome.textContent = dadosPessoa.nome

// Apresentar nome
divTitle.appendChild(h1Nome)

// Montagem profissão na div title
const spanProfissao = document.createElement("span")
spanProfissao.textContent = dadosPessoa.profissao

// Apresentar profissão
divTitle.appendChild(spanProfissao)

// Montagem da div contact
const divContact = document.getElementById("contact")

// Lista não ordenada
const listaContato = document.createElement("ul")

// Item de lista para endereço completo
const itemEndereco = document.createElement("li")
itemEndereco.textContent = `${dadosPessoa.endereco}, ${dadosPessoa.numero}`
listaContato.appendChild(itemEndereco)

// Item de lista para o e-mail
const itemEmail = document.createElement("li")
itemEmail.textContent = dadosPessoa.email
listaContato.appendChild(itemEmail)

// Item de lista para o telefone
const itemTelefone = document.createElement("li")
itemTelefone.textContent = dadosPessoa.telefone
listaContato.appendChild(itemTelefone)

// Item de lista para com link para cada link
// for (url of dadosPessoa.urls) {
//     const itemLink = document.createElement("li")
//     const aconra = document.createElement("a")
//     aconra.textContent = url
//     aconra.setAttribute("href", url)
//     itemLink.appendChild(aconra)
//     listaContato.appendChild(itemLink)
// }

for (let enderecoWeb of dadosPessoa.urls) {
    const ancora = document.createElement("a")
    ancora.textContent = enderecoWeb.titulo
    ancora.setAttribute("href", enderecoWeb.url)

    const itemLink = document.createElement("li")
    itemLink.appendChild(ancora)

    listaContato.appendChild(itemLink)
}

// Apresentar dados de contato    
divContact.appendChild(listaContato)