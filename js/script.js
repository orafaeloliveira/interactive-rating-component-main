const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    // selecionando o cartão
    const card = document.querySelector("section.card");
    // alinhando texto ao centro
    card.style.textAlign = "center";
    // selecionando a div cabeçalho
    const cardHead = document.getElementById("card-head");
    // selecionando imagem
    const cardImage = document.getElementById("card-image");
    cardImage.classList.replace("rounded", "high-img");
    // image.classList.remove("rounded")
    // image.classList.add("high-img")
    // trocando a imagem
    cardImage.style.marginTop = "20px";
    cardImage.src = "./images/illustration-thank-you.svg";

    const existRateNote = document.getElementById("rate-note");

    if (existRateNote) {
        existRateNote.remove();
    }

    const rateNote = document.createElement("p");
    rateNote.id = "rate-note";
    rateNote.classList.add("rate-note");
    cardHead.append(rateNote);
    const radios = document.getElementsByName("rating");

    function searchCheck(radio) {
        if (radio.checked) {
            const value = radio.value;
            rateNote.innerText = `You selected ${value} out of 5`;
            console.log(value);
        }
    }

    radios.forEach(searchCheck);

    const textTitle = document.getElementById("card-title");
    textTitle.innerText = "Thank you!";
    const textParagraph = document.getElementById("card-paragraph");
    textParagraph.innerText =
        "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";

    e.preventDefault();
});
