const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const card = document.querySelector("section.card")
    card.style.textAlign = "center"
    const image = document.getElementById("img")
    image.classList.remove("rounded")
    image.classList.add("high-img")
    image.src = "./images/illustration-thank-you.svg"
    const rateNote = document.createElement("p")
    rateNote.innerText = `You selected`
    image.appendChild(rateNote)


    const url = location.search
    
})