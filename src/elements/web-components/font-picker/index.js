import { LitElement, html } from '@polymer/lit-element'

var isSetup = false

class FontPicker extends LitElement {
    constructor() {
        super()

        const loadScript = (url, resolve, reject) => {
            const el = document.createElement('script')
            el.src = url
            el.async = true
            el.onload = () => resolve() // loaded fine
            el.onerror = () => reject() // didn't load, throw exception

            document.head.appendChild(el) // adding script to document kicks off loading
        }

        if ( !isSetup ) {

            var typkt = new Promise( (resolve, reject) => loadScript('http://use.typekit.net/previewkits/pk-v1.js', resolve, reject ))
            var ccsdk = new Promise( (resolve, reject) => loadScript('https://cdn-creativesdk.adobe.io/v1/csdk.js', resolve, reject ))

            Promise.all( [typkt, ccsdk] )
                .then(() => {

                    // Setup Typekit Auth
                    window.TypekitPreview.setup({
                        'auth_id': '8aa27db63a8c4a49ac93bc25e2530493',
                        'auth_token': 'e9a65410-e240-4ccd-b7fe-b7daa2a1b9cb',
                    })
                    isSetup = true

                    this.setupFonts()
                })
                .catch(() => console.log('nope, didnt load.') )
        }
    }
    static get properties() {
        return {}
    }

    setupFonts() {
        console.log('set up some fonts, hey')
    }

    render() {
        return html `
            <div>Font Picker</div>
        `
    }
}
customElements.define('font-picker', FontPicker )
