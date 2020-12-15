import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() { 
        return (
            <div onClick={this.handleClick.bind(this)}>{this.props.content}-{this.props.index}</div>
         );
    }
    handleClick() {
        this.props.deleteItem(this.props.index)
    }
}
XiaojiejieItem.propTypes = {
    content: PropTypes.string,
    index: PropTypes.number.isRequired,
    deleteItem: PropTypes.func
}
 
export default XiaojiejieItem;