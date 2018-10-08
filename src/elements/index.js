import { LitElement, html } from '@polymer/lit-element'

class BRJTestHero extends LitElement {

    static get properties() {
        return {
            name: { type: String }
        }
    }

    render() {
        return html `
            <div>
                <h1>Hey just testing, ${this.name}</h1>
            </div>
        `
    }
}

customElements.define('brj-element', BRJTestHero )
