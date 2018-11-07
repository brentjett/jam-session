import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'

const rows = [
    <ss-row name="triple"></ss-row>,
    <ss-row name="reading-list"></ss-row>,
    <ss-row name="split-feature"></ss-row>,
    <ss-row name="diy"></ss-row>,
    <ss-row name="hero-1"></ss-row>,
]

const RowGrid = props => {

    const gridStyles = {
        display: 'grid',
        gridGap: 10,
        gridTemplateColumns: `repeat(auto-fill, minmax(400px,1fr))`,
    }
    return (
        <div style={gridStyles}>
            { rows.map( (item, i) => (
                <div key={i}>
                    {item}
                </div>
            ))}
        </div>
    )
}

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
        const toolbarStyles = {
            display: 'flex',
            flexDirection: 'row',
            padding: 4,
            height: 40,
            background: 'white',
            border: '1px solid #e2e2e2',
            alignItems: 'stretch',
            justifyContent: 'center'
        }
        return (
            <div>

                <div style={toolbarStyles}>
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
window.customElements.define('row-switcher', RowSwitcherElement )
