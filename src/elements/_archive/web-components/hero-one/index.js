import { LitElement, html } from '@polymer/lit-element'

class HeroOne extends LitElement {
    static get properties() {
        return {
            name: { type: String }
        }
    }

    render() {
        return html `
            <div>
                <style>
                    h1 {
                        color: purple;
                    }
                </style>
                <h1>Hey just testing, <slot></slot></h1>
            </div>
        `
    }
}
customElements.define('hero-one', HeroOne )
