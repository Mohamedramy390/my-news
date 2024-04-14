class Slider extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `<h1>hello</h1>`;
    }
}

window.customElements.define('slider-component', Slider);