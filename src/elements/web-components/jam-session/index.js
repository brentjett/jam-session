import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from '../../store'

class TestReactInsideElement extends HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'closed' })
        render(
            <Provider store={store}>
                <Fragment>
                    <hero-one>Brent</hero-one>
                    <features-row-one></features-row-one>
                </Fragment>
            </Provider>,
            shadow
        )
    }
}
customElements.define('jam-session', TestReactInsideElement )
