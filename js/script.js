const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    // get the whole card
    const card = document.querySelector("section.card");
    // get the card height
    const cardHeight = card.scrollHeight
    // keeping previous height before changing the content
    card.style.height = `${cardHeight}px`
    // align the text to center
    card.style.textAlign = "center";
    // getting card-head
    const cardHead = document.getElementById("card-head");
    // getting the images inside card-head
    const cardImageBefore = document.getElementById("card-image-before");
    const cardImageAfter = document.getElementById("card-image-after");
    
    // before i tried to change the class from rounded to high-img and change the source
    // cardImage.classList.replace("rounded", "high-img");
    // cardImage.src = "./images/illustration-thank-you.svg";

    // hiding the first image showing the second image and changing it margins
    cardImageBefore.style.display = "none"
    cardImageAfter.style.display = "block"
    cardImageAfter.style.margin = "20px auto auto auto"

    // save the rate-note element
    const existRateNote = document.getElementById("rate-note");

    // if a rate-note already exists remove it
    if (existRateNote) {
        existRateNote.remove();
    }

    // create a new rate-note element with id and class rate-note
    const rateNote = document.createElement("p");
    rateNote.id = "rate-note";
    rateNote.classList.add("rate-note");
    // adding it in the final of card-head
    cardHead.append(rateNote);
    // saving the radio buttons
    const radios = document.getElementsByName("rating");
    // function to search the radios values and get the value of radio checked
    function searchCheck(radio) {
        if (radio.checked) {
            const value = radio.value;
            rateNote.innerText = `You selected ${value} out of 5`;
        }
    }
    // forEach for the radios
    radios.forEach(searchCheck);

    // getting and changing the card-title and card-paragraph
    const cardTitle = document.getElementById("card-title");
    cardTitle.innerText = "Thank you!";
    const textParagraph = document.getElementById("card-paragraph");
    textParagraph.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
    // then removing the form
    form.remove()
    
    e.preventDefault();
});