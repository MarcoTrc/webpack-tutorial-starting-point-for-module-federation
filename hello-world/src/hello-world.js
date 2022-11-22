import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from './components/heading/heading.js';

class Esponi {

    render() {

        const heading = new Heading();
        heading.render('hello world');
        const helloWorldButton = new HelloWorldButton();
        helloWorldButton.render();
        
    }
}

export default Esponi;

