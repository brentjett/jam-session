import { LitElement, html } from '@polymer/lit-element'

const base = 'https://cdn.jsdelivr.net/gh/brentjett/jam-session/build/'

const rows = {
    triple: {
        background: '#dbe7f6',
        srcset: base + 'assets/triple-feature.png 2x'
    },
    "reading-list": {
        srcset: base +  'assets/reading-list.png 2x',
        background: '#f9f9fb',
    },
    "split-feature": {
        srcset: base +  'assets/split-feature.png 2x',
    },
    "hero-1": {
        srcset: base + 'assets/hero1.png 2x'
    },
    "diy": {
        srcset: base + 'assets/diy.png 2x',
        background: 'black'
    }
}

class SSRowElement extends LitElement {
    static get properties() {
        return {
            name: { type: String }
        }
    }

    render() {
        const defaults = {
            background: '#000000',
            srcset: 'assets/triple-feature.png 2x'
        }
        const name = this.name
        const row = {...defaults, ...rows[name] }
        return html `
            <style>
                .outer {
                    background: ${row.background};
                }
                img {
                    position: relative;
                    left: 50%;
                    transform: translateX(-50%);
                    display:block;
                }
            </style>
            <div class="outer">
                <img srcset="${row.srcset}" />
            </div>
        `
    }
}
customElements.define('ss-row', SSRowElement )
