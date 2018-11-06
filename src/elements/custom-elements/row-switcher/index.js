import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'

const rows = [
    <ss-row name="triple"></ss-row>,
    <ss-row name="reading-list"></ss-row>,
    <ss-row name="split-feature"></ss-row>,
]

// React Component
class RowSwitcher extends Component {
    constructor(props) {
        super(props)

        this.state = {
            index: 0
        }

        this.onNext = this.onNext.bind(this)
        this.onPrev = this.onPrev.bind(this)
    }

    onNext() {
        this.setState({
            index: ( this.state.index + 1 + rows.length ) % rows.length
        })
    }

    onPrev() {
        this.setState({
            index: ( this.state.index - 1 + rows.length ) % rows.length
        })
    }

    render() {
        const element = rows[this.state.index]
        return (
            <div>
                <div>
                    <button onClick={this.onPrev}>Prev</button>
                    <button onClick={this.onNext}>Next</button>
                </div>
                <div onClick={this.onNext}>{element}</div>
            </div>
        )
    }
}

class RowSwitcherElement extends HTMLElement {

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'closed' })
        const element = rows[0]
        render(
            <RowSwitcher />,
            shadow
        )
    }
}
customElements.define('row-switcher', RowSwitcherElement )
