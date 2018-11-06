import { LitElement, html } from '@polymer/lit-element'

class FeaturesRowOne extends LitElement {
    static get properties() {
        return {
            name: { type: String }
        }
    }

    render() {
        return html `
            <style>
                h1 {
                    color: purple;
                }
            </style>
            <div>
                <h1>Feature Split</h1>
            </div>
        `
    }
}
customElements.define('features-row-one', FeaturesRowOne )
