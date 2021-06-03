const faders = document.querySelectorAll(".fade-in"); /*querySelectorAll anvendes for at ramme flere elementer - alle elementer med class'en ".fade-in" (kaldes en fader)*/
const sliders = document.querySelectorAll(".slide-in"); /*querySelectorAll anvendes for at ramme flere elementer - alle elementer med class'en ".slide-in" (kaldes en slider)*/

const appearOptions = { /*appearOptions defineres*/
  threshold: 0, /*Gør at elementerne ikke behøver at være 100% synlige på siden før "appearOnScroll virker*/
  rootMargin: "0px 0px -300px 0px" /*Bestemmer hvor langt man skal scrolle ned på siden før*/
};

const appearOnScroll = new IntersectionObserver(function( /*"Observer" funktion kaldes appearOnScroll og oprettes*/
  entries, /*I funktionen anvendes "entries" og "appearOnScroll"*/
  appearOnScroll
) {
  /*If-else-sætning anvendes - selve funktionen starter her*/
  entries.forEach(entry => { /*Hver "entries" opsættes*/
    if (!entry.isIntersecting) { /*Hvis siden ikke er "intersecting", er det falsk og den skal retunere*/
      return;
    } else { /*Hvis siden er "intersecting", er det sandt og den skal køre funktionen*/
      entry.target.classList.add("appear"); /*Får elementerne til at dukke op på siden ved at køre funktionen*/
      appearOnScroll.unobserve(entry.target); /*Fortæller funktionen at den skal stoppe med at lede når den har gjort det den skal*/
    }
  });
},
                                                
                                                
appearOptions); /*appearOptions defineres ovenstående under "const appearOptions"*/

faders.forEach(fader => { 
  appearOnScroll.observe(fader); /*Hver "fader" observeres og opsættes til at dukke op ved scroll*/
});

sliders.forEach(slider => {/**/
  appearOnScroll.observe(slider);  /*Hver "slider" observeres og opsættes til at dukke op ved scroll*/
});