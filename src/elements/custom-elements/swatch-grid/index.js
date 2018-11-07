import { LitElement, html } from '@polymer/lit-element'

class SwatchGrid extends LitElement {
    render() {
        const base = 'https://cdn.jsdelivr.net/gh/brentjett/jam-session/build/assets/swatches/'
        return html `
        <div class="swatch-grid">
            <style>
            .swatch-grid {
                display: grid;
                grid-template-columns: repeat(20, 1fr);
                grid-template-rows: repeat(10, 1fr);
                height: 50vw;
            }
            .swatch {
                background: red;
                grid-column: span 1;
                grid-row: span 1;
                border:0px solid transparent;
                transition-property:border;
                transition-duration:.5s;
            }
            .swatch:hover {
                border: 30px solid white;
            }
            </style>
            <!-- Tans -->
            <div class="swatch" style="background: #D7D1C9; grid-column-start: 1; grid-row-start: 2"></div>
            <div class="swatch" style="background: #A89B84; grid-column-start: 1; grid-row-start: 3"></div>
            <div class="swatch" style="background: #CEBA97; grid-column-start: 1; grid-row-start: 4"></div>
            <div class="swatch" style="background: #B19A70; grid-column-start: 1; grid-row-start: 5"></div>

            <!-- Oranges -->
            <div class="swatch" style="background: #924B1B; grid-column-start: 2; grid-row-start: 5"></div>
            <div class="swatch" style="background: #C44F00; grid-column-start: 2; grid-row-start: 6"></div>
            <div class="swatch" style="background: #9C3F00; grid-column-start: 2; grid-row-start: 7"></div>
            <div class="swatch" style="background: #92241B; grid-column-start: 2; grid-row-start: 8"></div>
            <div class="swatch" style="background: #9A0000; grid-column-start: 2; grid-row-start: 9"></div>

            <!-- Pinks -->
            <div class="swatch" style="background: #97133D; grid-column-start: 3; grid-row-start: 3"></div>
            <div class="swatch" style="background: #AB375C; grid-column-start: 3; grid-row-start: 4"></div>
            <div class="swatch" style="background: #681A2B; grid-column-start: 3; grid-row-start: 5"></div>
            <div class="swatch" style="background: #560A32; grid-column-start: 3; grid-row-start: 6"></div>

            <!-- Purples -->
            <div class="swatch" style="background: #56446B; grid-column-start: 4; grid-row-start: 4"></div>
            <div class="swatch" style="background: #1E1B46; grid-column-start: 4; grid-row-start: 5"></div>
            <div class="swatch" style="background: #0A1034; grid-column-start: 4; grid-row-start: 6"></div>
            <div class="swatch" style="background: #0A102B; grid-column-start: 4; grid-row-start: 7"></div>

            <!-- Blues -->
            <div class="swatch" style="background: #144377; grid-column-start: 5; grid-row-start: 5"></div>
            <div class="swatch" style="background: #012357; grid-column-start: 5; grid-row-start: 6"></div>
            <div class="swatch" style="background: #002144; grid-column-start: 5; grid-row-start: 7"></div>
            <div class="swatch" style="background: #012537; grid-column-start: 5; grid-row-start: 8"></div>

            <!-- Teals -->
            <div class="swatch" style="background: #7F979D; grid-column-start: 6; grid-row-start: 2"></div>
            <div class="swatch" style="background: #477282; grid-column-start: 6; grid-row-start: 3"></div>
            <div class="swatch" style="background: #175562; grid-column-start: 6; grid-row-start: 4"></div>
            <div class="swatch" style="background: #00434B; grid-column-start: 6; grid-row-start: 5"></div>
            <div class="swatch" style="background: #013636; grid-column-start: 6; grid-row-start: 6"></div>

            <!-- Greens -->
            <div class="swatch" style="background: #0F4427; grid-column-start: 7; grid-row-start: 7"></div>
            <div class="swatch" style="background: #1D3719; grid-column-start: 7; grid-row-start: 8"></div>
            <div class="swatch" style="background: #34501F; grid-column-start: 7; grid-row-start: 9"></div>
            <div class="swatch" style="background: #19240C; grid-column-start: 7; grid-row-start: 10"></div>

            <!-- Swamp Greens -->
            <div class="swatch" style="background: #B7B92F; grid-column-start: 8; grid-row-start: 4"></div>
            <div class="swatch" style="background: #AAAB11; grid-column-start: 8; grid-row-start: 5"></div>
            <div class="swatch" style="background: #7E8000; grid-column-start: 8; grid-row-start: 6"></div>
            <div class="swatch" style="background: #857D02; grid-column-start: 8; grid-row-start: 7"></div>

            <!-- Earth Browns -->
            <div class="swatch" style="background: #A3935D; grid-column-start: 9; grid-row-start: 5"></div>
            <div class="swatch" style="background: #8C7740; grid-column-start: 9; grid-row-start: 6"></div>
            <div class="swatch" style="background: #856B4B; grid-column-start: 9; grid-row-start: 7"></div>
            <div class="swatch" style="background: #392411; grid-column-start: 9; grid-row-start: 8"></div>

            <!-- Coffee -->
            <div class="swatch" style="background: #AF9C7D; grid-column-start: 10; grid-row-start: 2"></div>
            <div class="swatch" style="background: #847765; grid-column-start: 10; grid-row-start: 3"></div>
            <div class="swatch" style="background: #736053; grid-column-start: 10; grid-row-start: 4"></div>
            <div class="swatch" style="background: #5A4A3A; grid-column-start: 10; grid-row-start: 5"></div>

            <!-- Golds -->
            <div class="swatch" style="background: #845E13; grid-column-start: 11; grid-row-start: 5"></div>
            <div class="swatch" style="background: #5D4514; grid-column-start: 11; grid-row-start: 6"></div>
            <div class="swatch" style="background: #000; grid-column-start: 11; grid-row-start: 7; background-image:url(${base}one.jpg)"></div>
            <div class="swatch" style="background: #3F2E15; grid-column-start: 11; grid-row-start: 8"></div>
            <div class="swatch" style="background: #2A2116; grid-column-start: 11; grid-row-start: 9"></div>

            <!-- Oranges -->
            <div class="swatch" style="background: #B06C1B; grid-column-start: 12; grid-row-start: 1"></div>
            <div class="swatch" style="background: #A4531E; grid-column-start: 12; grid-row-start: 2"></div>
            <div class="swatch" style="background: #000; grid-column-start: 12; grid-row-start: 3"></div>
            <div class="swatch" style="background: #743A1D; grid-column-start: 12; grid-row-start: 4"></div>
            <div class="swatch" style="background: #6D371E; grid-column-start: 12; grid-row-start: 5"></div>

            <!-- Rust -->
            <div class="swatch" style="background: #803023; grid-column-start: 13; grid-row-start: 4"></div>
            <div class="swatch" style="background: #612F24; grid-column-start: 13; grid-row-start: 5"></div>
            <div class="swatch" style="background: #000; grid-column-start: 13; grid-row-start: 6"></div>
            <div class="swatch" style="background: #574331; grid-column-start: 13; grid-row-start: 7"></div>

            <!-- Poppy Reds -->
            <div class="swatch" style="background: #A13437; grid-column-start: 14; grid-row-start: 2"></div>
            <div class="swatch" style="background: #8F292F; grid-column-start: 14; grid-row-start: 3"></div>
            <div class="swatch" style="background: #000; grid-column-start: 14; grid-row-start: 4"></div>
            <div class="swatch" style="background: #8B3332; grid-column-start: 14; grid-row-start: 5"></div>

            <!-- Beige -->
            <div class="swatch" style="background: #4B3033; grid-column-start: 15; grid-row-start: 6"></div>
            <div class="swatch" style="background: #582A34; grid-column-start: 15; grid-row-start: 7"></div>
            <div class="swatch" style="background: #000; grid-column-start: 15; grid-row-start: 8"></div>
            <div class="swatch" style="background: #421B20; grid-column-start: 15; grid-row-start: 9"></div>

            <!-- Dark Blues -->
            <div class="swatch" style="background: #1D1F2B; grid-column-start: 16; grid-row-start: 4"></div>
            <div class="swatch" style="background: #000; grid-column-start: 16; grid-row-start: 5"></div>
            <div class="swatch" style="background: #272B40; grid-column-start: 16; grid-row-start: 6"></div>
            <div class="swatch" style="background: #12183A; grid-column-start: 16; grid-row-start: 7"></div>
            <div class="swatch" style="background: #0A0D1A; grid-column-start: 16; grid-row-start: 8"></div>

            <!-- Teals -->
            <div class="swatch" style="background: #0D4752; grid-column-start: 17; grid-row-start: 1"></div>
            <div class="swatch" style="background: #000; grid-column-start: 17; grid-row-start: 2"></div>
            <div class="swatch" style="background: #123E43; grid-column-start: 17; grid-row-start: 3"></div>
            <div class="swatch" style="background: #203337; grid-column-start: 17; grid-row-start: 4"></div>

            <!-- Swamp Greens -->
            <div class="swatch" style="background: #535020; grid-column-start: 18; grid-row-start: 5"></div>
            <div class="swatch" style="background: #000; grid-column-start: 18; grid-row-start: 6"></div>
            <div class="swatch" style="background: #4E4E32; grid-column-start: 18; grid-row-start: 7"></div>
            <div class="swatch" style="background: #2B3729; grid-column-start: 18; grid-row-start: 8"></div>
            <div class="swatch" style="background: #2C2E22; grid-column-start: 18; grid-row-start: 9"></div>

            <!-- Swamp Golds -->
            <div class="swatch" style="background: #4E3B1A; grid-column-start: 19; grid-row-start: 3"></div>
            <div class="swatch" style="background: #000; grid-column-start: 19; grid-row-start: 4"></div>
            <div class="swatch" style="background: #3D3417; grid-column-start: 19; grid-row-start: 5"></div>
            <div class="swatch" style="background: #393417; grid-column-start: 19; grid-row-start: 6"></div>
            <div class="swatch" style="background: #584D26; grid-column-start: 19; grid-row-start: 7"></div>

            <!-- Blacks -->
            <div class="swatch" style="background: #1F1A16; grid-column-start: 20; grid-row-start: 4"></div>
            <div class="swatch" style="background: #31261D; grid-column-start: 20; grid-row-start: 5"></div>
            <div class="swatch" style="background: #000; grid-column-start: 20; grid-row-start: 6"></div>
            <div class="swatch" style="background: #241305; grid-column-start: 20; grid-row-start: 7"></div>


        </div>
        `
    }
}

customElements.define('swatch-grid', SwatchGrid )
