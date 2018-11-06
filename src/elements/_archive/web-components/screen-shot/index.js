import { LitElement, html } from '@polymer/lit-element'

class ScreenShotRow extends LitElement {

    static get properties() {
        return { name: { type: String } }
    }

    render() {
        return html `
            <style>
                .screenshot-row {
                    background:white;
                }
            </style>
            <div class="screenshot-row">
                screenshot
            </div>
        `
    }
}
customElements.define('screen-shot', ScreenShotRow )
