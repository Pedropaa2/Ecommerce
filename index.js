listaCachorros = [
    {
        img: "./cachorros/lulu.jpg",
        tipo: "Baixo",
        name: "Lulu da Pomerania",
        description: "Spitz-alemão-anão, também conhecida como lulu-da-pomerânia, é a menor variedade da raça spitz alemão. É nativa da Pomerânia, uma região que engloba parte da Alemanha e Polônia na Europa Central.",
        price: 3500,
        add: "Adicionar ao carrinho",
        id: 1
    },
    {
        img: "./cachorros/york.jpg",
        tipo: "Baixo",
        name: "Yorkshire Terrier",
        description: "Yorkshire terrier, também chamada york e yorkie, é uma raça canina de pequeno porte do grupo dos terriers, originária do condado de Yorkshire na Inglaterra.",
        price: 2000,
        add: "Adicionar ao carrinho",
        id: 2
    },
    {
        img: "./cachorros/Golden.jpg",
        tipo: "Alto",
        name: "Golden Retriever",
        description: "O golden retriever é uma raça canina do tipo retriever originária da Grã-bretanha, e foi desenvolvida para a caça de aves aquáticas.",
        price: 2200,
        add: "Adicionar ao carrinho",
        id: 3
    },
    {
        img: "./cachorros/Pastor.jpg",
        tipo: "Alto",
        name: "Pastor Alemão",
        description: "Pastor-alemão ou lobo-da-alsácia é uma raça canina proveniente da Alemanha. Em sua origem era utilizado como cão de pastoreio de rebanhos. Atualmente é mais utilizado como cão de guarda e cão policial.",
        price: 1800,
        add: "Adicionar ao carrinho",
        id: 4
    },
    {
        img: "./cachorros/Border.jpg",
        tipo: "Médio",
        name: "Border Collie",
        description: "Border collie é uma raça canina do tipo collie desenvolvida na região da fronteira anglo-escocesa na Grã-Bretanha para o trabalho de pastorear gado ovino. Popular em seu país de origem, é considerada a raça de cães mais inteligente.",
        price: 2600,
        add: "Adicionar ao carrinho",
        id: 5
    },
    {
        img: "./cachorros/Dalmata.jpg",
        tipo: "Médio",
        name: "Dálmata",
        description: "Dálmata é uma raça canina antiga, oriunda do Leste Europeu, da região da Dalmácia, e reconhecida por sua característica pelagem manchada. Cão muito utilizado para a caça de aves e, durante a Idade Média, foi também utilizado para acompanhar as carruagens.",
        price: 1700,
        add: "Adicionar ao carrinho",
        id: 6
    }
]
cards = document.querySelector("section")
console.log(cards)
cont = 0
soma = 0

let esconder = document.querySelector(".escondido")

let divTotal = document.querySelector(".quantidade")

let quantidadeTexto = document.createElement("p")
divTotal.appendChild(quantidadeTexto)

let quantidadeTotal = document.createElement("p")
divTotal.appendChild(quantidadeTotal)

let divtotalPrice = document.querySelector(".totalPrice")

let totalTexto = document.createElement("p")
divtotalPrice.appendChild(totalTexto)

let totalNumero = document.createElement("p")
divtotalPrice.appendChild(totalNumero)

let divEmpty = document.querySelector(".empty")

for (x = 0; x < listaCachorros.length; x = x + 3) {
    let div = document.createElement("div")
    div.classList.add("row")
    cards.appendChild(div)

    let ul = document.createElement("ul")
    div.appendChild(ul)

    if (x + 3 <= listaCachorros.length) {
        let lium = document.createElement("li")
        lium.classList.add("liCard")
        ul.appendChild(lium)

        let imgUm = document.createElement("img")
        imgUm.src = listaCachorros[x].img
        lium.appendChild(imgUm)

        let tipo = document.createElement("p")
        tipo.classList.add("tipo")
        tipo.innerText = listaCachorros[x].tipo
        lium.appendChild(tipo)

        let name = document.createElement("h2")
        name.classList.add("name")
        name.innerText = listaCachorros[x].name
        lium.appendChild(name)

        let description = document.createElement("p")
        description.classList.add("description")
        description.innerText = listaCachorros[x].description
        lium.appendChild(description)

        let price = document.createElement("p")
        price.classList.add("price")
        price.innerText = `R$ ${listaCachorros[x].price.toFixed(2)}`
        lium.appendChild(price)

        let add = document.createElement("p")
        add.classList.add("add")
        add.setAttribute("id", `${listaCachorros[x].id}`)
        add.innerText = listaCachorros[x].add
        lium.appendChild(add)

        let liDois = document.createElement("li")
        liDois.classList.add("liCard")
        ul.appendChild(liDois)

        let imgDois = document.createElement("img")
        imgDois.src = listaCachorros[x + 1].img
        liDois.appendChild(imgDois)

        let tipoDois = document.createElement("p")
        tipoDois.classList.add("tipo")
        tipoDois.innerText = listaCachorros[x + 1].tipo
        liDois.appendChild(tipoDois)

        let nameDois = document.createElement("h2")
        nameDois.classList.add("name")
        nameDois.innerText = listaCachorros[x + 1].name
        liDois.appendChild(nameDois)

        let descriptionDois = document.createElement("p")
        descriptionDois.classList.add("description")
        descriptionDois.innerText = listaCachorros[x + 1].description
        liDois.appendChild(descriptionDois)

        let priceDois = document.createElement("p")
        priceDois.classList.add("price")
        priceDois.innerText = `R$ ${listaCachorros[x + 1].price.toFixed(2)}`
        liDois.appendChild(priceDois)

        let addDois = document.createElement("p")
        addDois.classList.add("add")
        addDois.setAttribute("id", `${listaCachorros[x + 1].id}`)
        addDois.innerText = listaCachorros[x + 1].add
        liDois.appendChild(addDois)

        let liTres = document.createElement("li")
        liTres.classList.add("liCard")
        ul.appendChild(liTres)

        let imgTres = document.createElement("img")
        imgTres.src = listaCachorros[x + 2].img
        liTres.appendChild(imgTres)

        let tipoTres = document.createElement("p")
        tipoTres.classList.add("tipo")
        tipoTres.innerText = listaCachorros[x + 2].tipo
        liTres.appendChild(tipoTres)

        let nameTres = document.createElement("h2")
        nameTres.classList.add("name")
        nameTres.innerText = listaCachorros[x + 2].name
        liTres.appendChild(nameTres)

        let descriptionTres = document.createElement("p")
        descriptionTres.classList.add("description")
        descriptionTres.innerText = listaCachorros[x + 2].description
        liTres.appendChild(descriptionTres)

        let priceTres = document.createElement("p")
        priceTres.classList.add("price")
        priceTres.innerText = `R$ ${listaCachorros[x + 2].price.toFixed(2)}`
        liTres.appendChild(priceTres)

        let addTres = document.createElement("p")
        addTres.classList.add("add")
        addTres.innerText = listaCachorros[x + 2].add
        addTres.setAttribute("id", `${listaCachorros[x + 2].id}`)
        liTres.appendChild(addTres)


    } else if (x + 3 > listaCachorros.length && x + 2 == listaCachorros.length) {
        let lium = document.createElement("li")
        lium.classList.add("liCard")
        ul.appendChild(lium)

        let imgUm = document.createElement("img")
        imgUm.src = listaCachorros[x].img
        lium.appendChild(imgUm)

        let tipo = document.createElement("p")
        tipo.classList.add("tipo")
        tipo.innerText = listaCachorros[x].tipo
        lium.appendChild(tipo)

        let name = document.createElement("h2")
        name.classList.add("name")
        name.innerText = listaCachorros[x].name
        lium.appendChild(name)

        let description = document.createElement("p")
        description.classList.add("description")
        description.innerText = listaCachorros[x].description
        lium.appendChild(description)

        let price = document.createElement("p")
        price.classList.add("price")
        price.innerText = `R$ ${listaCachorros[x].price.toFixed(2)}`
        lium.appendChild(price)

        let add = document.createElement("p")
        add.classList.add("add")
        add.setAttribute("id", `${listaCachorros[x].id}`)
        add.innerText = listaCachorros[x].add
        lium.appendChild(add)

        let liDois = document.createElement("li")
        liDois.classList.add("liCard")
        ul.appendChild(liDois)

        let imgDois = document.createElement("img")
        imgDois.src = listaCachorros[x + 1].img
        liDois.appendChild(imgDois)

        let tipoDois = document.createElement("p")
        tipoDois.classList.add("tipo")
        tipoDois.innerText = listaCachorros[x + 1].tipo
        liDois.appendChild(tipoDois)

        let nameDois = document.createElement("h2")
        nameDois.classList.add("name")
        nameDois.innerText = listaCachorros[x + 1].name
        liDois.appendChild(nameDois)

        let descriptionDois = document.createElement("p")
        descriptionDois.classList.add("description")
        descriptionDois.innerText = listaCachorros[x + 1].description
        liDois.appendChild(descriptionDois)

        let priceDois = document.createElement("p")
        priceDois.classList.add("price")
        priceDois.innerText = `R$ ${listaCachorros[x + 1].price.toFixed(2)}`
        liDois.appendChild(priceDois)

        let addDois = document.createElement("p")
        addDois.classList.add("add")
        addDois.innerText = listaCachorros[x + 1].add
        addDois.setAttribute("id", `${listaCachorros[x + 1].id}`)
        liDois.appendChild(addDois)

    } else if (x + 3 > listaCachorros.length && x + 1 == listaCachorros.length) {
        let lium = document.createElement("li")
        lium.classList.add("liCard")
        ul.appendChild(lium)

        let imgUm = document.createElement("img")
        imgUm.src = listaCachorros[x].img
        lium.appendChild(imgUm)

        let tipo = document.createElement("p")
        tipo.classList.add("tipo")
        tipo.innerText = listaCachorros[x].tipo
        lium.appendChild(tipo)

        let name = document.createElement("h2")
        name.classList.add("name")
        name.innerText = listaCachorros[x].name
        lium.appendChild(name)

        let description = document.createElement("p")
        description.classList.add("description")
        description.innerText = listaCachorros[x].description
        lium.appendChild(description)

        let price = document.createElement("p")
        price.classList.add("price")
        price.innerText = `R$ ${listaCachorros[x].price.toFixed(2)}`
        lium.appendChild(price)

        let add = document.createElement("p")
        add.classList.add("add")
        add.setAttribute("id", `${listaCachorros[x].id}`)
        add.innerText = listaCachorros[x].add
        lium.appendChild(add)
    }
}
let favoritos = document.querySelector(".favoritos")
let adicionar = document.querySelectorAll(".add")
console.log(adicionar)

for (i = 0; i < adicionar.length; i++) {
    let clicar = adicionar[i]
    clicar.addEventListener("click", function (e) {
        let idElemento = e.target.id;
        cont++
        let id = (+idElemento)
        console.log(id)
        identificaCachorro(id)
        esconder.classList.remove("escondido")
        esconder.classList.add("total")

        quantidadeTexto.innerText = "Quantidade"
        totalTexto.innerText = "Total"
        quantidadeTotal.innerText = `${cont}`
        totalNumero.innerText = `R$ ${soma}`


        divEmpty.classList.add("withItems")

    })
}
ulfavoritos = document.createElement("ul")
ulfavoritos.classList.add("ulFavoritos")
favoritos.appendChild(ulfavoritos)

function identificaCachorro(id) {
    for (z = 0; z < listaCachorros.length; z++) {


        if (listaCachorros[z].id == id) {
            soma = soma + listaCachorros[z].price

            let lifavorito = document.createElement("li")
            lifavorito.id = "favorito-" + listaCachorros[z].id
            lifavorito.classList.add("liFavorito")
            ulfavoritos.appendChild(lifavorito)

            let imagem = document.createElement("img")
            imagem.classList.add("imgFavoritada")
            imagem.src = listaCachorros[z].img
            lifavorito.appendChild(imagem)

            let divFavorito = document.createElement("div")
            divFavorito.classList.add("divFavorito")
            lifavorito.appendChild(divFavorito)

            let nomefavorito = document.createElement("h4")
            nomefavorito.innerText = listaCachorros[z].name
            divFavorito.appendChild(nomefavorito)

            let pricefavorito = document.createElement("p")
            pricefavorito.classList.add("price")
            pricefavorito.innerText = "R$ " + listaCachorros[z].price
            divFavorito.appendChild(pricefavorito)

            let removefavorito = document.createElement("p")
            removefavorito.innerText = "Remover produto"
            removefavorito.classList.add("remove")
            removefavorito.setAttribute("id", `${listaCachorros[z].id}`)
            removefavorito.addEventListener("click", function (e) {
                console.log(removefavorito.id)
                let lifav = document.querySelector("#favorito-" + removefavorito.id)
                lifav.remove()
                cont = cont - 1
                quantidadeTotal.innerText = `${cont}`
                Soma(removefavorito.id)
                totalNumero.innerText = `R$ ${soma}`
                if(soma == 0){
                    esconder.classList.add("escondido")
                    divEmpty.classList.remove("withItems")
                }

            })

            divFavorito.appendChild(removefavorito)


        }
    }
}

function Soma(x) {
    for (p = 0; p < listaCachorros.length; p++) {
        if (listaCachorros[p].id == x) {
            soma = soma - listaCachorros[p].price

        }
    }
    return soma
}
