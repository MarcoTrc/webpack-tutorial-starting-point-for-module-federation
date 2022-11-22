import Heading from './components/heading/heading.js';
import KiwiImage from './components/kiwi-image/kiwi-image.js';

import('HelloWorldApp/HtmlEsposto')
.then(pippo => {
    const HtmlDaEsporre = pippo.default
    console.log(HtmlDaEsporre);
    var container = document.createElement('div');
    container.innerHTML = HtmlDaEsporre;
    document.body.appendChild(container)
  
})

const heading = new Heading();
heading.render('kiwi');
const kiwiImage = new KiwiImage();
kiwiImage.render();

import('HelloWorldApp/Esponi')
.then(EsponiModule => {
    const Esponi = EsponiModule.default;
    const esponi = new Esponi();
    esponi.render();
})




