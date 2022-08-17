# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript (menu bar interaction)
- SVG

### What I learned

To see how you can add code snippets, see below:
With this challenge, I got more comfortable with positioning though I'm not the best at it yet.

```css
.learn-more {
  font-family: Fraunces, sans-serif;
  font-weight: 700;
  text-decoration: none;
  color: black;
  position: relative;
}
.learn-more::after {
  content: "";
  background-color: rgba(250, 212, 0, 0.2);
  z-index: -1;
  border-radius: 3px;
  width: 140px;
  display: block;
  height: 0.8em;
  position: absolute;
  top: 12px;
  left: -5px;
}
```

I used positioning to add decorative underlines on the learn more links. I learned to properly use `relative` and `absolute`.
_Relative_ doesn't break the flow of the DOM while _absolute_ does. If relative is used to the parent element and then absolute to the child element, the flow won't break.

I also learned to use `srcset` in this exercise.

```html
<img
  src="./images/desktop/image-transform.jpg"
  srcset="
    /images/mobile/image-transform.jpg   375w,
    /images/desktop/image-transform.jpg 1140w
  "
  alt="egg on a yellow background"
/>
```

Responsive design is one aspect that I've been trying to get better at
I haven't been able to properly apply the use of srcset as it is a new discovery for me today and from what I gather is that it works with the pixel value of the device and not of the browser (This cannot be seen by resizing the browser window. I have been able to see difference when running this on emulation on the dev tools).

One final thing is about `flexbox` and `grid`. One of the most confusing things in both is when to use `justify` or `align` but I found out that `justify` is for rows and `align` is for columns. I still haven't utilized the grid and flexbox properly in this project.

### Continued development

`Flexbox` and `Grid` is one aspect that I wish to get better at. I have been trying learn it for a while with tutorials I can follow them but when I try it myself I get confused. I'm not too confident with my solution here but it somehow works. I intend to revise this based on feedback.
