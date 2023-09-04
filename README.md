# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

#### Desktop
![Desktop Design](https://i.imgur.com/L6q2Y1l.png)
![Active Status](https://i.imgur.com/4ox0DrR.png)
![Desktop Thank You](https://i.imgur.com/943rJz5.png)

#### Mobile
![Mobile Design](https://i.imgur.com/1e2joQd.png)
![Mobile Thank You](https://i.imgur.com/67QSUed.png)

### Links

- Solution URL: [Interactive Rating Component solution on GitHub](https://github.com/orafaeloliveira/interactive-rating-component-main)
- Live Site URL: [Interactive Rating Component live site on GitHub Pages](https://orafaeloliveira.github.io/interactive-rating-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript
- Media Query for mobile site
- DOM manipulation


### What I learned

This project was important to put my first knowledge of JavaScript in practice. I tried first to get the number rating using the URL info, but I remembered that I could get what HTML is checked and get it value, so it was easier for me using this method.

```html
<input type="radio" name="rating" id="one" value="1">
<label for="one">1</label>
```

I tried to use a forEach loop to search the checked radio but it's performance it wasn't good because it search for every single radio of my form even it wasn't checked, so I change to a for loop that stop the loop with a break when found a radio checked.

```js
for (let i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
            const value = radios[i].value
            rateNote.innerText = `You selected ${value} out of 5`;
            break
        }
    }
```

## Author

- Frontend Mentor - [@orafaeloliveira](https://www.frontendmentor.io/profile/orafaeloliveira)
- Instagram - [@rafael.zip](https://www.instagram.com/rafael.zip)
- LinkedIn - [Rafael Oliveira](https://www.linkedin.com/in/rafaeloliveira-ds/)