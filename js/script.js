const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    
    // selecionando o cartão
    const card = document.querySelector("section.card")
    // alinhando texto ao centro
    card.style.textAlign = "center"
    // selecionando a div cabeçalho
    const imageDiv = document.getElementById("card-head")
    // selecionando imagem
    const image = document.getElementById("img")
    image.classList.replace("rounded", "high-img")
    // image.classList.remove("rounded")
    // image.classList.add("high-img")
    // trocando a imagem
    image.style.marginTop = "20px"
    image.src = "./images/illustration-thank-you.svg"

    const rateExist = document.querySelector("#rate-text")

    if (!rateExist) {
        // criando paragrafo com a nota
        const rateNote = document.createElement("p")
        // add id rate-text
        rateNote.id = "rate-text"
        // add texto
        // rateNote.innerText = `You selected 4 out of 5`
        // adicionando ao fim da div-head
        imageDiv.append(rateNote)
        // adicionando classe rate-text
        rateNote.classList.add("rate-text")
        // salvando os parâmetros da url
        const param = new URLSearchParams(location.search)
        // extraindo o valor de rating
        const ratingValue = param.get("rating")
        rateNote.innerText = `You selected ${ratingValue} out of 5`
        console.log(ratingValue)
    }

    e.preventDefault()
})