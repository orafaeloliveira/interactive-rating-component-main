const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    // get the whole card
    const card = document.querySelector("section.card");
    // align-text: center
    card.style.textAlign = "center";
    // get card-head
    const cardHead = document.getElementById("card-head");
    // get the image inside card-head
    const cardImage = document.getElementById("card-image");
    // change class from rounded to high-img
    cardImage.classList.replace("rounded", "high-img");
    // add margin-top to it and change the image source
    cardImage.style.marginTop = "20px";
    cardImage.src = "./images/illustration-thank-you.svg";

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
    // looping the radios
    radios.forEach(searchCheck);

    // getting and changing the card-title and card-paragraph
    const cardTitle = document.getElementById("card-title");
    cardTitle.innerText = "Thank you!";
    const textParagraph = document.getElementById("card-paragraph");
    textParagraph.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
    form.remove()
    
    e.preventDefault();
});