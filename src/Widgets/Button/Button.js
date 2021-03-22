import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Button extends Component {
    static propTypes = {

    }

    render() {
        return (
            <button className={this.props.class}>
               {this.props.label}
            </button>
        )
    }
}

export default Button
