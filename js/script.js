const form = document.querySelector("form")
const card = document.querySelector("section.card")


form.addEventListener("submit", (e) => {
    //console.log(card)
    const url = location.search

    const content = card.innerHTML
    console.log(content)
    e.preventDefault()
})