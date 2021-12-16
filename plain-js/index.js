import { Theming } from 'https://studio.frontdynamics.com/latest/dist/lib/studio-web-components.js';

class App {
    constructor() {
        window.onload = () => {
            this.show();
            this.bindElements();
        };
        window.theming = new Theming();
    }
    show() {
        const host = document.querySelector('#host');
        host.style.visibility = 'visible';
    }
    bindElements() {
        for(let i=0; i<4; i++) {
            const slider = document.querySelector(`#slider${i}`);
            const label = document.querySelector(`#label${i}`);
            label.innerHTML = slider.value.toString();
            slider.addEventListener('studio-slider-value', (sliderValueEvent) => {
                const value = sliderValueEvent.studio.value.toFixed(0);
                label.innerHTML = value.toString();
            });
        }
    }
}
const app = new App();