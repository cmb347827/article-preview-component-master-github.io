# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

### Screenshot

[screenshot.png](https://postimg.cc/xkVrcHNM)


### Links

- Solution URL: [Github](https://github.com/cmb347827/article-preview-component-master-github.io)
- Live Site URL: [Github live](https://cmb347827.github.io/article-preview-component-master-github.io/)

## My process

### Built with

- Semantic HTML5 markup
- Bootstrap
- Sass/SCSS
- Mobile-first workflow


### What I learned

- I had some brouwser/devtools , perhaps console.log related problem? My jQuery code wouldn't fire on the hover event, only when I mouse clicked.
- Lost a day trying all kinds of code 'fixes' to try to solve this issue. Finally, stackoverflow helped. 
- I had some more issues related to using Bootstrap (inline code) vs my external JS file. I couldn't figure out why I couldn't hide the `.hide` class
- Turns out I was using Bootstrap to `display:flex` etc, while I wanted to hide this element using `display:none` in JS. Adding the `display:flex` to my SCSS file instead fixed that.
- I also had some trouble positioning the share button on top of the `.hide-show` class in mobile, when the share button is clicked.
- Using a simple negative margin fixed that.
- I also had initiall set the `.container` class to `overflow:hidden`,as I wanted to add a border-radius to it, but this hid the `.hide-show` class from sticking out beyond the edge in desktop.
- I added that the popup hides again when the user hovers away from the popup.

### Continued development

- Daily tutorials and projects in HTML5, CSS3, Javascript, Bootstrap, Sass/SCSS, some Jquery. For now. In time I will go re-learn React ect.

### Useful resources

- [Console.log problems and dev tools ](https://stackoverflow.com/questions/17327952/jquery-hover-only-works-on-click-event) - Opening the page in another tab works.
- [Why does JavaScript only work after opening developer tools in IE once?](https://stackoverflow.com/questions/7742781/why-does-javascript-only-work-after-opening-developer-tools-in-ie-once) - Here they think it could be console.log related.


## Author

- Website - [One of my latest codepens](https://codepen.io/cynthiab72/pen/oNybYON)
- Frontend Mentor - [@cmb347827](https://www.frontendmentor.io/profile/cmb347827)

